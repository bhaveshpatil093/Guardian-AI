
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ResourcesSection from '@/components/ResourcesSection';
import EmergencySection from '@/components/EmergencySection';
import FeatureHighlightsSection from '@/components/FeatureHighlightsSection';
import Footer from '@/components/Footer';
import PrivacyModeToggle from '@/components/PrivacyModeToggle';

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
        <ResourcesSection />
        <FeatureHighlightsSection />
        <EmergencySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
