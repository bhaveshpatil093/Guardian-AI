
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Menu, X } from 'lucide-react';
import QuickExit from './QuickExit';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ease-in-out py-4 px-6 ${
        isScrolled ? 'bg-white/90 dark:bg-guardian-text-primary/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center space-x-2 text-guardian-text-primary dark:text-white transition-opacity duration-300 hover:opacity-80"
        >
          <Shield className="w-6 h-6 text-guardian-blue" />
          <span className="font-medium text-lg">Guardian AI</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link 
            to="/" 
            className={`transition-all duration-300 hover:text-guardian-blue ${
              location.pathname === '/' ? 'text-guardian-blue' : 'text-guardian-text-secondary dark:text-gray-300'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/resources" 
            className={`transition-all duration-300 hover:text-guardian-blue ${
              location.pathname === '/resources' ? 'text-guardian-blue' : 'text-guardian-text-secondary dark:text-gray-300'
            }`}
          >
            Resources
          </Link>
          <Link 
            to="/emergency" 
            className={`transition-all duration-300 hover:text-guardian-blue ${
              location.pathname === '/emergency' ? 'text-guardian-blue' : 'text-guardian-text-secondary dark:text-gray-300'
            }`}
          >
            Emergency
          </Link>
          <ThemeToggle />
          <QuickExit />
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <ThemeToggle className="mr-2" />
          <QuickExit className="mr-4" />
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-full text-guardian-text-secondary dark:text-gray-300 hover:text-guardian-blue hover:bg-guardian-blue-light dark:hover:bg-guardian-blue/20 transition-all duration-300"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-guardian-text-primary/95 backdrop-blur-md shadow-md p-4 rounded-b-lg animate-fade-in">
          <div className="flex flex-col space-y-4 px-2">
            <Link 
              to="/" 
              className={`py-2 px-3 rounded-md transition-all duration-300 ${
                location.pathname === '/' ? 'bg-guardian-blue-light dark:bg-guardian-blue/20 text-guardian-blue' : 'text-guardian-text-secondary dark:text-gray-300 hover:bg-guardian-blue-light/50 dark:hover:bg-guardian-blue/10'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/resources" 
              className={`py-2 px-3 rounded-md transition-all duration-300 ${
                location.pathname === '/resources' ? 'bg-guardian-blue-light dark:bg-guardian-blue/20 text-guardian-blue' : 'text-guardian-text-secondary dark:text-gray-300 hover:bg-guardian-blue-light/50 dark:hover:bg-guardian-blue/10'
              }`}
            >
              Resources
            </Link>
            <Link 
              to="/emergency" 
              className={`py-2 px-3 rounded-md transition-all duration-300 ${
                location.pathname === '/emergency' ? 'bg-guardian-blue-light dark:bg-guardian-blue/20 text-guardian-blue' : 'text-guardian-text-secondary dark:text-gray-300 hover:bg-guardian-blue-light/50 dark:hover:bg-guardian-blue/10'
              }`}
            >
              Emergency
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
