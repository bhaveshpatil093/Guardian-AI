
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Phone, MessageCircle, Globe, MapPin, Heart } from 'lucide-react';

const Emergency = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const emergencyContacts = [
    {
      title: "National Emergency",
      number: "911",
      description: "For immediate emergency assistance when you or someone else is in danger",
      icon: <Phone className="w-6 h-6" />,
      color: "bg-red-100 text-red-600",
      primary: true
    },
    {
      title: "Crisis Text Line",
      number: "Text HOME to 741741",
      description: "Free 24/7 support for people in crisis. Trained crisis counselors will respond immediately.",
      icon: <MessageCircle className="w-6 h-6" />,
      color: "bg-guardian-blue-light text-guardian-blue",
      website: "https://www.crisistextline.org/",
      primary: true
    },
    {
      title: "Childhelp National Child Abuse Hotline",
      number: "1-800-422-4453",
      description: "Professional crisis counselors available 24/7 in over 170 languages for children experiencing abuse.",
      icon: <Phone className="w-6 h-6" />,
      color: "bg-guardian-green-light text-guardian-green",
      website: "https://www.childhelp.org/",
      primary: true
    },
    {
      title: "National Suicide Prevention Lifeline",
      number: "988 or 1-800-273-8255",
      description: "Provides 24/7, free and confidential support for people in distress and crisis resources.",
      icon: <Phone className="w-6 h-6" />,
      color: "bg-purple-100 text-purple-600",
      website: "https://988lifeline.org/",
      primary: false
    },
    {
      title: "National Runaway Safeline",
      number: "1-800-RUNAWAY (786-2929)",
      description: "Crisis intervention and travel support for runaway and homeless youth.",
      icon: <Phone className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-600",
      website: "https://www.1800runaway.org/",
      primary: false
    },
    {
      title: "National Domestic Violence Hotline",
      number: "1-800-799-7233",
      description: "Support, crisis intervention, safety planning, and referrals for domestic violence.",
      icon: <Phone className="w-6 h-6" />,
      color: "bg-teal-100 text-teal-600",
      website: "https://www.thehotline.org/",
      primary: false
    },
    {
      title: "RAINN National Sexual Assault Hotline",
      number: "1-800-656-HOPE (4673)",
      description: "Connects callers to local sexual assault service providers with trained staff members.",
      icon: <Phone className="w-6 h-6" />,
      color: "bg-indigo-100 text-indigo-600",
      website: "https://www.rainn.org/",
      primary: false
    },
    {
      title: "StopBullying.gov",
      description: "Information and resources on bullying prevention and response.",
      icon: <Globe className="w-6 h-6" />,
      color: "bg-amber-100 text-amber-600",
      website: "https://www.stopbullying.gov/",
      primary: false
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        {/* Header */}
        <section className="bg-gradient-to-b from-guardian-green-light/70 to-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-guardian-green-light text-guardian-green text-sm font-medium mb-4 animate-fade-in">
              Get Help Now
            </span>
            <h1 className="text-4xl md:text-5xl font-semibold text-guardian-text-primary mb-6 animate-fade-in animation-delay-100">
              Emergency Resources
            </h1>
            <div className="separator bg-guardian-green animate-fade-in animation-delay-200"></div>
            <p className="text-lg text-guardian-text-secondary max-w-2xl mx-auto animate-fade-in animation-delay-300">
              These resources are available 24/7 to provide immediate assistance. Don't hesitate to reach out if you're in danger or need support.
            </p>
          </div>
        </section>

        {/* Important Note */}
        <div className="py-8 px-6 bg-guardian-blue-light/40 border-y border-guardian-blue/10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start bg-white rounded-xl p-6 shadow-sm">
              <Heart className="w-6 h-6 text-guardian-blue mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-medium text-guardian-text-primary mb-2">Remember</h3>
                <p className="text-guardian-text-secondary">
                  If you're in immediate danger, always call <strong>911</strong> first. The resources on this page are here to help in various situations. You are not alone, and there are people who care and want to help.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Primary Emergency Contacts */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-guardian-text-primary mb-8">
              Primary Emergency Contacts
            </h2>
            <div className="space-y-6 mb-16 animate-slide-up">
              {emergencyContacts.filter(contact => contact.primary).map((contact, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-xl p-6 border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md group`}
                >
                  <div className="flex items-start md:items-center flex-col md:flex-row">
                    <div className={`${contact.color} p-4 rounded-full mr-6 mb-4 md:mb-0`}>
                      {contact.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-medium text-guardian-text-primary mb-1">
                        {contact.title}
                      </h3>
                      <p className="text-guardian-text-secondary mb-2">
                        {contact.description}
                      </p>
                      {contact.website && (
                        <a 
                          href={contact.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm text-guardian-blue hover:underline"
                        >
                          <Globe size={14} className="mr-1" />
                          {contact.website.replace(/(^\w+:|^)\/\//, '')}
                        </a>
                      )}
                    </div>
                    {contact.number && (
                      <div className="mt-4 md:mt-0 bg-guardian-blue-light/50 px-4 py-3 rounded-lg transition-all duration-300 group-hover:bg-guardian-blue-light">
                        <div className="font-bold text-guardian-blue text-lg">{contact.number}</div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Resources */}
            <h2 className="text-2xl font-semibold text-guardian-text-primary mb-8">
              Additional Support Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-6 animate-slide-up animation-delay-300">
              {emergencyContacts.filter(contact => !contact.primary).map((contact, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md"
                >
                  <div className="flex items-start">
                    <div className={`${contact.color} p-3 rounded-full mr-4`}>
                      {contact.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-guardian-text-primary mb-1">
                        {contact.title}
                      </h3>
                      <p className="text-guardian-text-secondary text-sm mb-2">
                        {contact.description}
                      </p>
                      {contact.number && (
                        <div className="font-bold text-guardian-text-primary">
                          {contact.number}
                        </div>
                      )}
                      {contact.website && (
                        <a 
                          href={contact.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm text-guardian-blue hover:underline mt-1"
                        >
                          <Globe size={14} className="mr-1" />
                          Visit Website
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Local Resources Information */}
        <section className="py-12 px-6 bg-guardian-neutral">
          <div className="max-w-4xl mx-auto text-center">
            <MapPin className="w-10 h-10 text-guardian-green mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-guardian-text-primary mb-4">
              Finding Local Resources
            </h2>
            <p className="text-guardian-text-secondary max-w-2xl mx-auto mb-8">
              In addition to national hotlines, there are many local resources that can provide in-person support. These may include school counselors, community centers, local shelters, and health clinics.
            </p>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-left">
              <h3 className="font-medium text-guardian-text-primary mb-3">How to find local resources:</h3>
              <ul className="space-y-2 text-guardian-text-secondary">
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-guardian-green mt-2 mr-2"></span>
                  <span>Speak with a school counselor or trusted teacher</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-guardian-green mt-2 mr-2"></span>
                  <span>Call 211 (available in most areas) to connect with local services</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-guardian-green mt-2 mr-2"></span>
                  <span>Visit your local community center or library for information</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-guardian-green mt-2 mr-2"></span>
                  <span>Search online for "[your city/county] + youth services" or "child and family services"</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Emergency;
