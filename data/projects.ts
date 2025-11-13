export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  service: string;
  image?: string;
  videoId?: string; // YouTube video ID
  stats?: {
    label: string;
    value: string;
  }[];
  technologies?: string[];
}

export const projects: Project[] = [
  // ECOMMERCE PROJECTS
  {
    id: 'ecom-1',
    title: 'Lumina Luxury Jewelry',
    description: 'Complete ecommerce platform with 3D product visualization and AR try-on. Increased sales by 250%.',
    category: 'jewelry',
    service: 'ecommerce-development',
    image: '/placeholder-jewelry.jpg',
    videoId: 'dQw4w9WgXcQ', // Replace with your actual YouTube ID
    stats: [
      { label: 'Sales', value: '250% ↑' },
      { label: 'Returns', value: '85% ↓' }
    ],
    technologies: ['Shopify', '3D Rendering', 'AR']
  },
  {
    id: 'ecom-2',
    title: 'Fashion Hub Online',
    description: 'Modern fashion store with AI sizing and multi-currency support. 180% conversion boost.',
    category: 'fashion',
    service: 'ecommerce-development',
    stats: [
      { label: 'Conversion', value: '180% ↑' },
      { label: 'Cart Value', value: '$125' }
    ]
  },
  {
    id: 'ecom-3',
    title: 'Tech Gadgets Pro',
    description: 'Electronics marketplace with real-time inventory and smart search. 50K monthly users.',
    category: 'electronics',
    service: 'ecommerce-development',
    stats: [
      { label: 'Users', value: '50K/mo' },
      { label: 'Uptime', value: '99.9%' }
    ]
  },

  // RFID PROJECTS
  {
    id: 'rfid-1',
    title: 'SmartWarehouse Pro',
    description: 'Real-time inventory tracking system reducing search time by 90% for 200K+ items.',
    category: 'warehouse',
    service: 'rfid-solutions',
    videoId: 'YOUR_VIDEO_ID',
    stats: [
      { label: 'Search Time', value: '90% ↓' },
      { label: 'Items', value: '200K+' }
    ]
  },
  {
    id: 'rfid-2',
    title: 'Retail Guardian',
    description: 'Anti-theft RFID system with analytics dashboard. 95% theft reduction.',
    category: 'retail',
    service: 'rfid-solutions',
    stats: [
      { label: 'Theft', value: '95% ↓' },
      { label: 'Stores', value: '45' }
    ]
  },

  // 3D RENDERING PROJECTS
  {
    id: 'render-1',
    title: 'Diamond Collection 3D',
    description: 'Photorealistic jewelry renders with 360° turntable animations for online catalogs.',
    category: 'jewelry',
    service: '3d-rendering-and-visualisation',
    videoId: 'YOUR_VIDEO_ID',
    stats: [
      { label: 'Renders', value: '500+' },
      { label: 'Quality', value: '8K' }
    ]
  },
  {
    id: 'render-2',
    title: 'Villa Architectural Viz',
    description: 'Stunning architectural visualization for luxury real estate marketing.',
    category: 'architecture',
    service: '3d-rendering-and-visualisation',
  },
  {
    id: 'render-3',
    title: 'Product Showcase 3D',
    description: 'High-end product renders for e-commerce and marketing materials.',
    category: 'product',
    service: '3d-rendering-and-visualisation',
  },

  // MANUFACTURING PROJECTS
  {
    id: 'mfg-1',
    title: 'Rapid Prototype System',
    description: '3D printed prototypes with CAD integration. 70% faster than traditional methods.',
    category: 'prototyping',
    service: 'manufacturing-solutions',
    stats: [
      { label: 'Speed', value: '70% ↑' },
      { label: 'Cost', value: '40% ↓' }
    ]
  },
  {
    id: 'mfg-2',
    title: 'Precision CNC Parts',
    description: 'High-precision CNC manufacturing for aerospace and medical industries.',
    category: 'production',
    service: 'manufacturing-solutions',
  },

  // MARKETING PROJECTS
  {
    id: 'mkt-1',
    title: 'Brand 360 Campaign',
    description: 'Multi-channel marketing strategy resulting in 400% ROI.',
    category: 'social',
    service: 'digital-marketing',
    stats: [
      { label: 'ROI', value: '400%' },
      { label: 'Reach', value: '2M+' }
    ]
  },
  {
    id: 'mkt-2',
    title: 'SEO Success Story',
    description: 'Organic traffic growth from 1K to 50K monthly visitors in 6 months.',
    category: 'seo',
    service: 'digital-marketing',
    stats: [
      { label: 'Traffic', value: '5000%' },
      { label: 'Keywords', value: '#1 Rank' }
    ]
  },

  // CRM PROJECTS
  {
    id: 'crm-1',
    title: 'Sales Automation Platform',
    description: 'Custom CRM with AI lead scoring and automated workflows.',
    category: 'sales',
    service: 'crm-systems',
    stats: [
      { label: 'Leads', value: '300% ↑' },
      { label: 'Close Rate', value: '45%' }
    ]
  },
  {
    id: 'crm-2',
    title: 'Customer Insights Dashboard',
    description: 'Advanced analytics platform for customer behavior tracking.',
    category: 'analytics',
    service: 'crm-systems',
  },
];

// Helper functions
export const getProjectsByService = (service: string) => {
  return projects.filter(p => p.service === service);
};

export const getProjectsByCategory = (service: string, category: string) => {
  return projects.filter(p => p.service === service && p.category === category);
};

export const getCategories = (service: string): string[] => {
  const serviceProjects = getProjectsByService(service);
  return [...new Set(serviceProjects.map(p => p.category))];
};
