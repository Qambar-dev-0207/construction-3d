
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import InfiniteScrollText from './InfiniteScrollText';
import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react';
import Samriddhi from '../images/Samriddhi.png'; // Adjust the path as necessary


const NavbarLink = ({ to, children, onClick }: { to: string; children: React.ReactNode; onClick?: () => void }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      onClick={onClick}
      className={cn(
        "relative px-4 py-2 text-sm font-medium transition-all duration-200 link-hover",
        isActive ? "text-primary" : "text-primary/70 hover:text-primary"
      )}
    >
      {children}
    </Link>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const contactInfo = [
    <div className="flex items-center"><Phone size={14} className="mr-2" /> (+91) 9867371009</div>,
    <div className="flex items-center"><Mail size={14} className="mr-2" /> samriddhhi.consultant@gmail.com</div>,
    <div className="flex items-center"><Clock size={14} className="mr-2" /> Mon-Fri 9AM-5PM</div>,
    <div className="flex items-center"><MapPin size={14} className="mr-2" /> 655/08, Prabha Market, Kursi Road, Aliganj, Lucknow</div>,
    <div className="flex items-center"><Instagram size={14} className="mr-2" />Samriddhi Consultant</div>
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "py-0 bg-white/90 backdrop-blur-md shadow-subtle" : "py-0 bg-transparent"
        )}
      >
        <div className="container  px-6 flex items-center justify-between">
        <div className="navbar-logo">
          <img src={Samriddhi} alt="Samriddhi Consultant Logo" width="180" height="50" className="h-12 w-auto object-contain" />
        </div>


          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 mt-3">
            <NavbarLink to="/">Home</NavbarLink>
            <NavbarLink to="/projects">Projects</NavbarLink>
            <NavbarLink to="/services">Services</NavbarLink>
            <NavbarLink to="/contact">Contact</NavbarLink>
            <Link to="/contact" className="ml-2 button-primary">
              Get a Quote
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex items-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className={cn(
                "block w-6 h-0.5 bg-primary transition-all duration-300",
                isMenuOpen && "transform rotate-45 translate-y-2"
              )}></span>
              <span className={cn(
                "block w-6 h-0.5 bg-primary transition-all duration-300",
                isMenuOpen && "opacity-0"
              )}></span>
              <span className={cn(
                "block w-6 h-0.5 bg-primary transition-all duration-300",
                isMenuOpen && "transform -rotate-45 -translate-y-2"
              )}></span>
            </div>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div className={cn(
          "md:hidden absolute w-full bg-white shadow-elevation transition-all duration-300 overflow-hidden",
          isMenuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        )}>
          <div className="container mx-auto px-6 py-6 flex flex-col space-y-4">
            <NavbarLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavbarLink>
            <NavbarLink to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</NavbarLink>
            <NavbarLink to="/services" onClick={() => setIsMenuOpen(false)}>Services</NavbarLink>
            <NavbarLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</NavbarLink>
            <Link 
              to="/contact" 
              onClick={() => setIsMenuOpen(false)}
              className="button-primary w-full text-center"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </nav>
      
      {/* Infinite Scrolling Text Banner */}
      <div className="fixed top-0 left-0 right-0 mt-[70px] z-40">
        <InfiniteScrollText 
          items={contactInfo}
          speed={40}
          separatorColor="text-primary/20"
        />
      </div>
    </>
  );
};

export default Navbar;
