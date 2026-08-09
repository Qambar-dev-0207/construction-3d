import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Scene from '@/components/3D/Scene';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import TeamSection from '@/components/TeamSection';
import { projects } from '@/data/projectsData';
import { services } from '@/data/servicesData';
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full">
          <Scene className="h-full mt-0 " height="100%" />
        </div>
        {/* Gradient overlay */}
        
      </div>
      
      <div className="container mx-auto px-6 py-12 z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="max-w-xl animate-slide-from-left">
            <h1 className="heading-xl mb-6">
              Transform Your Space With Samriddhi Consultant
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              We blend innovative architecture, premium interior design, and precision construction to create spaces that inspire.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/projects" className="button-primary">
                View Our Projects
              </Link>
              <Link to="/contact" className="button-secondary">
                Get a Quote
              </Link>
            </div>
          </div>
          
          <div className="hidden md:block">
            {/* This space is intentionally left empty as the 3D scene covers the background */}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-float">
        <a href="#services" className="flex flex-col items-center text-primary/70 hover:text-primary transition-colors">
          <span className="text-sm mb-2">Discover More</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>;
};
const ServiceCard = ({
  icon,
  title,
  description
}: {
  icon: string;
  title: string;
  description: string;
}) => {
  return <div className="glass-card p-6 transition-all duration-300 hover:shadow-elevation hover:-translate-y-1">
      <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
        <span className="text-primary" dangerouslySetInnerHTML={{
        __html: icon
      }}></span>
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>;
};
const ServicesSection = () => {
  const services = [{
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 7v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h8l4 4Z"/><path d="M15 2v5h5"/></svg>',
    title: 'Architectural Design',
    description: 'Custom architectural solutions that blend form and function for residential and commercial spaces.'
  }, {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10a7 7 0 1 0 14 0 7 7 0 1 0-14 0"/><path d="M21 10a7 6 0 0 0-11.8-4.4"/><path d="M21 10a7 7 0 0 1-14 0"/><path d="M7.1 8a7.1 4.3 0 0 0 0 4"/><path d="M16.9 14a7.1 4.3 0 0 0 0-8"/></svg>',
    title: 'Interior Design',
    description: 'Elegant and functional interior solutions that transform your space into a work of art.'
  }, {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><line x1="20" x2="20" y1="8" y2="16"/><line x1="4" x2="4" y1="8" y2="16"/><line x1="12" x2="12" y1="2" y2="22"/></svg>',
    title: 'Construction Management',
    description: 'Comprehensive construction management services to bring your design vision to life.'
  }, {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.29 7 12 12 20.71 7"/><line x1="12" y1="22" y2="12"/></svg>',
    title: '3D Visualization',
    description: 'Photorealistic 3D visualizations to help you imagine your space before construction begins.'
  }, {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M18.7 8h-5.4c-.6 0-1-.4-1-1 0-.5.4-1 1-1h5.4c.6 0 1 .4 1 1s-.5 1-1 1Z"/><path d="M12.3 16h-5.4c-.6 0-1-.4-1-1 0-.5.4-1 1-1h5.4c.6 0 1 .4 1 1s-.5 1-1 1Z"/><path d="m9 10 3-3"/><path d="m9 14 3 3"/></svg>',
    title: 'Renovation & Remodeling',
    description: 'Breathe new life into existing spaces with our renovation and remodeling expertise.'
  }, {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
    title: 'Sustainable Design',
    description: 'Eco-friendly design solutions that minimize environmental impact without sacrificing style.'
  }];
  return <section id="services" className="section-container py-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="subheading mb-3">Our Services</p>
        <h2 className="heading-lg mb-6">
          Comprehensive Design & Construction Solutions
        </h2>
        <p className="text-muted-foreground">
          We offer a full spectrum of services to create spaces that are both functional and aesthetically stunning, from initial concept to final execution.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />)}
      </div>
      
      <div className="mt-12 text-center">
        <Link to="/services" className="button-primary">
          Explore All Services
        </Link>
      </div>
    </section>;
};
const ProjectCard = ({
  id,
  image,
  title,
  category,
  delay = 0
}: {
  id: number;
  image: string;
  title: string;
  category: string;
  delay?: number;
}) => {
  return <Link to={`/projects/${id}`} className="group relative overflow-hidden rounded-lg cursor-pointer block" style={{
    animationDelay: `${delay}ms`
  }}>
      <div className="relative h-80 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <p className="text-white/80 text-sm mb-1">{category}</p>
        <h3 className="text-white text-xl font-medium">{title}</h3>
      </div>
    </Link>;
};
const ProjectsSection = () => {
  const featuredProjects = projects.filter(p => p.featured);
  return <section className="bg-secondary py-20">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div className="max-w-2xl">
            <p className="subheading mb-3">Featured Projects</p>
            <h2 className="heading-lg mb-6">
              Transforming Visions Into Reality
            </h2>
            <p className="text-muted-foreground">
              Explore our portfolio of completed projects showcasing our dedication to quality, innovation, and attention to detail.
            </p>
          </div>
          <Link to="/projects" className="button-primary mt-6 md:mt-0">
            View All Projects
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => <ProjectCard key={project.id} id={project.id} image={project.image} title={project.title} category={project.category} delay={index * 100} />)}
        </div>
      </div>
    </section>;
};
const StatCard = ({
  number,
  label
}: {
  number: string;
  label: string;
}) => {
  return <div className="text-center">
      <p className="text-4xl font-display font-medium mb-2">{number}</p>
      <p className="text-muted-foreground">{label}</p>
    </div>;
};
const StatsSection = () => {
  return <section className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCard number="150+" label="Projects Completed" />
          <StatCard number="20+" label="Years Experience" />
          <StatCard number="35+" label="Design Awards" />
          <StatCard number="100%" label="Client Satisfaction" />
        </div>
      </div>
    </section>;
};
const TestimonialCard = ({
  quote,
  author,
  role,
  company
}: {
  quote: string;
  author: string;
  role: string;
  company: string;
}) => {
  return <div className="glass-card p-8">
      <svg className="w-10 h-10 text-primary/30 mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
      </svg>
      <p className="text-lg mb-6">{quote}</p>
      <div>
        <p className="font-medium">{author}</p>
        <p className="text-sm text-muted-foreground">{role}, {company}</p>
      </div>
    </div>;
};
const TestimonialsSection = () => {
  const testimonials = [{
    quote: "Visionary Design transformed our outdated office into a modern, functional workspace that perfectly reflects our brand identity. Their attention to detail and commitment to quality is unmatched.",
    author: "Sarah Johnson",
    role: "CEO",
    company: "Innovate Media"
  }, {
    quote: "Working with the team at Visionary Design was a pleasure from start to finish. They listened to our needs and created a home that exceeds all of our expectations.",
    author: "Michael Chen",
    role: "Homeowner",
    company: "Private Residence"
  }, {
    quote: "The 3D visualization services provided by Visionary Design were instrumental in helping us secure investor funding for our new hospitality project.",
    author: "David Williams",
    role: "Development Director",
    company: "Luxe Hospitality Group"
  }];
  return <section className="section-container py-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="subheading mb-3">Client Testimonials</p>
        <h2 className="heading-lg mb-6">
          What Our Clients Say
        </h2>
        <p className="text-muted-foreground">
          We take pride in delivering exceptional experiences and results for our clients. Here's what they have to say about working with us.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => <TestimonialCard key={index} quote={testimonial.quote} author={testimonial.author} role={testimonial.role} company={testimonial.company} />)}
      </div>
    </section>;
};
const CTASection = () => {
  return <section className="relative bg-primary text-primary-foreground py-20">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-lg mb-6">Ready to Transform Your Space?</h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Contact us today to discuss your project and discover how we can bring your vision to life.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center rounded-md bg-white px-8 py-4 text-sm font-medium text-primary shadow-sm transition-all duration-200 hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
            Get Started
          </Link>
        </div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary via-primary to-primary-foreground/20 opacity-50"></div>
    </section>;
};
const Index = () => {
  return <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <TeamSection />
        <StatsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>;
};
export default Index;