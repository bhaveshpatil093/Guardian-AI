
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Menu, X, ChevronDown } from 'lucide-react';
import QuickExit from './QuickExit';
import ThemeToggle from './ThemeToggle';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import { cn } from '@/lib/utils';

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

  const features = [
    { name: "Mood Tracker", path: "/mood-tracker" },
    { name: "Breathing Exercises", path: "/breathing-exercises" },
    { name: "Local Resources", path: "/local-resources" },
    { name: "Journal", path: "/journal" },
    { name: "Safety Plan", path: "/safety-plan" },
    { name: "Community", path: "/community" },
    { name: "Educational Content", path: "/educational-content" },
    { name: "Scheduled Check-ins", path: "/scheduled-checkins" },
  ];

  const isActive = (path: string) => location.pathname === path;

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
              isActive('/') ? 'text-guardian-blue' : 'text-guardian-text-secondary dark:text-gray-300'
            }`}
          >
            Home
          </Link>
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger 
                  className={`${isActive('/mood-tracker') || 
                    isActive('/breathing-exercises') || 
                    isActive('/journal') || 
                    isActive('/safety-plan') ? 
                    'text-guardian-blue' : 
                    'text-guardian-text-secondary dark:text-gray-300'}`}
                >
                  Features
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {features.map((feature) => (
                      <li key={feature.path}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={feature.path}
                            className={cn(
                              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                              isActive(feature.path) ? "bg-guardian-blue-light text-guardian-blue" : ""
                            )}
                          >
                            <div className="text-sm font-medium leading-none">{feature.name}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <Link 
            to="/resources" 
            className={`transition-all duration-300 hover:text-guardian-blue ${
              isActive('/resources') ? 'text-guardian-blue' : 'text-guardian-text-secondary dark:text-gray-300'
            }`}
          >
            Resources
          </Link>
          <Link 
            to="/emergency" 
            className={`transition-all duration-300 hover:text-guardian-blue ${
              isActive('/emergency') ? 'text-guardian-blue' : 'text-guardian-text-secondary dark:text-gray-300'
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
          <div className="flex flex-col space-y-2 px-2">
            <Link 
              to="/" 
              className={`py-2 px-3 rounded-md transition-all duration-300 ${
                isActive('/') ? 'bg-guardian-blue-light dark:bg-guardian-blue/20 text-guardian-blue' : 'text-guardian-text-secondary dark:text-gray-300 hover:bg-guardian-blue-light/50 dark:hover:bg-guardian-blue/10'
              }`}
            >
              Home
            </Link>
            
            <div className="py-2 px-3">
              <div className="font-medium text-guardian-text-primary dark:text-white mb-2">Features</div>
              <div className="pl-2 space-y-2">
                {features.map((feature) => (
                  <Link
                    key={feature.path}
                    to={feature.path}
                    className={`block py-1.5 px-3 rounded-md transition-all duration-300 ${
                      isActive(feature.path) ? 'bg-guardian-blue-light dark:bg-guardian-blue/20 text-guardian-blue' : 'text-guardian-text-secondary dark:text-gray-300 hover:bg-guardian-blue-light/50 dark:hover:bg-guardian-blue/10'
                    }`}
                  >
                    {feature.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <Link 
              to="/resources" 
              className={`py-2 px-3 rounded-md transition-all duration-300 ${
                isActive('/resources') ? 'bg-guardian-blue-light dark:bg-guardian-blue/20 text-guardian-blue' : 'text-guardian-text-secondary dark:text-gray-300 hover:bg-guardian-blue-light/50 dark:hover:bg-guardian-blue/10'
              }`}
            >
              Resources
            </Link>
            <Link 
              to="/emergency" 
              className={`py-2 px-3 rounded-md transition-all duration-300 ${
                isActive('/emergency') ? 'bg-guardian-blue-light dark:bg-guardian-blue/20 text-guardian-blue' : 'text-guardian-text-secondary dark:text-gray-300 hover:bg-guardian-blue-light/50 dark:hover:bg-guardian-blue/10'
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
