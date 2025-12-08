import { ComponentType } from "react"; 
import {
  Code2,
  Smartphone,
  Boxes,
  Box,
  Cpu,
  Settings,
  Share2,
  LineChart,
  Radio,
  Shapes,
  Building2,
  Layers3,
  LayoutDashboard,
  Zap,
} from "lucide-react";

export interface ServiceConfig {
  id: string;
  slug: string;
  name: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  description: string;
  icon: ComponentType<any>; // main icon
  heroEmoji: ComponentType<any>; // background big icon
  h1: string;
  sections: {
    h2: string;
    h3?: string[];
  }[];
  categories: {
    id: string;
    label: string;
  }[];
}

export const services: ServiceConfig[] = [

  /* 1️⃣ WEB / APP DEVELOPMENT */
  {
    id: "web-app-development",
    slug: "web-app-development",
    name: "WEB / APP DEVELOPMENT",
    title: "Best Web & App Development Services | SiyaTechPlus",
    metaTitle: "Web & App Development Services | SiyaTechPlus",
    metaDescription:
      "SiyaTechPlus provides modern Web & App development services including websites, mobile apps, UI/UX, API integration, and scalable digital systems.",
    ogTitle: "Web & App Development Services",
    ogDescription:
      "Build your website or mobile app with modern, scalable, and performance-driven technology solutions.",
    description:
      "We build high-performance websites and mobile apps using Next.js, React, React Native and modern technologies.",

    icon: Code2,
    heroEmoji: Code2,
    h1: "Web / App Development Services",

    sections: [
      {
        h2: "Custom Website Development",
        h3: [
          "Next.js / React.js Development",
          "SEO-Optimized Website Architecture",
          "High-Performance UI/UX Engineering",
        ],
      },
      {
        h2: "Mobile App Development",
        h3: [
          "Android & iOS App Development",
          "Cross-Platform Apps (React Native)",
          "API Development & Integrations",
        ],
      },
      {
        h2: "System Integrations & Maintenance",
        h3: [
          "API & Third-Party Integrations",
          "Performance Optimization",
          "Ongoing Support & Feature Enhancements",
        ],
      },
    ],

    categories: [
      // { id: "corporate", label: "Corporate Websites" },
      // { id: "ecommerce", label: "Ecommerce Platforms" },
      // { id: "mobileapps", label: "Mobile Apps" },
      // { id: "saas", label: "SaaS Applications" },
    ],
  },

  /* 2️⃣ RFID SOLUTIONS */
  {
    id: "rfid-solutions",
    slug: "rfid-solutions",
    name: "RFID SOLUTIONS",
    title: "RFID Solutions & Smart Tracking Systems In India | SiyaTechPlus",
    metaTitle: "RFID Solutions & Smart Tracking Systems In India | SiyaTechPlus",
    metaDescription:
      "Enhance efficiency and traceability with our RFID technology for logistics, retail, and manufacturing.",
    ogTitle: "RFID Solutions & Smart Tracking Systems",
    ogDescription:
      "Enhance efficiency and traceability with our RFID technology for logistics, retail, and manufacturing.",
    description:
      "Enhance efficiency and traceability with our RFID technology for logistics, retail, and manufacturing.",

    icon: Radio,
    heroEmoji: Radio,
    h1: "RFID Solutions & Smart Tracking Systems",

    sections: [
      { h2: "Smart Inventory & Asset Tracking", h3: [] },
      { h2: "RFID for Retail & Manufacturing", h3: [] },
      {
        h2: "Custom RFID System Integration",
        h3: ["Real-Time Monitoring", "Data Analytics & Insights"],
      },
    ],

    categories: [
      // { id: "warehouse", label: "Warehouse" },
      // { id: "retail", label: "Retail" },
      // { id: "manufacturing", label: "Manufacturing" },
      // { id: "healthcare", label: "Healthcare" },
    ],
  },

  /* 3️⃣ AUTOMATIONS */
  {
    id: "automation",
    slug: "automation",
    name: "AUTOMATIONS",
    title: "Business Process Automation Services | SiyaTechPlus",
    metaTitle: "Automations & Workflow Automation | SiyaTechPlus",
    metaDescription:
      "Automate your business operations with intelligent automation solutions that reduce manual work, increase efficiency, and streamline workflows.",
    ogTitle: "Business Automation Solutions",
    ogDescription:
      "Automate repetitive tasks, optimize workflows, and enhance efficiency across your business operations.",
    description:
      "Streamline your business operations with intelligent automation solutions that reduce manual work, increase efficiency, and eliminate repetitive tasks.",

    icon: Zap,
    heroEmoji: Zap,
    h1: "Automation Services",

    sections: [
      {
        h2: "Business Workflow Automation",
        h3: [
          "Automate repetitive tasks",
          "Reduce manual errors",
          "Increase operational efficiency",
        ],
      },
      {
        h2: "Integration & System Automation",
        h3: [
          "API & Software Integrations",
          "Automated Data Sync",
          "Custom Automation Pipelines",
        ],
      },
      {
        h2: "AI-Driven Automations",
        h3: [
          "Intelligent Decision Automation",
          "Custom Bots & Agents",
          "Predictive Analytics Workflows",
        ],
      },
    ],

    categories: [
      // { id: "workflows", label: "Workflows" },
      // { id: "automation", label: "Automation" },
      // { id: "bots", label: "Bots" },
      // { id: "ai", label: "AI Automation" },
    ],
  },

  /* 4️⃣ CRM / ERP */
  {
    id: "crm-erp",
    slug: "crm-erp",
    name: "CRM / ERP",
    title: "CRM & ERP Development Services | SiyaTechPlus",
    metaTitle:
      "CRM / ERP Systems – Custom Business Management Solutions | SiyaTechPlus",
    metaDescription:
      "Custom CRM & ERP solutions for lead management, workflow automation, business intelligence, and data-driven decision-making.",
    ogTitle: "CRM & ERP Development Services",
    ogDescription:
      "Build custom CRM and ERP systems to streamline operations, manage data, and improve business efficiency.",
    description:
      "Custom CRM and ERP systems for sales management, workflow automation, dashboards, reporting, and end-to-end business operations.",

    icon: LayoutDashboard,
    heroEmoji: LayoutDashboard,
    h1: "CRM / ERP System Development",

    sections: [
      {
        h2: "Custom CRM Development",
        h3: [
          "Lead & Client Management",
          "Sales Pipeline Tracking",
          "Custom Dashboard Reporting",
        ],
      },
      {
        h2: "ERP System Solutions",
        h3: [
          "Inventory & Billing Systems",
          "Order & Workflow Automation",
          "Role-Based Access & Permissions",
        ],
      },
      {
        h2: "Integrations & Automation",
        h3: [
          "API Integrations",
          "Third-Party System Sync",
          "Analytics & Data Management",
        ],
      },
    ],

    categories: [
      // { id: "crm", label: "CRM Systems" },
      // { id: "erp", label: "ERP Solutions" },
      // { id: "automation", label: "Automation" },
      // { id: "analytics", label: "Analytics" },
    ],
  },

  /* 5️⃣ 3D RENDERING & VISUALIZATION */
  {
    id: "3d-rendering-and-visualisation",
    slug: "3d-rendering-and-visualisation",
    name: "3D RENDERING & VISUALIZATION",
    title: "3D Rendering & Visualization Services In India | SiyaTechPlus",
    metaTitle: "3D Rendering & Visualization Services In India | SiyaTechPlus",
    metaDescription:
      "3D rendering & visualization services in India. SiyaTechPlus offers best 3D rendering services.",
    ogTitle: "3D Rendering & Visualization Services In India",
    ogDescription:
      "Bring your ideas to life with realistic 3D renders for architecture, products, jewelry & industrial visualization.",
    description:
      "3D visualization services for jewelry, products, architecture and industrial designs.",

    icon: Shapes,
    heroEmoji: Shapes,
    h1: "3D Rendering & Visualization Services",

    sections: [
      { h2: "Architectural Visualization", h3: [] },
      { h2: "Product & Industrial Rendering", h3: [] },
      {
        h2: "Animation & Walkthroughs",
        h3: ["Realistic Lighting & Textures", "Virtual Reality Integration"],
      },
    ],

    categories: [
      // { id: "jewelry", label: "Jewelry" },
      // { id: "architecture", label: "Architecture" },
      // { id: "product", label: "Product" },
    ],
  },

  /* 6️⃣ MANUFACTURING SOLUTIONS */
  {
    id: "manufacturing-solutions",
    slug: "manufacturing-solutions",
    name: "MANUFACTURING SOLUTIONS",
    title: "Manufacturing Solutions & Automation Services | SiyaTechPlus",
    metaTitle: "Manufacturing Solutions & Automation Services | SiyaTechPlus",
    metaDescription:
      "Smart manufacturing solutions including prototyping, IoT, quality control & automation.",
    ogTitle: "Manufacturing Solutions & Automation Services",
    ogDescription:
      "Smart manufacturing solutions including prototyping, IoT, quality control & automation.",
    description:
      "Solutions for prototyping, production, IoT, automation and industry workflows.",

    icon: Cpu,
    heroEmoji: Cpu,
    h1: "Manufacturing Solutions & Automation Services",

    sections: [
      { h2: "Industrial Automation", h3: [] },
      { h2: "Smart Factory Integration", h3: [] },
      {
        h2: "IoT & Robotics",
        h3: ["Predictive Maintenance", "Custom Software Development"],
      },
    ],

    categories: [
      // { id: "prototyping", label: "Prototyping" },
      // { id: "production", label: "Production" },
      // { id: "quality", label: "Quality Control" },
      // { id: "automation", label: "Automation" },
    ],
  },

];

export const getServiceById = (id: string) => {
  return services.find((s) => s.id === id);
};
