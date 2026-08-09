export interface Project {
  id: number;
  title: string;
  description: string;
  category: 'Residential' | 'Commercial' | 'Hospitality' | 'Architectural' | 'Interior Details';
  location: string;
  year: string;
  image: string;
  featured: boolean;
  fullDescription: string;
  client: string;
  duration: string;
  completionDate: string;
  services: string[];
  gallery: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Luxury Exterior & Architectural Elevations',
    description: 'Bespoke exterior elevation designs and modern facade concepts for residential & commercial structures.',
    category: 'Architectural',
    location: 'Lucknow & Pan-India',
    year: '2024',
    image: '/images/projects/elevations/elevations_1.webp',
    featured: true,
    fullDescription: 'Our architectural elevation design team specializes in creating striking 3D exterior concepts. We blend modern geometric forms, texture play (wood panels, stone claddings, glass facades), and landscape integration to make every building stand out with unmatched elegance.',
    client: 'Samriddhi Consultant Clients',
    duration: '3 months',
    completionDate: '2024',
    services: ['3D Architectural Elevation', 'Facade Design', 'Structural Planning', 'Material Specification'],
    gallery: [
      '/images/projects/elevations/elevations_2.webp',
      '/images/projects/elevations/elevations_3.webp',
      '/images/projects/elevations/elevations_4.webp',
      '/images/projects/elevations/elevations_5.webp',
      '/images/projects/elevations/elevations_6.webp',
      '/images/projects/elevations/elevations_7.webp',
      '/images/projects/elevations/elevations_8.webp',
      '/images/projects/elevations/elevations_9.webp',
      '/images/projects/elevations/elevations_10.webp',
      '/images/projects/elevations/elevations_11.webp',
      '/images/projects/elevations/elevations_12.webp'
    ]
  },
  {
    id: 2,
    title: 'Master Bedroom & Luxury Suites',
    description: 'Custom bedroom interiors featuring warm ambient lighting, upholstered accent walls, and bespoke furniture.',
    category: 'Residential',
    location: 'Lucknow',
    year: '2024',
    image: '/images/projects/bedroom/bedroom_1.webp',
    featured: true,
    fullDescription: 'A sanctuary designed for comfort and elegance. Our bedroom designs focus on ergonomic space planning, luxurious headboard wall treatments, mood lighting, concealed storage solutions, and serene color palettes tailored to individual lifestyles.',
    client: 'Private Residence',
    duration: '2 months',
    completionDate: '2024',
    services: ['Interior Architecture', 'Custom Wardrobes', 'Lighting Design', 'Material Selection'],
    gallery: [
      '/images/projects/bedroom/bedroom_2.webp',
      '/images/projects/bedroom/bedroom_3.webp',
      '/images/projects/bedroom/bedroom_4.webp',
      '/images/projects/bedroom/bedroom_5.webp'
    ]
  },
  {
    id: 3,
    title: 'Open-Concept Dining & Living Spaces',
    description: 'Harmonious open-plan living and dining areas crafted for modern family lifestyles and entertaining.',
    category: 'Residential',
    location: 'Lucknow',
    year: '2024',
    image: '/images/projects/dining_living/dining_living_1.webp',
    featured: true,
    fullDescription: 'Designed for fluid movement and visual continuity, our dining and living room projects seamlessly connect dining, lounging, and social spaces with custom accent walls, chic lighting fixtures, and premium flooring choices.',
    client: 'Private Residence',
    duration: '3 months',
    completionDate: '2024',
    services: ['Living Space Design', 'Custom Dining Layouts', 'Decorative Lighting', 'Furniture Curation'],
    gallery: [
      '/images/projects/dining_living/dining_living_2.webp',
      '/images/projects/dining_living/dining_living_3.webp',
      '/images/projects/dining_living/dining_living_4.webp',
      '/images/projects/dining_living/dining_living_5.webp'
    ]
  },
  {
    id: 4,
    title: 'Contemporary Drawing Room & Lounge',
    description: 'Sophisticated drawing area designs with statement lighting, marble wall accents, and custom seating.',
    category: 'Residential',
    location: 'Lucknow',
    year: '2023',
    image: '/images/projects/drawing_area/drawing_area_1.webp',
    featured: false,
    fullDescription: 'The drawing room is the centerpiece of hospitality. We elevate drawing room interiors with rich textures, marble paneling, recessed cove lighting, and tailored seating arrangements that make an unforgettable impression on guests.',
    client: 'Private Client',
    duration: '2.5 months',
    completionDate: '2023',
    services: ['Drawing Room Styling', 'Statement Lighting', 'Wall Paneling', '3D Rendering'],
    gallery: [
      '/images/projects/drawing_area/drawing_area_2.webp',
      '/images/projects/drawing_area/drawing_area_3.webp',
      '/images/projects/drawing_area/drawing_area_4.webp'
    ]
  },
  {
    id: 5,
    title: 'High-End Modular Kitchen Design',
    description: 'Ergonomic, modern modular kitchens with premium cabinetry, integrated appliances, and island bars.',
    category: 'Residential',
    location: 'Lucknow',
    year: '2024',
    image: '/images/projects/kitchen/kitchen_1.webp',
    featured: true,
    fullDescription: 'Combining culinary functionality with aesthetic brilliance. Our kitchen designs incorporate high-gloss acrylic and quartz surfaces, smart pull-out hardware, under-cabinet LED strip lights, and optimal work triangle layouts.',
    client: 'Residential Villa',
    duration: '2 months',
    completionDate: '2024',
    services: ['Modular Kitchen Design', 'Space Optimization', 'Appliance Integration', 'Quartz & Countertop Selection'],
    gallery: [
      '/images/projects/kitchen/kitchen_2.webp',
      '/images/projects/kitchen/kitchen_3.webp',
      '/images/projects/kitchen/kitchen_4.webp',
      '/images/projects/kitchen/kitchen_5.webp',
      '/images/projects/kitchen/kitchen_6.webp'
    ]
  },
  {
    id: 6,
    title: 'Fine Dining Restaurant & Lounge',
    description: 'Atmospheric dining experience with custom acoustic paneling, ambient pendant lights, and luxury seating.',
    category: 'Hospitality',
    location: 'Lucknow',
    year: '2024',
    image: '/images/projects/restaurant/restaurant_1.webp',
    featured: true,
    fullDescription: 'A complete commercial interior solution for restaurants and dining lounges. We craft unforgettable dining atmospheres using thematic ceiling wooden louvers, custom booth seating, warm golden illumination, and efficient service layouts.',
    client: 'Luxe Hospitality Group',
    duration: '4 months',
    completionDate: '2024',
    services: ['Commercial Interior Design', 'Restaurant Layout Planning', 'Acoustics & Lighting', 'Custom Furniture'],
    gallery: [
      '/images/projects/restaurant/restaurant_2.webp',
      '/images/projects/restaurant/restaurant_3.webp',
      '/images/projects/restaurant/restaurant_4.webp',
      '/images/projects/restaurant/restaurant_5.webp',
      '/images/projects/restaurant/restaurant_6.webp',
      '/images/projects/restaurant/restaurant_7.webp',
      '/images/projects/restaurant/restaurant_8.webp',
      '/images/projects/restaurant/restaurant_9.webp',
      '/images/projects/restaurant/restaurant_10.webp',
      '/images/projects/restaurant/restaurant_11.webp',
      '/images/projects/restaurant/restaurant_12.webp'
    ]
  },
  {
    id: 7,
    title: 'Grand Banquet & Celebration Hall',
    description: 'Opulent banquet hall designs with soaring ceilings, grand chandeliers, and dynamic stage lighting.',
    category: 'Hospitality',
    location: 'Lucknow',
    year: '2023',
    image: '/images/projects/banquet/banquet_1.webp',
    featured: false,
    fullDescription: 'Designed to host grand celebrations, weddings, and corporate galas. Features columnless wide-span hall designs, ornate wall paneling, high-impact chandeliers, acoustic ceiling treatments, and spacious guest circulation paths.',
    client: 'Royal Banquet Convention Center',
    duration: '6 months',
    completionDate: '2023',
    services: ['Banquet Hall Architecture', 'Acoustic Engineering', 'Lighting & Stage Design', 'Commercial Planning'],
    gallery: [
      '/images/projects/banquet/banquet_2.webp',
      '/images/projects/banquet/banquet_3.webp',
      '/images/projects/banquet/banquet_4.webp',
      '/images/projects/banquet/banquet_5.webp',
      '/images/projects/banquet/banquet_6.webp'
    ]
  },
  {
    id: 8,
    title: 'Modern Retail Store & Boutique Shop',
    description: 'High-converting retail shop interiors with strategic product displays, storefront glazing, and focal lighting.',
    category: 'Commercial',
    location: 'Lucknow',
    year: '2024',
    image: '/images/projects/shop/shop_1.webp',
    featured: false,
    fullDescription: 'Crafted to enhance customer engagement and elevate retail brand identity. Features modular display shelving, polished floor finishes, spotlights, branding walls, and smooth customer movement paths.',
    client: 'Commercial Retailer',
    duration: '2 months',
    completionDate: '2024',
    services: ['Retail Store Design', 'Storefront Architecture', 'Display Fixture Design', 'Commercial Lighting'],
    gallery: [
      '/images/projects/shop/shop_2.webp',
      '/images/projects/shop/shop_3.webp'
    ]
  },
  {
    id: 9,
    title: 'False Ceiling & Architectural Lighting',
    description: 'Creative gyproc and wooden ceiling concepts with concealed LED coves and magnetic track lights.',
    category: 'Interior Details',
    location: 'Lucknow',
    year: '2024',
    image: '/images/projects/ceiling/ceiling_1.webp',
    featured: false,
    fullDescription: 'Transforming plain ceilings into sculptural overhead masterpieces. Our false ceiling designs feature floating plasterboard layers, warm cove backlighting, dark metal accent channels, and chandelier drop points.',
    client: 'Multiple Residential & Commercial Projects',
    duration: '1 month',
    completionDate: '2024',
    services: ['False Ceiling Design', 'Lighting Layout', 'Gyproc & Wooden Louvers', 'Electrical Planning'],
    gallery: [
      '/images/projects/ceiling/ceiling_2.webp',
      '/images/projects/ceiling/ceiling_3.webp',
      '/images/projects/ceiling/ceiling_4.webp',
      '/images/projects/ceiling/ceiling_5.webp'
    ]
  },
  {
    id: 10,
    title: 'Bespoke TV Unit & Feature Media Wall',
    description: 'Custom entertainment walls with fluted louvers, marble backdrops, floating consoles, and hidden cabling.',
    category: 'Interior Details',
    location: 'Lucknow',
    year: '2024',
    image: '/images/projects/tv_unit/tv_unit_1.webp',
    featured: false,
    fullDescription: 'A focal point of contemporary living rooms. We design custom media units combining fluted paneling, backlit stone veneer, integrated display niches, and sleek floating drawer storage.',
    client: 'Private Homeowners',
    duration: '1 month',
    completionDate: '2024',
    services: ['Custom Joinery & Millwork', 'Media Wall Design', 'Concealed Wire Management', 'Fluted Wood Paneling'],
    gallery: [
      '/images/projects/tv_unit/tv_unit_2.webp',
      '/images/projects/tv_unit/tv_unit_3.webp',
      '/images/projects/tv_unit/tv_unit_4.webp',
      '/images/projects/tv_unit/tv_unit_5.webp',
      '/images/projects/tv_unit/tv_unit_6.webp',
      '/images/projects/tv_unit/tv_unit_7.webp'
    ]
  },
  {
    id: 11,
    title: 'Luxury Washroom & Bathroom Suites',
    description: 'Spa-inspired bathroom interiors featuring marble cladding, glass shower enclosures, and LED vanity mirrors.',
    category: 'Residential',
    location: 'Lucknow',
    year: '2024',
    image: '/images/projects/toilet/toilet_1.webp',
    featured: false,
    fullDescription: 'Refined sanitary spaces designed for relaxation. Incorporates large format vitrified tiles, frameless glass partitions, concealed plumbing fixtures, LED backlight mirrors, and niche storage.',
    client: 'Private Residence',
    duration: '1.5 months',
    completionDate: '2024',
    services: ['Bathroom Interior Design', 'Sanitary Layout', 'Plumbing & Drainage Design', 'Tile & Marble Curation'],
    gallery: [
      '/images/projects/toilet/toilet_2.webp',
      '/images/projects/toilet/toilet_3.webp',
      '/images/projects/toilet/toilet_4.webp',
      '/images/projects/toilet/toilet_5.webp'
    ]
  }
];
