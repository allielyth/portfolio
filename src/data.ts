import { Project } from "./types";

export const portfolioProjects: Project[] = [
  {
    id: "proj_01",
    title: "Sōma Tea Brand Identity",
    category: "brand",
    thumbnail: "/src/assets/images/brand_identity_mockup_1779230162620.png",
    client: "Sōma Botanicals Ltd",
    date: "October 2025",
    tags: ["Brand Book", "Corporate Guidelines", "Minimalism", "Swiss Grid"],
    colors: ["#EFECE6", "#1E1F21", "#3B463E", "#C87A53", "#8C9B90"],
    fontFamily: "Space Grotesk & Inter",
    inspiration: "Inspired by mid-century Japanese structural design combined with Scandinavian minimalism. Focusing on natural textures, extremely generous margins, and balanced, organic visual asymmetry.",
    description: "A complete unified brand book for an organic botanical luxury tea label, highlighting sustainable layouts and clear typographic hierarchies.",
    longDescription: "Sōma Botanicals required a luxurious, yet humble system that communicated high nutritional integrity and quiet organic serenity. The design structure relies on a strict Swiss typographic grid, leaving over 45% of each spread deliberately empty as a metaphorical 'breathing space'. This portfolio catalog displays page compositions, geometric logo specs, corporate stationary guidelines, and typographic ratios designed for print and digital ecosystems.",
    deliverables: [
      "80-Page Brand Identity Book",
      "Custom Monogram Seal Design",
      "Sustainable Cotton Stationary Mockups"
    ],
    specs: {
      "Typography": "Space Grotesk (Main Titles), Inter (Body copy)",
      "Grid Ratio": "8-Column asymmetrical typographic layout",
      "Colors Base": "Warm Off-White, Charcoal, Forest Green",
      "Paper Stock": "Munken Kristall Rough 120gsm (1.33 bulk)",
      "Software": "Adobe InDesign, Illustrator, Figma"
    }
  },
  {
    id: "proj_02",
    title: "Aetheria Beauty Packaging",
    category: "packaging",
    thumbnail: "/src/assets/images/packaging_mockup_1779230181900.png",
    client: "Aetheria Skinlabs",
    date: "December 2025",
    tags: ["Lux Cosmetics", "Bottle Mockup", "Eco Glass", "Foil Stamping"],
    colors: ["#D4CFC5", "#1C1C1E", "#9A7E6C", "#E3DED8", "#594A42"],
    fontFamily: "Laub Serif & Inter Mono",
    inspiration: "Focused on elemental beauty and geological purity. Drawing inspiration from travertine stone blocks, natural sandstone ripples, and clinical cosmetic accuracy.",
    description: "An ultra-premium minimal skincare line packaging, featuring matte frosted amber bottles, sleek travertine stands, and foil-stamped typography.",
    longDescription: "Aetheria requested a signature outer glass-bottle silhouette that would feel like an architectural sculpture on a vanity. We developed custom cylindrical amber glass mockups showcasing crisp, silk-screened black text. The packaging boxes are constructed with bio-cellulose fiberboard, relying entirely on physical embossing and bronze hot-foil stamping instead of high-emission chemical solvents.",
    deliverables: [
      "Custom Glass Bottle Mold Layouts",
      "Embossed Eco-Fiberboard Box Die-cuts",
      "E-Commerce Product Visual Strategy"
    ],
    specs: {
      "Typography": "Apercu Pro (Main Tech Specs), Garamond Premier Pro (Emblems)",
      "Grid Ratio": "Centered single-column label geometry",
      "Material": "Frosted Recyclable Amber Glass & Raw Travertine",
      "Finishes": "Silk-screened opaque matte white ink, direct micro-emboss",
      "Software": "Blender 3D, Adobe Photoshop, Illustrator"
    }
  },
  {
    id: "proj_03",
    title: "Synthwaves Vol. IV Cyber Poster",
    category: "poster",
    thumbnail: "/src/assets/images/poster_mockup_1779230198991.png",
    client: "Vektor Waves Electronics",
    date: "January 2026",
    tags: ["Cyberpunk", "Typographic Poster", "Vector Blueprint", "Neon Glow"],
    colors: ["#020205", "#00F0FF", "#FF007F", "#4B0082", "#FFFFFF"],
    fontFamily: "JetBrains Mono & Neue Haas Grotesk",
    inspiration: "Taking inspiration from architectural CAD blueprints, computer-assisted wireframes, and late 80s Tokyo arcade terminal system interfaces.",
    description: "A neon-infused technical music poster fusing structured informational Swiss typography layout with cybernetic layout boundaries.",
    longDescription: "Constructed as a promotional typographic poster for an indoor ambient electronic performance. The layout balances strict functional data lists (dates, sound stages, acoustic configurations) with electric cyberpunk glows, layout wireframes, and retro-grid elements. Designed for maximum high-contrast visual impact under dark lights.",
    deliverables: [
      "A1 Printed Graphic Poster (Dual-ink screenprint)",
      "Social Media Motion Poster Design",
      "Interactive 3D Stage Projection Backdrop"
    ],
    specs: {
      "Typography": "JetBrains Mono (Information lists), PP Neue Montreal (Displays)",
      "Grid Ratio": "Complex multi-layered blueprint modular grid",
      "Colors Base": "Luminous Electric Cyan, Neon Magenta, Deep Indigo, Pristine White",
      "Print Finish": "Intense fluorescent silk inks on black Plike paper",
      "Software": "Adobe Illustrator, afterEffects, Figma"
    }
  },
  {
    id: "proj_04",
    title: "Brutalist Editorial Specimen",
    category: "editorial",
    thumbnail: "/src/assets/images/magazine_mockup_1779230215294.png",
    client: "Modernist Typographic society",
    date: "March 2026",
    tags: ["Brutalist Magazine", "Type Specimen", "Paper Texture", "Duotone"],
    colors: ["#050505", "#F5F5F7", "#2D2D30", "#A8A8AC", "#E2E2E5"],
    fontFamily: "Integral CF & Monument Grotesk",
    inspiration: "Derived from brutalist concrete structures, structural integrity, high-contrast newsprint, and raw Swiss graphic design movements.",
    description: "An experimental type specimen magazine cover featuring bold layout headers, ink bleed textures, and realistic raw paper bends.",
    longDescription: "An exploration into the rough, physical boundaries of paper under brutalist conditions. Created as a seasonal publication cover for the Modernist Typographic Society. We combined gigantic typography that bleeds off the page edges, strict structural columns, absolute black background contrast, and textured newsprint grains, presenting the print design as a raw tangible art piece.",
    deliverables: [
      "Quarterly Magazine Layout Concept",
      "Web Companion Layout & Fluid Grid System",
      "Collectible Risograph Typographic Poster"
    ],
    specs: {
      "Typography": "Integral CF Bold (Mastheads), Founders Grotesk Mono (Captions)",
      "Grid Ratio": "Overlapped 4-column typographic structure",
      "Paper Stock": "Uncoated Recycled Newsprint 75gsm",
      "Print Tech": "Risograph Duotone (Charcoal Carbon & Pure Silver Spot)",
      "Software": "Adobe InDesign, Photoshop, Custom texture shader"
    }
  }
];
