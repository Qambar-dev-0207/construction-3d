
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import { cn } from '@/lib/utils';

import { projects } from '@/data/projectsData';

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
  const categories = ['All', 'Residential', 'Commercial', 'Hospitality', 'Architectural', 'Interior Details'];
  
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
