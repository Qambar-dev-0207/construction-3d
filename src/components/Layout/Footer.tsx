
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Twitter, Linkedin, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center">
              <span className="font-display text-xl font-medium">SAMRIDDHI</span>
              <span className="font-display text-xl font-light text-primary-foreground/70">CONSULTANT</span>
            </Link>
            <p className="mt-4 text-primary-foreground/80 max-w-xs">
              Transforming spaces with innovative design and precision construction since 2005.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4 flex items-center">
              <span className="block w-8 h-[2px] bg-primary-foreground/30 mr-3"></span>
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2 opacity-0 transition-all duration-300 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0" />
                  Interior Design
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2 opacity-0 transition-all duration-300 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0" />
                  Architectural Design
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2 opacity-0 transition-all duration-300 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0" />
                  Construction
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2 opacity-0 transition-all duration-300 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0" />
                  3D Modeling
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2 opacity-0 transition-all duration-300 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0" />
                  Renovation
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4 flex items-center">
              <span className="block w-8 h-[2px] bg-primary-foreground/30 mr-3"></span>
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2 opacity-0 transition-all duration-300 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2 opacity-0 transition-all duration-300 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0" />
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2 opacity-0 transition-all duration-300 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0" />
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2 opacity-0 transition-all duration-300 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0" />
                  Careers
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4 flex items-center">
              <span className="block w-8 h-[2px] bg-primary-foreground/30 mr-3"></span>
              Contact Us
            </h3>
            <address className="not-italic space-y-3">
              <p className="text-primary-foreground/80 flex items-center">
                <MapPin size={16} className="mr-3 opacity-70" />
                655/08, Prabha Market, Kursi Road, Aliganj, Lucknow
              </p>
              <p className="text-primary-foreground/80 flex items-center">
                <Phone size={16} className="mr-3 opacity-70" />
                (+91) 9867371009 
              </p>
              <p className="text-primary-foreground/80 flex items-center">
                <Mail size={16} className="mr-3 opacity-70" />
                samriddhhi.consultant@gmail.com
              </p>
              <p className="text-primary-foreground/80 flex items-center">
                <Clock size={16} className="mr-3 opacity-70" />
                Mon-Fri: 9AM-5PM
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} SamriddhiConsultant. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm">Privacy Policy</a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm">Terms of Service</a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm">Cookies Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
