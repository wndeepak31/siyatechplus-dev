export interface ServiceConfig {
  id: string;
  slug: string; // URL slug
  name: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  description: string;
  icon: string;
  heroEmoji: string;
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
    id: 'ecommerce-development',
    slug: 'ecommerce-development',
    name: 'eCommerce Development',
    title: 'eCommerce Development Services',
    metaTitle: 'eCommerce Development Services',
    metaDescription: 'Scalable and high-performance eCommerce solutions to boost your online sales and customer experience.',
    ogTitle: 'eCommerce Development Services',
    ogDescription: 'Build your online store with powerful eCommerce design, secure payments, and seamless UX.',
    description: 'Scalable and high-performance eCommerce solutions to boost your online sales and customer experience',
    icon: '🛍️',
    heroEmoji: '🛍️',
    h1: 'eCommerce Development Services',
    sections: [
      {
        h2: 'Custom eCommerce Solutions',
        h3: []
      },
      {
        h2: 'Platform Expertise (Shopify, Magento, WooCommerce)',
        h3: []
      },
      {
        h2: 'Integration & Maintenance',
        h3: ['API & Payment Gateway Integration', 'Ongoing Support']
      }
    ],
    categories: [
      { id: 'jewelry', label: 'Jewelry Stores' },
      { id: 'fashion', label: 'Fashion' },
      { id: 'electronics', label: 'Electronics' },
      { id: 'beauty', label: 'Beauty' },
    ]
  },
  {
    id: 'rfid-solutions',
    slug: 'rfid-solutions',
    name: 'RFID Solutions',
    title: 'RFID Solutions & Smart Tracking Systems',
    metaTitle: 'RFID Solutions & Smart Tracking Systems',
    metaDescription: 'Enhance efficiency and traceability with our RFID technology for logistics, retail, and manufacturing.',
    ogTitle: 'RFID Tracking Solutions',
    ogDescription: 'Transform your operations with real-time asset tracking using RFID solutions.',
    description: 'Enhance efficiency and traceability with our RFID technology for logistics, retail, and manufacturing',
    icon: '📡',
    heroEmoji: '📡',
    h1: 'RFID Solutions',
    sections: [
      {
        h2: 'Smart Inventory & Asset Tracking',
        h3: []
      },
      {
        h2: 'RFID for Retail & Manufacturing',
        h3: []
      },
      {
        h2: 'Custom RFID System Integration',
        h3: ['Real-Time Monitoring', 'Data Analytics & Insights']
      }
    ],
    categories: [
      { id: 'warehouse', label: 'Warehouse' },
      { id: 'retail', label: 'Retail' },
      { id: 'manufacturing', label: 'Manufacturing' },
      { id: 'healthcare', label: 'Healthcare' },
    ]
  },
  {
    id: '3d-rendering-and-visualisation',
    slug: '3d-rendering-and-visualisation',
    name: '3D Rendering & Visualization',
    title: '3D Rendering & Visualization Services',
    metaTitle: '3D Rendering & Visualization Services',
    metaDescription: 'Bring your ideas to life with realistic 3D visualization and rendering for architecture, products, and more.',
    ogTitle: '3D Rendering Services',
    ogDescription: 'Create stunning visuals for architecture, interiors, and products with advanced 3D rendering.',
    description: 'Bring your ideas to life with realistic 3D visualization and rendering for architecture, products, and more',
    icon: '🎨',
    heroEmoji: '🎨',
    h1: '3D Rendering & Visualization Services',
    sections: [
      {
        h2: 'Architectural Visualization',
        h3: []
      },
      {
        h2: 'Product & Industrial Rendering',
        h3: []
      },
      {
        h2: 'Animation & Walkthroughs',
        h3: ['Realistic Lighting & Textures', 'Virtual Reality Integration']
      }
    ],
    categories: [
      { id: 'jewelry', label: 'Jewelry' },
      { id: 'architecture', label: 'Architecture' },
      { id: 'product', label: 'Product' },
    ]
  },
  {
    id: 'manufacturing-solutions',
    slug: 'manufacturing-solutions',
    name: 'Manufacturing Solutions',
    title: 'Manufacturing Solutions & Automation Services',
    metaTitle: 'Manufacturing Solutions & Automation Services',
    metaDescription: 'Optimize production with digital manufacturing, IoT, and automation technologies tailored to your workflow.',
    ogTitle: 'Manufacturing & Automation Solutions',
    ogDescription: 'Streamline production with smart manufacturing systems designed for efficiency.',
    description: 'Optimize production with digital manufacturing, IoT, and automation technologies tailored to your workflow',
    icon: '⚙️',
    heroEmoji: '⚙️',
    h1: 'Manufacturing Solutions',
    sections: [
      {
        h2: 'Industrial Automation',
        h3: []
      },
      {
        h2: 'Smart Factory Integration',
        h3: []
      },
      {
        h2: 'IoT & Robotics',
        h3: ['Predictive Maintenance', 'Custom Software Development']
      }
    ],
    categories: [
      { id: 'prototyping', label: 'Prototyping' },
      { id: 'production', label: 'Production' },
      { id: 'quality', label: 'Quality Control' },
      { id: 'automation', label: 'Automation' },
    ]
  },
  {
    id: 'digital-marketing',
    slug: 'digital-marketing',
    name: 'Digital Marketing',
    title: 'Digital Marketing Services',
    metaTitle: 'Digital Marketing Services',
    metaDescription: 'Boost your brand visibility with SEO, social media, PPC, and content marketing strategies that deliver results.',
    ogTitle: 'Digital Marketing Experts',
    ogDescription: 'Drive traffic and conversions with our tailored digital marketing campaigns.',
    description: 'Boost your brand visibility with SEO, social media, PPC, and content marketing strategies that deliver results',
    icon: '🚀',
    heroEmoji: '🚀',
    h1: 'Digital Marketing Services',
    sections: [
      {
        h2: 'SEO & Content Marketing',
        h3: []
      },
      {
        h2: 'Social Media Management',
        h3: []
      },
      {
        h2: 'PPC & Advertising',
        h3: ['Analytics & Reporting', 'Conversion Optimization']
      }
    ],
    categories: [
      { id: 'social', label: 'Social Media' },
      { id: 'seo', label: 'SEO' },
      { id: 'ppc', label: 'PPC' },
      { id: 'content', label: 'Content' },
    ]
  },
  {
    id: 'crm-systems',
    slug: 'crm-systems',
    name: 'CRM Systems',
    title: 'CRM System Development & Integration',
    metaTitle: 'CRM System Development & Integration',
    metaDescription: 'Manage customer relationships efficiently with our CRM solutions for sales, service, and automation.',
    ogTitle: 'CRM Development Solutions',
    ogDescription: 'Empower your business with custom CRM systems that enhance productivity and customer satisfaction.',
    description: 'Manage customer relationships efficiently with our CRM solutions for sales, service, and automation',
    icon: '💼',
    heroEmoji: '💼',
    h1: 'CRM Systems',
    sections: [
      {
        h2: 'Custom CRM Development',
        h3: []
      },
      {
        h2: 'CRM Integration Services',
        h3: []
      },
      {
        h2: 'Automation & Data Management',
        h3: ['Sales & Support Tools', 'Analytics & Dashboard Insights']
      }
    ],
    categories: [
      { id: 'sales', label: 'Sales CRM' },
      { id: 'analytics', label: 'Analytics' },
      { id: 'automation', label: 'Automation' },
      { id: 'integration', label: 'Integration' },
    ]
  },
];

export const getServiceById = (id: string) => {
  return services.find(s => s.id === id);
};
