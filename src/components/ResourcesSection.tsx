
import { BookOpen, Users, FileText, PhoneCall, Globe, Shield, Brain, Heart, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAnimatedMount } from '@/utils/animations';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

const ResourcesSection = () => {
  const mounted = useAnimatedMount(100);

  const resources = [
    {
      title: "Recognizing Abuse",
      description: "Learn about the different types of abuse and how to identify warning signs.",
      icon: <BookOpen className="w-6 h-6 text-guardian-blue" />,
      link: "/resources#recognizing",
      detail: "Understanding the signs of physical, emotional, and digital abuse can help you identify harmful situations early."
    },
    {
      title: "Support Networks",
      description: "Information about building and finding support among trusted friends and adults.",
      icon: <Users className="w-6 h-6 text-guardian-blue" />,
      link: "/resources#networks",
      detail: "Building a reliable support network of trusted individuals is crucial for your safety and well-being."
    },
    {
      title: "Safety Planning",
      description: "Guidelines for creating a personal safety plan for different situations.",
      icon: <FileText className="w-6 h-6 text-guardian-blue" />,
      link: "/resources#safety",
      detail: "A safety plan helps you prepare for different scenarios and know exactly what to do if you feel unsafe."
    },
    {
      title: "Helplines & Contacts",
      description: "Directory of national and local helplines and support services.",
      icon: <PhoneCall className="w-6 h-6 text-guardian-blue" />,
      link: "/resources#helplines",
      detail: "24/7 helplines are available to provide immediate assistance, guidance, and emotional support when you need it."
    },
    {
      title: "Online Safety",
      description: "Tips for staying safe online and protecting your digital privacy.",
      icon: <Globe className="w-6 h-6 text-guardian-blue" />,
      link: "/resources#online",
      detail: "Learn how to protect your privacy, avoid cyberbullying, and stay safe in digital environments."
    },
    {
      title: "Legal Information",
      description: "Age-appropriate information about legal rights and protections for minors.",
      icon: <Shield className="w-6 h-6 text-guardian-blue" />,
      link: "/resources#legal",
      detail: "Understanding your legal rights as a minor can help you advocate for yourself in difficult situations."
    },
    {
      title: "Mental Wellness",
      description: "Resources for maintaining mental health during difficult situations.",
      icon: <Brain className="w-6 h-6 text-guardian-blue" />,
      link: "/resources#mental-wellness",
      detail: "Taking care of your mental health is just as important as physical safety, especially during stressful times."
    },
    {
      title: "Self-Care Guides",
      description: "Practical guides for self-care and building resilience.",
      icon: <Heart className="w-6 h-6 text-guardian-blue" />,
      link: "/resources#self-care",
      detail: "Self-care practices can help you build resilience and maintain your wellbeing even in challenging circumstances."
    }
  ];

  return (
    <section className="py-20 px-6 bg-guardian-neutral">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-guardian-blue-light text-guardian-blue text-sm font-medium mb-4 animate-fade-in">
            Helpful Information
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-guardian-text-primary mb-4 animate-slide-down">
            Resources & Guidance
          </h2>
          <div className="separator animate-scale-in"></div>
          <p className="text-lg text-guardian-text-secondary max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "200ms" }}>
            Access information and resources designed to help you understand difficult situations and find appropriate support.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {resources.map((resource, index) => (
            <HoverCard key={index}>
              <HoverCardTrigger asChild>
                <Link 
                  to={resource.link}
                  className={`group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-500 transform hover:-translate-y-2 ${
                    mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 75}ms` }}
                >
                  <div className="p-3 bg-guardian-blue-light rounded-xl inline-block mb-4 group-hover:bg-guardian-blue group-hover:text-white transition-colors duration-300">
                    {resource.icon}
                  </div>
                  <h3 className="text-xl font-medium text-guardian-text-primary mb-2 group-hover:text-guardian-blue transition-colors duration-300">
                    {resource.title}
                  </h3>
                  <p className="text-guardian-text-secondary mb-4">
                    {resource.description}
                  </p>
                  <div className="flex items-center text-guardian-blue font-medium">
                    <span>Learn more</span>
                    <ExternalLink size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 p-4 bg-white dark:bg-guardian-neutral border border-guardian-blue/20">
                <div className="flex justify-between space-x-4">
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold text-guardian-blue">{resource.title}</h4>
                    <p className="text-sm text-guardian-text-secondary">
                      {resource.detail}
                    </p>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '300ms' }}>
          <Link 
            to="/resources" 
            className="relative inline-flex items-center px-8 py-3 rounded-full bg-guardian-blue-light text-guardian-blue font-medium hover:bg-guardian-blue hover:text-white transition-all duration-300 overflow-hidden group"
          >
            <span className="relative z-10">View All Resources</span>
            <span className="absolute inset-0 bg-guardian-blue transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-in-out"></span>
            <ExternalLink size={16} className="ml-2 relative z-10 group-hover:rotate-45 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
