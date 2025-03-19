
import { Phone, MessageCircle, Globe, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAnimatedMount } from '@/utils/animations';

const EmergencySection = () => {
  const mounted = useAnimatedMount(200);

  const emergencyContacts = [
    {
      title: "National Emergency",
      number: "911",
      description: "For immediate emergency assistance",
      icon: <Phone className="w-5 h-5" />,
      color: "bg-red-100 text-red-600"
    },
    {
      title: "Crisis Text Line",
      number: "Text HOME to 741741",
      description: "24/7 crisis counseling via text",
      icon: <MessageCircle className="w-5 h-5" />,
      color: "bg-guardian-blue-light text-guardian-blue"
    },
    {
      title: "Childhelp National Hotline",
      number: "1-800-422-4453",
      description: "24/7 hotline for child abuse situations",
      icon: <Phone className="w-5 h-5" />,
      color: "bg-guardian-green-light text-guardian-green"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-guardian-green-light text-guardian-green text-sm font-medium mb-4">
            Quick Access
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-guardian-text-primary mb-4">
            Emergency Contacts
          </h2>
          <div className="separator bg-guardian-green"></div>
          <p className="text-lg text-guardian-text-secondary max-w-2xl mx-auto">
            Immediate help is available. These resources are available 24/7 for anyone in need of assistance.
          </p>
        </div>

        {/* Emergency Contacts List */}
        <div className="max-w-3xl mx-auto mb-12">
          {emergencyContacts.map((contact, index) => (
            <div 
              key={index}
              className={`mb-4 bg-white rounded-xl p-5 border border-gray-100 shadow-sm flex items-center transition-all duration-500 ${
                mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`${contact.color} p-3 rounded-full mr-4`}>
                {contact.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-guardian-text-primary">{contact.title}</h3>
                <p className="text-guardian-text-secondary text-sm">{contact.description}</p>
              </div>
              <div className="text-right">
                <div className="font-bold text-guardian-text-primary">{contact.number}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div 
          className={`text-center ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} 
          style={{ transitionDelay: '400ms' }}
        >
          <Link 
            to="/emergency" 
            className="inline-flex items-center px-8 py-3 rounded-full bg-white border border-guardian-green/30 text-guardian-green font-medium hover:bg-guardian-green-light transition-all duration-300"
          >
            View All Emergency Resources
            <ChevronRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EmergencySection;
