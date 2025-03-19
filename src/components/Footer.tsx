
import { Heart, Shield, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Shield className="w-6 h-6 text-guardian-blue mr-2" />
              <span className="font-medium text-lg text-guardian-text-primary">Guardian AI</span>
            </div>
            <p className="text-guardian-text-secondary mb-4 max-w-md">
              Guardian AI provides resources, support, and guidance for children and teenagers in need of assistance. Our mission is to create a safer environment for young individuals.
            </p>
            <div className="flex items-center text-guardian-text-secondary text-sm">
              <Heart className="w-4 h-4 text-guardian-green mr-2" />
              <span>Built with care to support those who need it</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-medium text-guardian-text-primary mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-guardian-text-secondary hover:text-guardian-blue transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-guardian-text-secondary hover:text-guardian-blue transition-colors duration-200">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/emergency" className="text-guardian-text-secondary hover:text-guardian-blue transition-colors duration-200">
                  Emergency Contacts
                </Link>
              </li>
            </ul>
          </div>

          {/* Important Resources */}
          <div>
            <h3 className="font-medium text-guardian-text-primary mb-4">Important Resources</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://www.childhelp.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-guardian-text-secondary hover:text-guardian-blue transition-colors duration-200"
                >
                  <span>Childhelp</span>
                  <ExternalLink size={12} className="ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.crisistextline.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-guardian-text-secondary hover:text-guardian-blue transition-colors duration-200"
                >
                  <span>Crisis Text Line</span>
                  <ExternalLink size={12} className="ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.stopbullying.gov/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-guardian-text-secondary hover:text-guardian-blue transition-colors duration-200"
                >
                  <span>StopBullying.gov</span>
                  <ExternalLink size={12} className="ml-1" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-100 pt-6 text-center text-guardian-text-secondary text-sm">
          <p>© {new Date().getFullYear()} Guardian AI. All rights reserved.</p>
          <p className="mt-1">This application is designed as a resource tool and is not a substitute for professional help.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
