// PROJECT MODEL
export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;   // must match categories[] inside each service
  service: string;    // must match service.id of services.ts
  image?: string;
  videoId?: string;
  stats?: {
    label: string;
    value: string;
  }[];
  technologies?: string[];
}

export const projects: Project[] = [

  // ----------------------------------------
  // ⭐ 1️⃣ WEB / APP DEVELOPMENT
  // ----------------------------------------
  {
    id: "web-1",
    title: "Luxury Jewely Website",
    description:
      "High-performance Luxury Jewely Website, SEO-optimized structure and lightning-fast UI.",
    category: "corporate",
    service: "web-app-development",
    videoId: "kl5mJSfx_3U",
    stats: [
      { label: "Page Speed", value: "98 Score" },
      { label: "Leads", value: "3× Increase" },
    ],
    technologies: ["Next.js", "React", "TailwindCSS"],
  },
  // {
  //   id: "web-2",
  //   title: "Modern Ecommerce Platform",
  //   description:
  //     "Custom ecommerce platform with secure checkout, admin panel, product management & analytics.",
  //   category: "ecommerce",
  //   service: "web-app-development",
  //   videoId: "YOUTUBE_ID_102",
  //   stats: [
  //     { label: "Conversion", value: "180% ↑" },
  //     { label: "Cart Value", value: "+$42" },
  //   ],
  //   technologies: ["Next.js", "Node.js", "Stripe"],
  // },
  // {
  //   id: "web-3",
  //   title: "SaaS Analytics Dashboard",
  //   description:
  //     "Custom SaaS platform with modular dashboards, user authentication and real-time metrics.",
  //   category: "saas",
  //   service: "web-app-development",
  //   videoId: "YOUTUBE_ID_103",
  //   stats: [
  //     { label: "Active Users", value: "12K+" },
  //     { label: "Uptime", value: "99.9%" },
  //   ],
  //   technologies: ["React", "NestJS", "PostgreSQL"],
  // },

  // ----------------------------------------
  // ⭐ 2️⃣ RFID SOLUTIONS
  // ----------------------------------------
  {
    id: "rfid-1",
    title: "RFID Technology",
    description:
      "A complete explainer video demonstrating how RFID works, including tag reading, data capture, antenna interaction, and real-time tracking fundamentals.",
    category: "warehouse",
    service: "rfid-solutions",
    videoId: "-nhRmIEnmCc",  // Your actual video
    stats: [
      { label: "Concepts Covered", value: "10+" },
      { label: "Duration", value: "Short Demo" }
    ],
    technologies: ["RFID Tags", "RFID Readers", "Antenna", "Middleware"]
  },
  // {
  //   id: "rfid-2",
  //   title: "RFID POS Billing System",
  //   description:
  //     "A demonstration of an RFID-enabled POS billing system showing how tagged items are instantly scanned, identified, and processed at checkout.",
  //   category: "retail",
  //   service: "rfid-solutions",
  //   videoId: "WdwCkzQ_Iac",
  //   stats: [
  //     { label: "Scan Speed", value: "Instant" },
  //     { label: "Items Processed", value: "Multiple at Once" }
  //   ],
  //   technologies: ["RFID Reader", "RFID Tags", "POS System", "Retail Checkout"]
  // },
  // {
  //   id: "rfid-3",
  //   title: "Pocket RFID Device",
  //   description:
  //     "A compact RFID handheld device designed for sales teams to scan assets, verify stock, and sync activity data in real-time for admin monitoring.",
  //   category: "manufacturing", // or "retail" or "manufacturing" — choose below!
  //   service: "rfid-solutions",
  //   videoId: "8oNWhmxAySo",
  //   stats: [
  //     { label: "Device Size", value: "Pocket-Friendly" },
  //     { label: "Real-Time Sync", value: "Enabled" }
  //   ],
  //   technologies: ["Handheld RFID", "UHF Reading", "Mobile Sync", "IoT"]
  // },
  {
    id: "rfid-4",
    title: "RFID Billing Tray for Jewelry & Retail",
    description:
      "RFID-enabled billing tray that instantly detects all tagged jewelry or products placed on it, enabling fast billing, stock visibility, and seamless checkout.",
    category: "retail",
    service: "rfid-solutions",
    videoId: "aG0mK2oUE2M",
    stats: [
      { label: "Billing Speed", value: "Instant Scan" },
      { label: "Items Detected", value: "Multiple at Once" }
    ],
    technologies: ["RFID Tray", "UHF Tags", "POS Integration", "Real-Time Sync"]
  },

  // ----------------------------------------
  // ⭐ 3️⃣ AUTOMATIONS
  // ----------------------------------------
  {
    id: "auto-1",
    title: "AI Smart TV Interface (Windows & Android)",
    description:
      "An AI-powered smart TV experience that runs on both Windows and Android, offering voice control, automated actions, and intelligent content navigation.",
    category: "ai",
    service: "automation",
    videoId: "cLecan6etHo",
    stats: [
      { label: "Platforms", value: "Windows & Android" },
      { label: "Interaction", value: "AI Voice Control" }
    ],
    technologies: ["AI Automation", "Android", "Windows", "Voice Commands", "Custom UI"]
  },
  // {
  //   id: "auto-2",
  //   title: "System Integration Pipeline",
  //   description:
  //     "Custom API integration connecting CRM, ERP, ecommerce and internal applications.",
  //   category: "automation",
  //   service: "automation",
  //   videoId: "YOUTUBE_ID_302",
  //   stats: [
  //     { label: "Sync Speed", value: "Real-Time" },
  //     { label: "Error Reduction", value: "80% ↓" },
  //   ],
  // },
  // {
  //   id: "auto-3",
  //   title: "AI Chatbot & Automation Bot",
  //   description:
  //     "AI-driven conversation bot for customer support and automated task handling.",
  //   category: "bots",
  //   service: "automation",
  //   videoId: "YOUTUBE_ID_303",
  //   stats: [
  //     { label: "Support Load", value: "60% ↓" },
  //     { label: "Response Time", value: "Instant" },
  //   ],
  // },

  // ----------------------------------------
  // ⭐ 4️⃣ CRM / ERP SYSTEMS
  // ----------------------------------------
  {
    id: "crm-1",
    title: "Sales CRM Automation",
    description:
      "Custom CRM with lead scoring, email automation and analytics dashboards.",
    category: "crm",
    service: "crm-erp",
    videoId: "kbvVLA5ee9w",
    stats: [
      { label: "Lead Increase", value: "300% ↑" },
      { label: "Close Rate", value: "45%" },
    ],
  },
  // {
  //   id: "crm-2",
  //   title: "Inventory + Billing ERP",
  //   description:
  //     "Full ERP system with inventory, invoices, purchase orders and vendor management.",
  //   category: "erp",
  //   service: "crm-erp",
  //   videoId: "YOUTUBE_ID_402",
  // },
  // {
  //   id: "crm-3",
  //   title: "Analytics Dashboard System",
  //   description:
  //     "BI dashboards with insights, KPIs, financial reports & user activity tracking.",
  //   category: "analytics",
  //   service: "crm-erp",
  //   videoId: "YOUTUBE_ID_403",
  // },

  // ----------------------------------------
  // ⭐ 5️⃣ 3D RENDERING & VISUALIZATION
  // ----------------------------------------
  {
    id: "render-1",
    title: "Jewelry 3D Visualization",
    description:
      "Photorealistic 3D jewelry renders, 360° animations and marketing visuals.",
    category: "jewelry",
    service: "3d-rendering-and-visualisation",
    videoId: "YOUTUBE_ID_501",
    stats: [
      { label: "Renders Created", value: "500+" },
      { label: "Resolution", value: "8K" },
    ],
  },
  {
    id: "render-2",
    title: "Architectural Walkthrough",
    description:
      "High-fidelity 3D architectural visualization of luxury properties.",
    category: "architecture",
    service: "3d-rendering-and-visualisation",
    videoId: "YOUTUBE_ID_502",
  },
  {
    id: "render-3",
    title: "Product Rendering Suite",
    description:
      "3D visuals for consumer electronics, appliances and industrial products.",
    category: "product",
    service: "3d-rendering-and-visualisation",
    videoId: "YOUTUBE_ID_503",
  },

  // ----------------------------------------
  // ⭐ 6️⃣ MANUFACTURING SOLUTIONS
  // ----------------------------------------
  {
    id: "mfg-1",
    title: "Rapid Prototyping Workflow",
    description:
      "CAD-integrated manufacturing pipeline with 3D printing automation.",
    category: "prototyping",
    service: "manufacturing-solutions",
    videoId: "YOUTUBE_ID_601",
    stats: [
      { label: "Speed Increase", value: "70% ↑" },
      { label: "Cost Reduction", value: "40% ↓" },
    ],
  },

  {
    id: "mfg-2",
    title: "CNC Production System",
    description:
      "Precision manufacturing using CNC machines with automated job scheduling.",
    category: "production",
    service: "manufacturing-solutions",
    videoId: "YOUTUBE_ID_602",
  },
  {
    id: "mfg-3",
    title: "Quality Control Automation",
    description:
      "AI-powered inspection system for defect detection and quality scoring.",
    category: "quality",
    service: "manufacturing-solutions",
    videoId: "YOUTUBE_ID_603",
    stats: [
      { label: "Accuracy", value: "99.5%" },
      { label: "Inspection Time", value: "82% ↓" },
    ],
  },

];

// HELPERS
export const getProjectsByService = (service: string) =>
  projects.filter((p) => p.service === service);

export const getProjectsByCategory = (service: string, category: string) =>
  projects.filter((p) => p.service === service && p.category === category);

export const getCategories = (service: string): string[] => {
  const serviceProjects = getProjectsByService(service);
  return Array.from(new Set(serviceProjects.map((p) => p.category)));
};
