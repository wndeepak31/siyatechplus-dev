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
  {
    id: "rfid-2",
    title: "RFID POS Billing System",
    description:
      "A demonstration of an RFID-enabled POS billing system showing how tagged items are instantly scanned, identified, and processed at checkout.",
    category: "retail",
    service: "rfid-solutions",
    videoId: "kAPVs12OkG4",
    stats: [
      { label: "Scan Speed", value: "Instant" },
      { label: "Items Processed", value: "Multiple at Once" }
    ],
    technologies: ["RFID Reader", "RFID Tags", "POS System", "Retail Checkout"]
  },
  {
    id: "rfid-3",
    title: "GPS Tracking Machine",
    description:
      "A compact RFID handheld device designed for sales teams to scan assets, verify stock, and sync activity data in real-time for admin monitoring.",
    category: "manufacturing", // or "retail" or "manufacturing" — choose below!
    service: "rfid-solutions",
    videoId: "lhZGqPI73gM",
    stats: [
      { label: "Device Size", value: "Pocket-Friendly" },
      { label: "Real-Time Sync", value: "Enabled" }
    ],
    technologies: ["Handheld RFID", "UHF Reading", "Mobile Sync", "IoT"]
  },
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
  {
    id: "rfid-5",
    title: "RFID Security Gate Demo",
    description:
      "RFID security gate demo showcasing real-time theft detection at store exits with instant alerts and asset movement visibility.",
    category: "retail",
    service: "rfid-solutions",
    videoId: "t3RYGOyJLP0",
    stats: [
      { label: "Theft Detection", value: "Instant" },
      { label: "Exit Monitoring", value: "100% Coverage" }
    ],
    technologies: [
      "RFID Security Gates",
      "UHF RFID Tags",
      "Real-Time Alerts",
      "Store Analytics Dashboard"
    ]
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
// ⭐ 5️⃣ 3D RENDERING & VISUALIZATION – JEWELRY
// ----------------------------------------

{
  id: "render-jewelry-1",
  title: "Jewelry 3D Rendering – Diamond Ring",
  description:
    "High-quality photorealistic 3D jewelry rendering showcasing realistic materials, gemstone brilliance, studio lighting, and premium detailing for marketing and product visualization.",
  category: "jewelry",
  service: "3d-rendering-and-visualisation",
  videoId: "0YYCDbodmzU",
  stats: [
    { label: "Render Quality", value: "Photorealistic" },
    { label: "Output", value: "4K / 8K" }
  ],
},

{
  id: "render-jewelry-2",
  title: "Jewelry 3D Rendering – Gold Band Ring",
  description:
    "Photorealistic 3D visualization of a gold band ring with accurate metal reflections, smooth surfaces, and luxury-grade lighting for digital showcases.",
  category: "jewelry",
  service: "3d-rendering-and-visualisation",
  videoId: "4SqE0Ig90To",
  stats: [
    { label: "Lighting", value: "Studio Grade" },
    { label: "Detailing", value: "Ultra-High" }
  ],
},

{
  id: "render-jewelry-3",
  title: "Jewelry 3D Rendering – Halo Engagement Ring",
  description:
    "Luxury halo engagement ring rendered in high detail with realistic diamond dispersion, reflections, and premium presentation visuals.",
  category: "jewelry",
  service: "3d-rendering-and-visualisation",
  videoId: "MBX2s_yPIKU",
  stats: [
    { label: "Gem Detail", value: "High Precision" },
    { label: "Finish", value: "Luxury" }
  ],
},

{
  id: "render-jewelry-4",
  title: "Jewelry 3D Rendering – Sapphire Ring",
  description:
    "High-end sapphire ring 3D rendering featuring gemstone clarity, realistic refraction, and elegant studio lighting for luxury branding.",
  category: "jewelry",
  service: "3d-rendering-and-visualisation",
  videoId: "0aY1rIer9bw",
  stats: [
    { label: "Gemstone", value: "Photorealistic" },
    { label: "Output", value: "4K+" }
  ],
},

{
  id: "render-jewelry-5",
  title: "Jewelry 3D Rendering – Emerald Ring",
  description:
    "Premium emerald ring 3D visualization with accurate color depth, reflections, and refined material detailing.",
  category: "jewelry",
  service: "3d-rendering-and-visualisation",
  videoId: "PZtbiS-28ro",
  stats: [
    { label: "Color Accuracy", value: "High" },
    { label: "Visual Depth", value: "Enhanced" }
  ],
},

{
  id: "render-jewelry-6",
  title: "Jewelry 3D Rendering – Luxury Bracelet",
  description:
    "Photorealistic 3D rendering of a luxury bracelet with precise metal finish, symmetry, and premium lighting setup.",
  category: "jewelry",
  service: "3d-rendering-and-visualisation",
  videoId: "C4G-0mtKFjQ",
  stats: [
    { label: "Surface Finish", value: "Premium" },
    { label: "Detail Level", value: "Ultra" }
  ],
},

{
  id: "render-jewelry-7",
  title: "Jewelry 3D Rendering – Eternity Band",
  description:
    "Elegant eternity band 3D rendering with continuous gemstone detailing and refined lighting for ecommerce and catalogs.",
  category: "jewelry",
  service: "3d-rendering-and-visualisation",
  videoId: "dzTrl8lVE7o",
  stats: [
    { label: "Consistency", value: "High Precision" },
    { label: "Render Style", value: "Luxury" }
  ],
},

{
  id: "render-jewelry-8",
  title: "Jewelry 3D Rendering – Wedding Ring Set",
  description:
    "Wedding ring set visualized in high-quality 3D with realistic metal textures and gemstone brilliance.",
  category: "jewelry",
  service: "3d-rendering-and-visualisation",
  videoId: "jHZ-G1baokg",
  stats: [
    { label: "Pair Detailing", value: "Matched" },
    { label: "Output", value: "High-Res" }
  ],
},

{
  id: "render-jewelry-9",
  title: "Jewelry 3D Rendering – Designer Ring",
  description:
    "Designer ring 3D rendering focusing on unique form, craftsmanship, and premium visual presentation.",
  category: "jewelry",
  service: "3d-rendering-and-visualisation",
  videoId: "MhFIdq_Cxyw",
  stats: [
    { label: "Design Accuracy", value: "High" },
    { label: "Visual Style", value: "Premium" }
  ],
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
