
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

import { projects } from '@/data/projectsData';

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
