
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import { cn } from '@/lib/utils';

// Project data
const projects = [
  {
    id: 1,
    title: 'Luxury Villa Renovation',
    description: 'A complete renovation of a 5,000 sq ft luxury villa, blending modern aesthetics with classic architecture.',
    category: 'Residential',
    location: 'Beverly Hills, CA',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3',
    featured: true
  },
  {
    id: 2,
    title: 'Modern Office Complex',
    description: 'A sustainable office complex designed for collaboration and productivity, featuring open spaces and natural light.',
    category: 'Commercial',
    location: 'Seattle, WA',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3',
    featured: true
  },
  {
    id: 3,
    title: 'Minimalist Apartment Design',
    description: 'A sleek, minimalist apartment renovation focused on maximizing space and functionality.',
    category: 'Residential',
    location: 'New York, NY',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3',
    featured: true
  },
  {
    id: 4,
    title: 'Historic Building Restoration',
    description: 'Careful restoration of a 19th century building, preserving historical elements while adding modern functionality.',
    category: 'Historic',
    location: 'Boston, MA',
    year: '2021',
    image: 'https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?auto=format&fit=crop&q=80&w=1471&ixlib=rb-4.0.3',
    featured: false
  },
  {
    id: 5,
    title: 'Boutique Hotel Renovation',
    description: 'A complete redesign of a boutique hotel, creating a unique and luxurious guest experience.',
    category: 'Hospitality',
    location: 'Miami, FL',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3',
    featured: false
  },
  {
    id: 6,
    title: 'Corporate Headquarters',
    description: 'A flagship corporate headquarters designed to embody brand values and foster innovation.',
    category: 'Commercial',
    location: 'Chicago, IL',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1469&ixlib=rb-4.0.3',
    featured: false
  },
  {
    id: 7,
    title: 'Urban Loft Conversion',
    description: 'Conversion of an industrial warehouse into luxury residential lofts with open floor plans.',
    category: 'Residential',
    location: 'Portland, OR',
    year: '2021',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3',
    featured: false
  },
  {
    id: 8,
    title: 'Waterfront Restaurant',
    description: 'A contemporary restaurant design with panoramic water views and indoor/outdoor dining spaces.',
    category: 'Hospitality',
    location: 'San Diego, CA',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3',
    featured: false
  },
  {
    id: 9,
    title: 'Eco-Friendly Family Home',
    description: 'A sustainable family residence utilizing passive design principles and renewable energy systems.',
    category: 'Residential',
    location: 'Austin, TX',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3',
    featured: false
  }
];

// Project card component
const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  return (
    <div className="group rounded-lg overflow-hidden shadow-subtle hover:shadow-elevation transition-all duration-300">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <span className="text-xs font-medium px-2 py-1 rounded bg-secondary/80 text-secondary-foreground">
              {project.category}
            </span>
            <span className="ml-2 text-xs text-muted-foreground">
              {project.year}
            </span>
          </div>
        </div>
        <h3 className="text-xl font-medium mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">{project.location}</span>
          <Link to={`/projects/${project.id}`} className="text-sm font-medium text-primary hover:underline">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

// Filter button component
const FilterButton = ({ category, active, onClick }: { category: string; active: boolean; onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-4 py-2 rounded-md text-sm font-medium transition-all duration-200",
        active 
          ? "bg-primary text-primary-foreground shadow-sm" 
          : "bg-secondary/50 text-secondary-foreground hover:bg-secondary"
      )}
    >
      {category}
    </button>
  );
};

// Projects page component
const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Residential', 'Commercial', 'Hospitality', 'Historic'];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-secondary">
          <div className="container mx-auto px-6 py-20 md:py-32">
            <div className="max-w-3xl">
              <h1 className="heading-xl mb-6 animate-fade-in">Our Projects</h1>
              <p className="text-lg text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '100ms' }}>
                Explore our portfolio of completed and ongoing projects, showcasing our dedication to exceptional design and construction.
              </p>
            </div>
          </div>
        </section>
        
        {/* Projects Gallery */}
        <section className="section-container py-16">
          {/* Filter buttons */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map(category => (
              <FilterButton 
                key={category} 
                category={category} 
                active={filter === category}
                onClick={() => setFilter(category)}
              />
            ))}
          </div>
          
          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground">
          <div className="container mx-auto px-6 py-20">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-lg mb-6">Have a Project in Mind?</h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                Let's discuss how we can bring your vision to reality with our expertise in design and construction.
              </p>
              <Link to="/contact" className="inline-flex items-center justify-center rounded-md bg-white px-8 py-4 text-sm font-medium text-primary shadow-sm transition-all duration-200 hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;
