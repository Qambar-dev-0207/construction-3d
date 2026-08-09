
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

import { services } from '@/data/servicesData';

// Service card component
const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className={cn(
      "py-16 md:py-24",
      index > 0 && "border-t border-border"
    )}>
      <div className="container mx-auto px-6">
        <div className={cn(
          "grid grid-cols-1 md:grid-cols-2 gap-12 items-center",
          !isEven && "md:grid-flow-dense"
        )}>
          <div className={cn(
            "space-y-6",
            !isEven && "md:col-start-2"
          )}>
            <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-6">
              <span className="text-primary" dangerouslySetInnerHTML={{ __html: service.icon }}></span>
            </div>
            <h2 className="heading-lg">{service.title}</h2>
            <p className="text-muted-foreground">{service.description}</p>
            <ul className="space-y-2">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className={cn(
            "rounded-lg overflow-hidden shadow-elevation",
            isEven ? "md:col-start-2" : "md:col-start-1"
          )}>
            <img 
              src={service.image} 
              alt={service.title} 
              loading="lazy"
              decoding="async"
              width="600"
              height="400"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Process step component
const ProcessStep = ({ number, title, description }: { number: number; title: string; description: string }) => {
  return (
    <div className="relative">
      <div className="flex items-start">
        <div className="flex-shrink-0 mr-4">
          <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-medium">
            {number}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-medium mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
};

// Services page component
const Services = () => {
  const processSteps = [
    {
      title: 'Consultation',
      description: 'We begin with a detailed discussion to understand your vision, requirements, and constraints.'
    },
    {
      title: 'Concept Development',
      description: 'We create initial design concepts based on your requirements and preferences.'
    },
    {
      title: 'Design Refinement',
      description: 'We refine the chosen concept with your feedback, adding detail and specificity.'
    },
    {
      title: 'Documentation',
      description: 'We prepare detailed construction documents and specifications for your project.'
    },
    {
      title: 'Construction',
      description: 'We oversee the construction process to ensure quality and adherence to the design.'
    },
    {
      title: 'Completion',
      description: 'We conduct a final review and ensure your complete satisfaction with the finished project.'
    }
  ];
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-secondary">
          <div className="container mx-auto px-6 py-20 md:py-32">
            <div className="max-w-3xl">
              <h1 className="heading-xl mb-6 animate-fade-in">Our Services</h1>
              <p className="text-lg text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '100ms' }}>
                We offer a comprehensive range of design and construction services to bring your vision to life, from initial concept to final execution.
              </p>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section>
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </section>
        
        {/* Our Process Section */}
        <section className="bg-secondary py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="heading-lg mb-6">Our Process</h2>
              <p className="text-muted-foreground">
                We follow a structured approach to ensure every project is completed to the highest standards, on time and within budget.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Process Timeline */}
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-border"></div>
                
                {/* Process Steps */}
                <div className="space-y-12">
                  {processSteps.map((step, index) => (
                    <ProcessStep 
                      key={index} 
                      number={index + 1} 
                      title={step.title} 
                      description={step.description} 
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="section-container py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-lg mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-8">
              <div className="glass-card p-6">
                <h3 className="text-xl font-medium mb-2">How long does a typical project take?</h3>
                <p className="text-muted-foreground">Project timelines vary depending on scope and complexity. A small renovation might take 2-3 months, while a new construction could take 12-18 months. We'll provide a detailed timeline during the initial consultation.</p>
              </div>
              
              <div className="glass-card p-6">
                <h3 className="text-xl font-medium mb-2">What is your design process?</h3>
                <p className="text-muted-foreground">Our design process includes consultation, concept development, design refinement, documentation, construction, and completion. We involve you at every stage to ensure your vision is realized.</p>
              </div>
              
              <div className="glass-card p-6">
                <h3 className="text-xl font-medium mb-2">How do you charge for your services?</h3>
                <p className="text-muted-foreground">We offer flexible fee structures including fixed fee, percentage-based, and hourly rates depending on the project type and scope. We'll discuss the most appropriate option during our initial consultation.</p>
              </div>
              
              <div className="glass-card p-6">
                <h3 className="text-xl font-medium mb-2">Do you handle permits and regulations?</h3>
                <p className="text-muted-foreground">Yes, we manage all aspects of the permitting process and ensure compliance with local building codes and regulations. This includes preparation and submission of documentation and liaison with authorities.</p>
              </div>
              
              <div className="glass-card p-6">
                <h3 className="text-xl font-medium mb-2">Can you work with my existing contractors?</h3>
                <p className="text-muted-foreground">Yes, we're happy to collaborate with your preferred contractors. We can also recommend trusted professionals from our network if needed.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground">
          <div className="container mx-auto px-6 py-20">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-lg mb-6">Ready to Start Your Project?</h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                Contact us today to schedule a consultation and discover how we can bring your vision to life.
              </p>
              <Link to="/contact" className="inline-flex items-center justify-center rounded-md bg-white px-8 py-4 text-sm font-medium text-primary shadow-sm transition-all duration-200 hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
