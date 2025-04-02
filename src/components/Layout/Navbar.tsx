
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import InfiniteScrollText from './InfiniteScrollText';

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
    "Email: info@visionarydesign.com",
    "Phone: +1 (555) 123-4567",
    "Office Hours: Mon-Fri 9AM-5PM",
    "Address: 1234 Design Avenue, Creative City",
    "Follow us @visionarydesign",
    "Portfolio: www.visionarydesign.com"
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "py-3 bg-white/80 backdrop-blur-md shadow-subtle" : "py-6 bg-transparent"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="font-display text-xl font-medium">Visionary</span>
            <span className="font-display text-xl font-light text-primary/70">Design</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
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
          >
            <div className="space-y-2">
              <span className={cn(
                "block w-6 h-0.5 bg-primary transition-all duration-300",
                isMenuOpen && "transform rotate-45 translate-y-2.5"
              )}></span>
              <span className={cn(
                "block w-6 h-0.5 bg-primary transition-all duration-300",
                isMenuOpen && "opacity-0"
              )}></span>
              <span className={cn(
                "block w-6 h-0.5 bg-primary transition-all duration-300",
                isMenuOpen && "transform -rotate-45 -translate-y-2.5"
              )}></span>
            </div>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div className={cn(
          "md:hidden absolute w-full bg-white shadow-elevation transition-all duration-300 overflow-hidden",
          isMenuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        )}>
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
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
      <div className="fixed top-0 left-0 right-0 mt-[72px] z-40">
        <InfiniteScrollText 
          items={contactInfo}
          speed={40}
        />
      </div>
    </>
  );
};

export default Navbar;
