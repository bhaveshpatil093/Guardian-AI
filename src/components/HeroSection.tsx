
import { useEffect, useState } from 'react';
import { Shield, Heart, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAnimatedMount } from '@/utils/animations';

const HeroSection = () => {
  const mounted = useAnimatedMount();
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-12 w-64 h-64 rounded-full bg-guardian-blue/10 blur-3xl transform -translate-y-1/2" />
        <div className="absolute bottom-1/4 -right-12 w-64 h-64 rounded-full bg-guardian-green/10 blur-3xl transform translate-y-1/2" />
      </div>
      
      {/* Hero Content */}
      <div 
        className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
          mounted ? 'opacity-100' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Badge */}
        <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-guardian-blue-light text-guardian-blue text-sm font-medium animate-slide-down">
          <Shield size={14} className="mr-1.5" />
          <span>Your safety companion</span>
        </div>
        
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-guardian-text-primary mb-6 leading-tight tracking-tight animate-slide-down animation-delay-100">
          Protecting and Supporting <br className="hidden md:block" />
          <span className="text-guardian-blue">Young Lives</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-guardian-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-down animation-delay-200">
          Guardian AI provides a safe space with resources and support for children and teenagers facing difficult situations.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-down animation-delay-300">
          <Link 
            to="/resources" 
            className="px-8 py-3 rounded-full bg-guardian-blue text-white font-medium shadow-sm hover:shadow-md hover:bg-guardian-blue/90 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Find Resources
          </Link>
          <Link 
            to="/emergency" 
            className="px-8 py-3 rounded-full bg-white text-guardian-text-primary font-medium shadow-sm hover:shadow-md border border-guardian-blue/20 hover:border-guardian-blue/30 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Emergency Help
          </Link>
        </div>
      </div>
      
      {/* Features */}
      <div className="w-full max-w-4xl mx-auto grid md:grid-cols-3 gap-6 md:gap-8 px-4 animate-slide-up animation-delay-400">
        {[
          {
            icon: <Shield className="w-10 h-10 text-guardian-blue" />,
            title: "Protection",
            description: "Learn about your rights and how to protect yourself in difficult situations."
          },
          {
            icon: <Heart className="w-10 h-10 text-guardian-green" />,
            title: "Support",
            description: "Access resources and contacts for immediate help and long-term support."
          },
          {
            icon: <MessageSquare className="w-10 h-10 text-guardian-blue" />,
            title: "Guidance",
            description: "Get information about recognizing abuse and getting the help you need."
          }
        ].map((feature, index) => (
          <div 
            key={index}
            className="glass-card p-6 rounded-2xl text-center"
            style={{ animationDelay: `${(index + 4) * 100}ms` }}
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-xl font-medium text-guardian-text-primary mb-2">{feature.title}</h3>
            <p className="text-guardian-text-secondary">{feature.description}</p>
          </div>
        ))}
      </div>
      
      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-500 ${
          isScrolled ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="w-6 h-10 border-2 border-guardian-blue/30 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-guardian-blue rounded-full animate-bounce mt-1" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
