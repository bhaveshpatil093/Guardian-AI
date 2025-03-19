
import { Link } from 'react-router-dom';
import { 
  Smile, 
  Wind, 
  MapPin, 
  BookText, 
  Shield, 
  Users, 
  BookOpen, 
  Bell, 
  WifiOff, 
  Eye 
} from 'lucide-react';
import { useAnimatedMount } from '@/utils/animations';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  to: string;
  delay: number;
}

const FeatureCard = ({ title, description, icon, to, delay }: FeatureCardProps) => {
  const mounted = useAnimatedMount(delay);
  
  return (
    <Link
      to={to}
      className={`block glass-card p-6 rounded-lg transition-all duration-300 transform ${
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-guardian-blue-light">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-guardian-text-primary">{title}</h3>
      <p className="text-sm text-guardian-text-secondary">{description}</p>
    </Link>
  );
};

const FeatureHighlightsSection = () => {
  const features = [
    {
      title: "Mood Tracker",
      description: "Track your emotional well-being over time and identify patterns",
      icon: <Smile className="h-6 w-6 text-guardian-blue" />,
      to: "/mood-tracker",
      delay: 0
    },
    {
      title: "Privacy Mode",
      description: "Instantly hide sensitive content when someone approaches",
      icon: <Eye className="h-6 w-6 text-guardian-blue" />,
      to: "#",
      delay: 100
    },
    {
      title: "Breathing Exercises",
      description: "Guided techniques for moments of anxiety or stress",
      icon: <Wind className="h-6 w-6 text-guardian-blue" />,
      to: "/breathing-exercises",
      delay: 200
    },
    {
      title: "Local Resources",
      description: "Find nearby support services based on your location",
      icon: <MapPin className="h-6 w-6 text-guardian-blue" />,
      to: "/local-resources",
      delay: 300
    },
    {
      title: "Journal",
      description: "Private space to document your thoughts and experiences",
      icon: <BookText className="h-6 w-6 text-guardian-blue" />,
      to: "/journal",
      delay: 400
    },
    {
      title: "Safety Plan",
      description: "Create personalized safety plans for different scenarios",
      icon: <Shield className="h-6 w-6 text-guardian-blue" />,
      to: "/safety-plan",
      delay: 500
    },
    {
      title: "Community",
      description: "Connect with peers for support in a moderated space",
      icon: <Users className="h-6 w-6 text-guardian-blue" />,
      to: "/community",
      delay: 600
    },
    {
      title: "Educational Content",
      description: "Age-appropriate resources about safety topics",
      icon: <BookOpen className="h-6 w-6 text-guardian-blue" />,
      to: "/educational-content",
      delay: 700
    },
    {
      title: "Scheduled Check-ins",
      description: "Automated wellness check-ins at user-defined intervals",
      icon: <Bell className="h-6 w-6 text-guardian-blue" />,
      to: "/scheduled-checkins",
      delay: 800
    },
    {
      title: "Offline Mode",
      description: "Essential resources accessible without internet",
      icon: <WifiOff className="h-6 w-6 text-guardian-blue" />,
      to: "#",
      delay: 900
    }
  ];
  
  return (
    <section className="py-16 bg-gradient-to-b from-background to-guardian-blue-light/20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-guardian-text-primary mb-4">
            Guardian AI Features
          </h2>
          <p className="text-guardian-text-secondary max-w-2xl mx-auto">
            Explore our comprehensive set of tools designed to support your wellbeing and safety journey
          </p>
          <div className="separator"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 animate-on-scroll">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlightsSection;
