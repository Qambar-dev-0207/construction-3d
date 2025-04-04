
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import { Button } from '@/components/ui/button';
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from '@/components/ui/breadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, Clock, Building, ArrowLeft, Share2 } from 'lucide-react';

// Import projects data from Projects component
// In a real application, this would likely be fetched from an API
const projects = [
  {
    id: 1,
    title: 'Luxury Villa Renovation',
    description: 'A complete renovation of a 5,000 sq ft luxury villa, blending modern aesthetics with classic architecture.',
    category: 'Residential',
    location: 'Beverly Hills, CA',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3',
    featured: true,
    fullDescription: 'This luxury villa renovation project involved a complete transformation of a 5,000 square foot property in the heart of Beverly Hills. Our team worked closely with the homeowners to preserve the classic architectural elements while introducing modern aesthetics and functionality throughout the space. The renovation included a complete kitchen remodel with custom cabinetry and high-end appliances, renovation of all five bathrooms, hardwood flooring throughout, and a redesigned outdoor living space with a pool and landscaped garden. Energy efficiency upgrades included new windows, improved insulation, and a smart home system for lighting, climate, and security control.',
    client: 'Private Homeowner',
    duration: '8 months',
    completionDate: 'September 2023',
    services: ['Architectural Design', 'Interior Design', 'Construction Management', 'Landscaping'],
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2053&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1600566753851-f6096c4d2648?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3'
    ]
  },
  {
    id: 2,
    title: 'Modern Office Complex',
    description: 'A sustainable office complex designed for collaboration and productivity, featuring open spaces and natural light.',
    category: 'Commercial',
    location: 'Seattle, WA',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3',
    featured: true,
    fullDescription: 'This modern office complex was designed with sustainability and employee well-being as core principles. The 50,000 square foot space accommodates up to 300 employees across four floors. Key features include open collaborative spaces, private meeting pods, a roof garden, and floor-to-ceiling windows that maximize natural light. The building achieved LEED Platinum certification through its use of solar panels, rainwater harvesting, energy-efficient HVAC systems, and sustainable building materials. The interior design promotes movement and interaction between departments while providing quiet zones for focused work.',
    client: 'TechInnovate Inc.',
    duration: '14 months',
    completionDate: 'June 2022',
    services: ['Architectural Design', 'Interior Space Planning', 'Sustainability Consulting', 'Construction Management'],
    gallery: [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2069&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3'
    ]
  },
  {
    id: 3,
    title: 'Minimalist Apartment Design',
    description: 'A sleek, minimalist apartment renovation focused on maximizing space and functionality.',
    category: 'Residential',
    location: 'New York, NY',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3',
    featured: true,
    fullDescription: 'This 850 square foot apartment in Manhattan was completely reimagined to maximize functionality and create a sense of spaciousness through minimalist design principles. The renovation involved removing non-structural walls to create an open concept living area, custom built-in furniture to maximize storage without visual clutter, and a carefully curated neutral color palette with subtle texture variations. The kitchen features integrated appliances, handleless cabinetry, and a concealed workspace. The bathroom includes a walk-in shower with hidden storage solutions and wall-mounted fixtures. Smart home technology controls lighting, temperature, and audio systems discreetly throughout the space.',
    client: 'Young Professional',
    duration: '4 months',
    completionDate: 'March 2023',
    services: ['Interior Design', 'Space Planning', 'Custom Furniture Design', 'Lighting Design'],
    gallery: [
      'https://images.unsplash.com/photo-1598928636135-d146006ff4be?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1615529151169-7b1ff50dc7f2?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3'
    ]
  },
  {
    id: 4,
    title: 'Historic Building Restoration',
    description: 'Careful restoration of a 19th century building, preserving historical elements while adding modern functionality.',
    category: 'Historic',
    location: 'Boston, MA',
    year: '2021',
    image: 'https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?auto=format&fit=crop&q=80&w=1471&ixlib=rb-4.0.3',
    featured: false,
    fullDescription: 'This historic restoration project involved the careful rehabilitation of a 19th century brick commercial building in Boston's historic district. Our team worked closely with local historical preservation authorities to maintain the integrity of the original façade, windows, and interior architectural details while upgrading the structure to meet modern building codes and functional requirements. The restoration included meticulous repair of original hardwood floors, decorative plasterwork, and a grand staircase. Modern updates included new electrical, plumbing, and HVAC systems concealed within the historic framework, elevator installation, and accessibility improvements. The ground floor now houses retail space while the upper floors were converted to office use.',
    client: 'Historic Boston Development Group',
    duration: '18 months',
    completionDate: 'November 2021',
    services: ['Historic Preservation', 'Structural Engineering', 'Building Systems Integration', 'Construction Management'],
    gallery: [
      'https://images.unsplash.com/photo-1609617455101-215c7b16e22c?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1486304873000-235643847519?auto=format&fit=crop&q=80&w=2144&ixlib=rb-4.0.3'
    ]
  },
  {
    id: 5,
    title: 'Boutique Hotel Renovation',
    description: 'A complete redesign of a boutique hotel, creating a unique and luxurious guest experience.',
    category: 'Hospitality',
    location: 'Miami, FL',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3',
    featured: false,
    fullDescription: 'This boutique hotel renovation transformed a dated 45-room property into a sophisticated destination that celebrates its Miami location. The comprehensive redesign touched every aspect of the guest experience, from the striking lobby with its custom light installation to the completely reimagined guest rooms and rooftop pool area. Each floor features a distinct color palette and design theme, with custom artwork from local artists. The hotel restaurant was repositioned as a standalone destination with indoor/outdoor seating and a chef-driven menu. Technical upgrades included a new mobile check-in system, smart room controls, enhanced soundproofing, and energy-efficient climate systems designed to handle Miami's unique climate demands.',
    client: 'Coastal Hospitality Group',
    duration: '10 months',
    completionDate: 'April 2022',
    services: ['Interior Design', 'FF&E Specification', 'Project Management', 'Brand Development'],
    gallery: [
      'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1621293954908-907159247fc8?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3'
    ]
  },
  {
    id: 6,
    title: 'Corporate Headquarters',
    description: 'A flagship corporate headquarters designed to embody brand values and foster innovation.',
    category: 'Commercial',
    location: 'Chicago, IL',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1469&ixlib=rb-4.0.3',
    featured: false,
    fullDescription: 'This 120,000 square foot headquarters serves as the flagship location for a Fortune 500 financial services company. The design concept reflects the company's brand values of transparency, innovation, and collaboration while providing a variety of workspaces to accommodate different working styles and functions. The central atrium creates visual connections between floors and departments, with a monumental staircase encouraging movement throughout the building. The workspace design incorporates neighborhoods of open workstations, enclosed focus rooms, and collaboration zones with flexible furniture systems. Additional amenities include a full-service cafeteria, fitness center, wellness rooms, and a client-facing conference center with state-of-the-art presentation technology.',
    client: 'Financial Innovations Corp',
    duration: '16 months',
    completionDate: 'July 2022',
    services: ['Architecture', 'Interior Design', 'Workplace Strategy', 'Change Management'],
    gallery: [
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=2032&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1462826303086-329426d1aef5?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3'
    ]
  },
  {
    id: 7,
    title: 'Urban Loft Conversion',
    description: 'Conversion of an industrial warehouse into luxury residential lofts with open floor plans.',
    category: 'Residential',
    location: 'Portland, OR',
    year: '2021',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3',
    featured: false,
    fullDescription: 'This adaptive reuse project converted a 1920s industrial warehouse into 18 luxury residential lofts ranging from 1,200 to 2,500 square feet. The design preserved and highlighted the building's industrial character, including original brick walls, timber columns and beams, and oversized factory windows. Each unit features an open floor plan with flexible living spaces, high ceilings, and exposed mechanical systems. Modern additions include custom steel-framed glass partitions, chef's kitchens with concrete countertops, and spa-like bathrooms. The building now includes a shared roof terrace, fitness room, bicycle storage, and an automated parking system. The project achieved LEED Gold certification through energy-efficient systems, water conservation, and use of reclaimed materials throughout.',
    client: 'Urban Development Partners',
    duration: '12 months',
    completionDate: 'May 2021',
    services: ['Adaptive Reuse', 'Interior Architecture', 'Construction Documentation', 'Sustainable Design'],
    gallery: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&q=80&w=2065&ixlib=rb-4.0.3'
    ]
  },
  {
    id: 8,
    title: 'Waterfront Restaurant',
    description: 'A contemporary restaurant design with panoramic water views and indoor/outdoor dining spaces.',
    category: 'Hospitality',
    location: 'San Diego, CA',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3',
    featured: false,
    fullDescription: 'This 6,000 square foot restaurant takes full advantage of its waterfront location with a design that maximizes views and creates a seamless transition between indoor and outdoor dining spaces. The layout includes a main dining room with retractable glass walls, a covered outdoor deck, and a rooftop bar area. The interior design draws inspiration from coastal elements with a refined, contemporary approach that avoids typical nautical clichés. Custom lighting installations create different moods from day to night, while acoustical treatments ensure comfortable sound levels even at peak capacity. The kitchen design was developed in close collaboration with the chef to optimize workflow and showcase culinary preparation as part of the dining experience through a glass-enclosed display kitchen.',
    client: 'Coastline Restaurant Group',
    duration: '7 months',
    completionDate: 'January 2023',
    services: ['Architecture', 'Interior Design', 'Kitchen Design', 'Lighting Design'],
    gallery: [
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1581117189940-9b5f21a3033d?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3'
    ]
  },
  {
    id: 9,
    title: 'Eco-Friendly Family Home',
    description: 'A sustainable family residence utilizing passive design principles and renewable energy systems.',
    category: 'Residential',
    location: 'Austin, TX',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3',
    featured: false,
    fullDescription: 'This 3,200 square foot family home demonstrates how sustainable design can be both beautiful and functional. The design utilizes passive solar principles with strategic orientation, window placement, and roof overhangs to minimize energy use throughout the year. Other sustainable features include a 12kW solar array, geothermal heating and cooling, rainwater collection, and a greywater recycling system. Interior spaces focus on healthy living with non-toxic building materials, exceptional indoor air quality, and abundant natural light. The open floor plan accommodates family gathering while providing defined zones for different activities. Indoor-outdoor connections are emphasized through multiple access points to the landscaped yard, which features native plantings, food gardens, and play areas designed to minimize water usage.',
    client: 'Private Homeowners',
    duration: '11 months',
    completionDate: 'July 2023',
    services: ['Architecture', 'Sustainable Design Consulting', 'Landscape Design', 'Interior Design'],
    gallery: [
      'https://images.unsplash.com/photo-1600047509358-9dc75507daeb?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2074&ixlib=rb-4.0.3'
    ]
  }
];

