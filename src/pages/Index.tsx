
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ResourcesSection from '@/components/ResourcesSection';
import EmergencySection from '@/components/EmergencySection';
import FeatureHighlightsSection from '@/components/FeatureHighlightsSection';
import Footer from '@/components/Footer';
import PrivacyModeToggle from '@/components/PrivacyModeToggle';
import { Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        
        {/* Featured Tools Section (Quick Access) */}
        <section className="py-12 bg-gradient-to-b from-white to-guardian-blue-light/10 dark:from-guardian-text-primary dark:to-guardian-text-primary/95">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-guardian-blue-light text-guardian-blue text-sm font-medium">
                <Shield size={14} className="mr-1.5" />
                <span>Featured Tools</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-guardian-text-primary mb-3">
                Start Using Our Most Popular Features
              </h2>
              <p className="text-guardian-text-secondary max-w-2xl mx-auto">
                Access these essential tools to help support your wellbeing journey
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  title: "Safety Plan", 
                  description: "Create your personalized safety strategy",
                  path: "/safety-plan", 
                  color: "bg-guardian-blue-light text-guardian-blue"
                },
                { 
                  title: "Journal", 
                  description: "Document your thoughts and feelings privately",
                  path: "/journal", 
                  color: "bg-guardian-green-light text-guardian-green"
                },
                { 
                  title: "Mood Tracker", 
                  description: "Monitor your emotional wellbeing over time",
                  path: "/mood-tracker", 
                  color: "bg-orange-100 text-orange-600"
                },
                { 
                  title: "Breathing Exercises", 
                  description: "Guided techniques for moments of stress",
                  path: "/breathing-exercises", 
                  color: "bg-purple-100 text-purple-600"
                }
              ].map((feature, index) => (
                <Link 
                  key={index}
                  to={feature.path}
                  className="block p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full ${feature.color} mb-4`}>
                    <Shield size={18} />
                  </div>
                  <h3 className="font-semibold text-guardian-text-primary mb-2">{feature.title}</h3>
                  <p className="text-sm text-guardian-text-secondary mb-4">{feature.description}</p>
                  <Button variant="ghost" size="sm" className="mt-2 p-0 h-auto">
                    Get Started <ArrowRight size={14} className="ml-1" />
                  </Button>
                </Link>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Link to="#features">
                <Button variant="outline">
                  View All Features
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        <ResourcesSection />
        <FeatureHighlightsSection />
        <EmergencySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
