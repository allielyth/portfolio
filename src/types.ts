export interface Project {
  id: string;
  title: string;
  category: "brand" | "poster" | "editorial" | "packaging";
  thumbnail: string;
  client: string;
  date: string;
  tags: string[];
  colors: string[];
  fontFamily: string;
  inspiration: string;
  description: string;
  longDescription: string;
  deliverables: string[];
  specs: { [key: string]: string };
}

export interface ChatMessage {
  id: string;
  role: "user" | "model" | "system";
  text: string;
  timestamp: Date;
}

export interface CreativeBrief {
  title: string;
  client: string;
  sector: string;
  targetAudience: string;
  objectives: string;
  deliverables: string[];
  styleDirectives: string;
}
