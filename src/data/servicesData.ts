export interface Service {
  id: number;
  title: string;
  description: string;
  features: string[];
  icon: string;
  image: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: 'Architectural Design',
    description: 'Our architectural design services blend form and function to create spaces that are both beautiful and practical. From concept sketches to detailed 3D elevations and structural planning, we guide you through every step.',
    features: [
      'Conceptual Design & Development',
      '3D Exterior Elevations & Facades',
      'Space Planning & Programming',
      'Construction Documents & Drawings',
      'Building Information Modeling (BIM)',
      'Sustainable Architecture Solutions'
    ],
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 7v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h8l4 4Z"/><path d="M15 2v5h5"/></svg>',
    image: '/images/projects/elevations/elevations_1.webp'
  },
  {
    id: 2,
    title: 'Interior Design',
    description: 'Our interior design services create harmonious, functional spaces that reflect your personality and lifestyle. We carefully select materials, colors, lighting, and bespoke furniture to achieve balance and luxury.',
    features: [
      'Space Planning & Layout Optimization',
      'Material & Finish Selection',
      'Custom Furniture & Joinery Design',
      'Architectural Lighting Design',
      'Art & Wall Panel Accent Curation',
      'Cohesive Color Scheme Development'
    ],
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10a7 7 0 1 0 14 0 7 7 0 1 0-14 0"/><path d="M21 10a7 6 0 0 0-11.8-4.4"/><path d="M21 10a7 7 0 0 1-14 0"/><path d="M7.1 8a7.1 4.3 0 0 0 0 4"/><path d="M16.9 14a7.1 4.3 0 0 0 0-8"/></svg>',
    image: '/images/projects/drawing_area/drawing_area_1.webp'
  },
  {
    id: 3,
    title: 'Construction Management',
    description: 'Our construction management services ensure your project is built to the highest standards, on time and within budget. We oversee every aspect of the construction process from site supervision to final inspection.',
    features: [
      'Project Schedule Development',
      'Budget Management & Estimation',
      'Contractor Selection & Coordination',
      'Quality Control & Assurance',
      'Site Supervision & Structural Checks',
      'As-Built Construction Documentation'
    ],
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><line x1="20" x2="20" y1="8" y2="16"/><line x1="4" x2="4" y1="8" y2="16"/><line x1="12" x2="12" y1="2" y2="22"/></svg>',
    image: '/images/projects/banquet/banquet_1.webp'
  },
  {
    id: 4,
    title: '3D Visualization & Renders',
    description: 'Our photorealistic 3D visualization services bring your project to life before construction begins. Experience every detail of your future home, commercial lounge, or store in vivid detail.',
    features: [
      'Photorealistic 3D Renderings',
      'Ultra-HD Interior & Exterior Views',
      'Animated Walkthroughs',
      'Real-time Material Adjustments',
      'Lighting & Texture Simulations',
      'Interactive 3D Architectural Models'
    ],
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.29 7 12 12 20.71 7"/><line x1="12" y1="22" y2="12"/></svg>',
    image: '/images/projects/restaurant/restaurant_1.webp'
  },
  {
    id: 5,
    title: 'Renovation & Remodeling',
    description: 'Our renovation services breathe new life into existing spaces, from modular kitchen retrofits to complete residential and commercial remodels while maximizing spatial utility.',
    features: [
      'Existing Structure Assessment',
      'Modular Kitchen Upgrades',
      'Space Reconfiguration',
      'Electrical & Plumbing Systems Overhaul',
      'High-End Finish Restorations',
      'Adaptive Interior Reuse'
    ],
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M18.7 8h-5.4c-.6 0-1-.4-1-1 0-.5.4-1 1-1h5.4c.6 0 1 .4 1 1s-.5 1-1 1Z"/><path d="M12.3 16h-5.4c-.6 0-1-.4-1-1 0-.5.4-1 1-1h5.4c.6 0 1 .4 1 1s-.5 1-1 1Z"/><path d="m9 10 3-3"/><path d="m9 14 3 3"/></svg>',
    image: '/images/projects/kitchen/kitchen_1.webp'
  },
  {
    id: 6,
    title: 'Sustainable & Ceiling Design',
    description: 'Specialized false ceiling and green building solutions that integrate energy-efficient LED cove lighting, thermal insulation, and eco-conscious interior materials.',
    features: [
      'Decorative False Ceiling Concepts',
      'Thermal & Energy Efficiency Analysis',
      'Eco-Friendly Material Selection',
      'Concealed Ambient Lighting',
      'Ventilation & Acoustic Integration',
      'LEED & Green Building Standards'
    ],
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
    image: '/images/projects/ceiling/ceiling_1.webp'
  }
];
