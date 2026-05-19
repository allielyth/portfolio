import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI, Type } from "@google/genai";
import { createServer as createViteServer } from "vite";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = 3000;

// Initialize GoogleGenAI client lazily or safely
let aiClient: GoogleGenAI | null = null;
function getGenAIClient(): GoogleGenAI | null {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (key && key !== "MY_GEMINI_API_KEY") {
      aiClient = new GoogleGenAI({
        apiKey: key,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });
    }
  }
  return aiClient;
}

// REST API Routes

// Route 1: Generate custom design briefs using Gemini
app.post("/api/brief-generator", async (req, res) => {
  const { sector, focusStyle } = req.body;
  const client = getGenAIClient();

  if (!client) {
    // Return high-quality, pre-compiled fallback briefs if Gemini is offline/unconfigured
    const fallbacks = [
      {
        title: "Kōsen tea label identity",
        client: "Kōsen Botanical",
        sector: "Beverage / Organic tea",
        targetAudience: "Young urban professionals looking for caffeine-free sensory relaxation",
        objectives: "Create a modern, organic, tactile tea packaging system and typographic branding guidelines. The packaging must show high-end sustainability and modern typographic clarity.",
        deliverables: ["Product Label Design", "Brand Guidelines Booklet Part 1", "Outer Cardboard Tube Box Layout"],
        styleDirectives: "Emphasize negative space, soft beige tones, minimalist botanical layout, Swiss sans-serif typography like Inter, mixed with elegant serif details for brand values."
      },
      {
        title: "Metropolis Synthwave Vol. IV Cover",
        client: "Vektor Waves Records",
        sector: "Music / Entertainment",
        targetAudience: "Synthwave, retrowave, and ambient digital music enthusiasts",
        objectives: "Design a striking retro-futuristic album cover. The graphics must fuse Swiss-style typography with heavy cyberpunk elements, neon overlays, and schematic layout borders.",
        deliverables: ["Vinyl Outer Jacket (12\")", "Streaming Platforms Thumbnail Art", "Promotional Poster (A2 size)"],
        styleDirectives: "Use contrasting neon blue, electric magenta, and infinite pitch black. Bring in typographic blueprints, geometric symbols, and cybernetic text elements."
      }
    ];
    // Pick based on sector or random
    const idx = (sector && sector.toLowerCase().includes("music")) ? 1 : 0;
    return res.json({
      success: true,
      brief: fallbacks[idx],
      isFallback: true,
      message: "Showing expert pre-designed brief (Configure your GEMINI_API_KEY to generate infinitely unique briefs!)"
    });
  }

  try {
    const prompt = `Generate a realistic, super polished creative graphic design project brief for a client in the sector "${sector}" focusing on "${focusStyle}" visual style. 
    You must output a single JSON object containing:
    1. title: Title of the project
    2. client: Fictional name of the client
    3. sector: Specific industry sector
    4. targetAudience: Description of target audience
    5. objectives: Short summary of what needs to be accomplished
    6. deliverables: Array of 3 specific graphic design assets 
    7. styleDirectives: Specific design, typography, spacing, or color aesthetics guidelines.`;

    const response = await client.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          required: ["title", "client", "sector", "targetAudience", "objectives", "deliverables", "styleDirectives"],
          properties: {
            title: { type: Type.STRING },
            client: { type: Type.STRING },
            sector: { type: Type.STRING },
            targetAudience: { type: Type.STRING },
            objectives: { type: Type.STRING },
            deliverables: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            styleDirectives: { type: Type.STRING }
          }
        }
      }
    });

    const bodyText = response.text || "{}";
    const data = JSON.parse(bodyText.trim());
    return res.json({
      success: true,
      brief: data,
      isFallback: false
    });
  } catch (error: any) {
    console.error("Gemini Brief Error:", error);
    return res.status(500).json({
      success: false,
      error: error.message || "Failed to generate design brief"
    });
  }
});

// Route 2: Design Companion AI review/critique agent
app.post("/api/design-chat", async (req, res) => {
  const { messages } = req.body;
  const client = getGenAIClient();

  if (!client) {
    // Elegant system assistant responses if backend API Key not present
    const userMsg = messages && messages.length > 0 ? messages[messages.length - 1].text : "";
    let reply = "I am Aura, your creative companion. To activate real-time intelligence, please configure your GEMINI_API_KEY in Settings > Secrets. \n\nIn the meantime, let's analyze some key graphic design principles:\n\n1. **Contrast is King**: Ensure your text-to-background contrast exceeds 4.5:1. \n2. **Type Scale**: Stick to a clear hierarchy (e.g., 64px for display, 24px for subheads, 16px for body).\n3. **White Space**: Let your elements breathe. 40% negative space makes layouts instantly twice as premium.";
    
    if (userMsg.toLowerCase().includes("color") || userMsg.toLowerCase().includes("palette")) {
      reply = "Here's a premium, modern architectural palette for your workspace design:\n\n- **Oatmeal Sand** (`#EFECE6`): Soft warmth for high-end backgrounds.\n- **Charcoal Ink** (`#1E1F21`): Sleek and profound text weight.\n- **Terracotta Sien** (`#C87A53`): Earthy accent popping for highlights.\n- **Forest Moss** (`#3B463E`): Natural sub-branding depth.\n\n*Configure your GEMINI_API_KEY to get dynamically-computed palettes for any custom design mood!*";
    } else if (userMsg.toLowerCase().includes("font") || userMsg.toLowerCase().includes("typography")) {
      reply = "For pristine typographic pairings, consider this modern Swiss formula:\n\n- **Display Title**: *Space Grotesk* (Tracking: `-0.04em`, Weight: `500` - futuristic and geometry-driven).\n- **Body text**: *Inter* (Tracking: `-0.01em`, Weight: `400` - beautiful readability & screen performance).\n- **Detail accents**: *JetBrains Mono* (Tracking: `0.05em`, uppercase, size: `0.75rem` - gives technical authenticity).";
    }

    return res.json({
      success: true,
      reply
    });
  }

  try {
    // Format messages for the chat history
    // We can use ai.chats or generateContent with appropriate history
    const geminiHistory = messages.map((m: any) => ({
      role: m.role === "user" ? "user" : "model",
      parts: [{ text: m.text }]
    }));

    const response = await client.models.generateContent({
      model: "gemini-3.5-flash",
      contents: geminiHistory,
      config: {
        systemInstruction: `You are 'Aura', a legendary, sophisticated Creative Director and design companion. 
        You give razor-sharp, inspiring, professional constructive critique on graphic design concepts, corporate identities, layout structures, colors, and font pairings.
        Always suggest specific colors as HEX codes and names. Suggest precise layout ratios or typographic choices (e.g. tracks, line-heights, serif vs sans mixtures).
        Be sophisticated, design-literate, incredibly warm, polite, yet professional and direct. Do not write extremely long lectures, keep it structure-oriented and elegant. Use beautiful markdown formatting.`,
      }
    });

    return res.json({
      success: true,
      reply: response.text || "I was unable to formulate a review. Let's try restructuring the concept!"
    });
  } catch (error: any) {
    console.error("Gemini Chat Error:", error);
    return res.status(500).json({
      success: false,
      error: error.message || "Failed to communicate with Aura Assistant"
    });
  }
});

// Vite & Static file serving setup
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running in ${process.env.NODE_ENV || "development"} mode on port ${PORT}`);
  });
}

startServer();