const ProjectDetail = () => {
  const { id } = useParams();
  const projectId = parseInt(id as string);
  
  // Find the project by ID
  const project = projects.find(p => p.id === projectId);
  
  // If project not found, show error message
  if (!project) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="container mx-auto px-6 py-20">
          <h1 className="heading-xl mb-6">Project Not Found</h1>
          <p className="mb-8">Sorry, the project you're looking for doesn't exist.</p>
          <Button variant="default" asChild>
            <Link to="/projects"><ArrowLeft className="mr-2" /> Back to Projects</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section with Full Width Image */}
        <div className="relative h-[50vh] overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="container mx-auto px-6 pb-12">
              <h1 className="text-white heading-xl mb-4">{project.title}</h1>
              <div className="flex flex-wrap gap-4 text-white">
                <span className="flex items-center gap-1">
                  <Building size={18} />
                  {project.category}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={18} />
                  {project.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={18} />
                  {project.year}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Breadcrumb Navigation */}
        <div className="bg-secondary/30">
          <div className="container mx-auto px-6 py-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/projects">Projects</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{project.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
        
        {/* Project Content */}
        <section className="section-container py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="heading-lg mb-6">Overview</h2>
              <p className="text-lg mb-8">{project.fullDescription}</p>
              
              {/* Project Gallery */}
              <h3 className="heading-md mt-12 mb-6">Project Gallery</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {project.gallery.map((image, index) => (
                  <div key={index} className="overflow-hidden rounded-lg shadow-subtle">
                    <img 
                      src={image} 
                      alt={`${project.title} - Gallery image ${index + 1}`} 
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
              
              {/* Services Provided */}
              <h3 className="heading-md mt-12 mb-6">Services Provided</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                {project.services.map((service, index) => (
                  <Card key={index} className="bg-secondary/20">
                    <CardContent className="pt-6">
                      {service}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Sidebar with Project Details */}
            <div className="lg:col-span-1">
              <Card className="bg-secondary/10 mb-8">
                <CardContent className="pt-6">
                  <h3 className="font-medium text-xl mb-6">Project Details</h3>
                  
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <Calendar className="text-primary h-5 w-5 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Completion Date</h4>
                        <p className="text-muted-foreground">{project.completionDate}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <Clock className="text-primary h-5 w-5 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Project Duration</h4>
                        <p className="text-muted-foreground">{project.duration}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <Building className="text-primary h-5 w-5 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Client</h4>
                        <p className="text-muted-foreground">{project.client}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <MapPin className="text-primary h-5 w-5 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Location</h4>
                        <p className="text-muted-foreground">{project.location}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Actions */}
              <div className="space-y-4">
                <Button variant="default" className="w-full" asChild>
                  <Link to="/contact">Contact Us About This Project</Link>
                </Button>
                <Button variant="outline" className="w-full">
                  <Share2 className="mr-2" /> Share Project
                </Button>
                <Button variant="secondary" className="w-full" asChild>
                  <Link to="/projects"><ArrowLeft className="mr-2" /> Back to Projects</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
