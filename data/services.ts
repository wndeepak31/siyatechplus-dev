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
  icon: any; // Lucide icon component
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
  {
    id: 'web-app-development',
    slug: 'web-app-development',
    name: 'WEB / APP DEVELOPMENT',
    title: 'Best Web & App Development Services | SiyaTechPlus',
    metaTitle: 'Web & App Development Services | SiyaTechPlus',
    metaDescription:
      'SiyaTechPlus provides modern Web & App development services including websites, mobile apps, UI/UX, API integration, and scalable digital systems.',
    ogTitle: 'Web & App Development Services',
    ogDescription:
      'Build your website or mobile app with modern, scalable, and performance-driven technology solutions.',
    description:
      'We build high-performance websites and mobile apps with modern technologies including Next.js, React, and React Native — optimized for speed, scalability, and user experience.',

    icon: Code2,
    h1: 'Web / App Development Services',

    sections: [
      {
        h2: 'Custom Website Development',
        h3: [
          'Next.js / React.js Development',
          'SEO-Optimized Website Architecture',
          'High-Performance UI/UX Engineering'
        ]
      },
      {
        h2: 'Mobile App Development',
        h3: [
          'Android & iOS App Development',
          'Cross-Platform Apps (React Native)',
          'API Development & Integrations'
        ]
      },
      {
        h2: 'System Integrations & Maintenance',
        h3: [
          'API & Third-Party Integrations',
          'Performance Optimization',
          'Ongoing Support & Feature Enhancements'
        ]
      }
    ],

    categories: [
      { id: 'corporate', label: 'Corporate Websites' },
      { id: 'ecommerce', label: 'Ecommerce Platforms' },
      { id: 'mobileapps', label: 'Mobile Apps' },
      { id: 'saas', label: 'SaaS Applications' }
    ]
  },

  {
    id: 'rfid-solutions',
    slug: 'rfid-solutions',
    name: 'RFID Solutions',
    title: 'RFID Solutions & Smart Tracking Systems In India | SiyaTechPlus',
    metaTitle: 'RFID Solutions & Smart Tracking Systems In India | SiyaTechPlus',
    metaDescription:
      'Enhance efficiency and traceability with our RFID technology for logistics, retail, and manufacturing.',
    ogTitle: 'RFID Solutions & Smart Tracking Systems',
    ogDescription:
      'Enhance efficiency and traceability with our RFID technology for logistics, retail, and manufacturing.',
    description:
      'Enhance efficiency and traceability with our RFID technology for logistics, retail, and manufacturing.',

    icon: Radio,
    h1: 'RFID Solutions & Smart Tracking Systems',

    sections: [
      { h2: 'Smart Inventory & Asset Tracking', h3: [] },
      { h2: 'RFID for Retail & Manufacturing', h3: [] },
      {
        h2: 'Custom RFID System Integration',
        h3: ['Real-Time Monitoring', 'Data Analytics & Insights']
      }
    ],

    categories: [
      { id: 'warehouse', label: 'Warehouse' },
      { id: 'retail', label: 'Retail' },
      { id: 'manufacturing', label: 'Manufacturing' },
      { id: 'healthcare', label: 'Healthcare' }
    ]
  },

  {
    id: '3d-rendering-and-visualisation',
    slug: '3d-rendering-and-visualisation',
    name: '3D Rendering & Visualization',
    title: '3D Rendering & Visualization Services In India | SiyaTechPlus',
    metaTitle: '3D Rendering & Visualization Services In India | SiyaTechPlus',
    metaDescription:
      '3D rendering & visualization services in India. SiyaTechPlus offers best 3D rendering services.',
    ogTitle: '3D Rendering & Visualization Services In India',
    ogDescription:
      'Bring your ideas to life with realistic 3D renders for architecture, products, jewelry & industrial visualization.',
    description:
      '3D rendering & visualization services in India. SiyaTechPlus offers best 3D rendering services.',

    icon: Shapes,
    h1: '3D Rendering & Visualization Services',

    sections: [
      { h2: 'Architectural Visualization', h3: [] },
      { h2: 'Product & Industrial Rendering', h3: [] },
      {
        h2: 'Animation & Walkthroughs',
        h3: ['Realistic Lighting & Textures', 'Virtual Reality Integration']
      }
    ],

    categories: [
      { id: 'jewelry', label: 'Jewelry' },
      { id: 'architecture', label: 'Architecture' },
      { id: 'product', label: 'Product' }
    ]
  },

  {
    id: 'manufacturing-solutions',
    slug: 'manufacturing-solutions',
    name: 'Manufacturing Solutions',
    title: 'Manufacturing Solutions & Automation Services | SiyaTechPlus',
    metaTitle: 'Manufacturing Solutions & Automation Services | SiyaTechPlus',
    metaDescription:
      'Smart manufacturing solutions including prototyping, IoT, quality control & automation.',
    ogTitle: 'Manufacturing Solutions & Automation Services',
    ogDescription:
      'Smart manufacturing solutions including prototyping, IoT, quality control & automation.',
    description:
      'SiyaTechPlus offers manufacturing solutions from prototyping, production, quality control, automation, IoT Products in India.',

    icon: Cpu,
    h1: 'Manufacturing Solutions & Automation Services',

    sections: [
      { h2: 'Industrial Automation', h3: [] },
      { h2: 'Smart Factory Integration', h3: [] },
      {
        h2: 'IoT & Robotics',
        h3: ['Predictive Maintenance', 'Custom Software Development']
      }
    ],

    categories: [
      { id: 'prototyping', label: 'Prototyping' },
      { id: 'production', label: 'Production' },
      { id: 'quality', label: 'Quality Control' },
      { id: 'automation', label: 'Automation' }
    ]
  },

  {
    id: 'digital-marketing',
    slug: 'digital-marketing',
    name: 'Digital Marketing',
    title:
      'Digital Marketing Services In India - SEO, PPC, Social Media | SiyaTechPlus',
    metaTitle:
      'Digital Marketing Services In India - SEO, PPC, Social Media | SiyaTechPlus',
    metaDescription:
      'SiyaTechPlus has 15+ years of experience in SEO, PPC, Social Media & Digital Marketing.',
    ogTitle: 'Digital Marketing Services | SEO, PPC, Social Media',
    ogDescription:
      'Boost your brand with SEO, PPC, social media marketing and data-driven strategies.',
    description:
      'SiyaTechPlus has experience of 15+ yrs in digital marketing services. Check our services ranging from SEO, PPC, Social Media, PR, & more.',

    icon: LineChart,
    h1: 'Digital Marketing Services',

    sections: [
      { h2: 'SEO & Content Marketing', h3: [] },
      { h2: 'Social Media Management', h3: [] },
      {
        h2: 'PPC & Advertising',
        h3: ['Analytics & Reporting', 'Conversion Optimization']
      }
    ],

    categories: [
      { id: 'social', label: 'Social Media' },
      { id: 'seo', label: 'SEO' },
      { id: 'ppc', label: 'PPC' },
      { id: 'content', label: 'Content' }
    ]
  },

  {
    id: 'crm-systems',
    slug: 'crm-systems',
    name: 'CRM Systems',
    title:
      'Customer Relationship Management (CRM) System Services | SiyaTechPlus',
    metaTitle:
      'Customer Relationship Management (CRM) System Services | SiyaTechPlus',
    metaDescription:
      'CRM systems services in India. SiyaTechPlus provides best CRM systems for jewelry CRM and other industries.',
    ogTitle: 'CRM System Development & Integration',
    ogDescription:
      'Empower your business with custom CRM systems that enhance productivity and customer satisfaction.',
    description:
      'CRM systems services in India. SiyaTechPlus provides best CRM systems for jewelry CRM and other industries.',

    icon: LayoutDashboard,
    h1: 'CRM System Services',

    sections: [
      { h2: 'Custom CRM Development', h3: [] },
      { h2: 'CRM Integration Services', h3: [] },
      {
        h2: 'Automation & Data Management',
        h3: ['Sales & Support Tools', 'Analytics & Dashboard Insights']
      }
    ],

    categories: [
      { id: 'sales', label: 'Sales CRM' },
      { id: 'analytics', label: 'Analytics' },
      { id: 'automation', label: 'Automation' },
      { id: 'integration', label: 'Integration' }
    ]
  }
];

export const getServiceById = (id: string) => {
  return services.find(s => s.id === id);
};
