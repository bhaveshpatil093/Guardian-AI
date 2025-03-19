
import { BookOpen, Users, FileText, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAnimatedMount } from '@/utils/animations';

const ResourcesSection = () => {
  const mounted = useAnimatedMount(100);

  const resources = [
    {
      title: "Recognizing Abuse",
      description: "Learn about the different types of abuse and how to identify warning signs.",
      icon: <BookOpen className="w-6 h-6 text-guardian-blue" />,
      link: "/resources#recognizing"
    },
    {
      title: "Support Networks",
      description: "Information about building and finding support among trusted friends and adults.",
      icon: <Users className="w-6 h-6 text-guardian-blue" />,
      link: "/resources#networks"
    },
    {
      title: "Safety Planning",
      description: "Guidelines for creating a personal safety plan for different situations.",
      icon: <FileText className="w-6 h-6 text-guardian-blue" />,
      link: "/resources#safety"
    }
  ];

  return (
    <section className="py-20 px-6 bg-guardian-neutral">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-guardian-blue-light text-guardian-blue text-sm font-medium mb-4">
            Helpful Information
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-guardian-text-primary mb-4">
            Resources & Guidance
          </h2>
          <div className="separator"></div>
          <p className="text-lg text-guardian-text-secondary max-w-2xl mx-auto">
            Access information and resources designed to help you understand difficult situations and find appropriate support.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {resources.map((resource, index) => (
            <Link 
              key={index}
              to={resource.link}
              className={`group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-500 transform hover:-translate-y-1 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="p-3 bg-guardian-blue-light rounded-xl inline-block mb-4">
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
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '300ms' }}>
          <Link 
            to="/resources" 
            className="inline-flex items-center px-8 py-3 rounded-full bg-guardian-blue-light text-guardian-blue font-medium hover:bg-guardian-blue hover:text-white transition-all duration-300"
          >
            View All Resources
            <ExternalLink size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
