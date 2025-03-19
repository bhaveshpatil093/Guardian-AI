
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BookOpen, Users, FileText, MessageSquare, ShieldAlert, Activity } from 'lucide-react';

const Resources = () => {
  const location = useLocation();
  const recognizingRef = useRef<HTMLDivElement>(null);
  const networksRef = useRef<HTMLDivElement>(null);
  const safetyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Check if there's a hash in the URL to scroll to a specific section
    if (location.hash) {
      setTimeout(() => {
        const hash = location.hash.substring(1);
        
        if (hash === 'recognizing' && recognizingRef.current) {
          recognizingRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (hash === 'networks' && networksRef.current) {
          networksRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (hash === 'safety' && safetyRef.current) {
          safetyRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  }, [location]);

  const resources = [
    {
      id: 'recognizing',
      ref: recognizingRef,
      title: "Recognizing Abuse",
      icon: <BookOpen className="w-8 h-8 text-guardian-blue" />,
      description: "Understanding the signs and types of abuse is the first step in getting help.",
      content: [
        {
          title: "Physical Abuse",
          description: "Physical abuse involves any intentional act causing injury or trauma through bodily contact. This can include hitting, slapping, pushing, burning, or any physical force that results in injury or pain.",
          signs: [
            "Unexplained bruises, burns, or injuries",
            "Injuries that don't match the explanation given",
            "Fear of going home or being with certain individuals",
            "Wearing long sleeves or other covering clothing in warm weather"
          ]
        },
        {
          title: "Emotional Abuse",
          description: "Emotional abuse involves behaviors that harm a child's self-worth or emotional well-being. This includes name-calling, shaming, rejection, withholding love, and threatening.",
          signs: [
            "Excessive fear, worry, or anxiety",
            "Sudden changes in behavior or school performance",
            "Lack of self-confidence or extreme passivity",
            "Seeking affection or approval excessively"
          ]
        },
        {
          title: "Bullying",
          description: "Bullying is unwanted, aggressive behavior that involves a real or perceived power imbalance. It includes threats, spreading rumors, physical or verbal attacks, and exclusion from groups.",
          signs: [
            "Unexplained loss of belongings or damaged items",
            "Reluctance to go to school or social events",
            "Frequent headaches, stomachaches, or faking illness",
            "Changes in eating habits or difficulty sleeping"
          ]
        }
      ]
    },
    {
      id: 'networks',
      ref: networksRef,
      title: "Support Networks",
      icon: <Users className="w-8 h-8 text-guardian-blue" />,
      description: "Building a strong support network is essential for anyone experiencing difficult situations.",
      content: [
        {
          title: "Trusted Adults",
          description: "Identifying trusted adults in your life is crucial for having someone to turn to when you need help.",
          points: [
            "Teachers, school counselors, or coaches",
            "Family members such as aunts, uncles, or grandparents",
            "Parents of close friends",
            "Religious leaders or youth group leaders"
          ]
        },
        {
          title: "Peer Support",
          description: "Friends and peers can provide emotional support and help you feel less alone.",
          points: [
            "Close friends who you trust and can confide in",
            "School peer support groups",
            "Youth organizations or clubs",
            "Online support communities (with appropriate safety precautions)"
          ]
        },
        {
          title: "Professional Resources",
          description: "Professional resources are available to provide specialized support and guidance.",
          points: [
            "School counselors or psychologists",
            "Community mental health centers",
            "Social services agencies",
            "Helplines and crisis text services"
          ]
        }
      ]
    },
    {
      id: 'safety',
      ref: safetyRef,
      title: "Safety Planning",
      icon: <FileText className="w-8 h-8 text-guardian-blue" />,
      description: "Creating a safety plan can help you prepare for difficult situations and know what to do if you feel unsafe.",
      content: [
        {
          title: "Creating a Safety Plan",
          description: "A safety plan is a personalized, practical plan that can help you avoid dangerous situations and know the best way to react when you're in danger.",
          steps: [
            "Identify safe places you can go if you feel threatened",
            "Keep important phone numbers easily accessible",
            "Have a code word with trusted friends or family members",
            "Plan escape routes from potentially dangerous situations",
            "Identify public places where you can seek help"
          ]
        },
        {
          title: "Digital Safety",
          description: "Protecting yourself online is an important part of overall safety.",
          tips: [
            "Use strong, unique passwords for all accounts",
            "Be careful about what personal information you share online",
            "Know how to block people who are harassing you",
            "Be aware of location sharing settings on apps",
            "Learn how to clear your browsing history if needed"
          ]
        },
        {
          title: "When to Seek Immediate Help",
          description: "Recognizing when a situation requires immediate intervention is crucial for your safety.",
          situations: [
            "If you're in immediate danger (call 911)",
            "If you have thoughts of harming yourself",
            "If someone is threatening to harm you",
            "If you witness someone else being abused",
            "If you have no safe place to go"
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        {/* Header */}
        <section className="bg-gradient-to-b from-guardian-blue-light/50 to-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-guardian-blue-light text-guardian-blue text-sm font-medium mb-4 animate-fade-in">
              Knowledge & Understanding
            </span>
            <h1 className="text-4xl md:text-5xl font-semibold text-guardian-text-primary mb-6 animate-fade-in animation-delay-100">
              Resources & Guidance
            </h1>
            <div className="separator animate-fade-in animation-delay-200"></div>
            <p className="text-lg text-guardian-text-secondary max-w-2xl mx-auto animate-fade-in animation-delay-300">
              This page provides information on recognizing difficult situations, building support networks, and creating safety plans. Knowledge is the first step toward safety.
            </p>
          </div>
        </section>

        {/* Resource Navigation */}
        <section className="py-10 px-6 bg-white border-y border-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {resources.map((resource) => (
                <a 
                  key={resource.id} 
                  href={`#${resource.id}`}
                  className="flex items-center px-4 py-2 rounded-full bg-guardian-blue-light/50 text-guardian-blue hover:bg-guardian-blue-light transition-all duration-300"
                >
                  {resource.icon}
                  <span className="ml-2 font-medium">{resource.title}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Resource Sections */}
        <div className="py-12 px-6">
          <div className="max-w-4xl mx-auto space-y-24">
            {resources.map((resource, index) => (
              <section 
                key={resource.id} 
                id={resource.id} 
                ref={resource.ref}
                className="scroll-mt-32"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-guardian-blue-light rounded-xl">
                    {resource.icon}
                  </div>
                  <h2 className="text-3xl font-semibold text-guardian-text-primary ml-4">
                    {resource.title}
                  </h2>
                </div>
                <p className="text-lg text-guardian-text-secondary mb-10">
                  {resource.description}
                </p>

                <div className="space-y-12">
                  {resource.content.map((item, idx) => (
                    <div key={idx} className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
                      <h3 className="text-xl font-medium text-guardian-text-primary mb-4">
                        {item.title}
                      </h3>
                      <p className="text-guardian-text-secondary mb-6">
                        {item.description}
                      </p>

                      {/* Render different content based on what's available */}
                      {item.signs && (
                        <div className="bg-guardian-blue-light/30 rounded-xl p-6">
                          <div className="flex items-center mb-4">
                            <ShieldAlert className="w-5 h-5 text-guardian-blue mr-2" />
                            <h4 className="font-medium text-guardian-blue">Warning Signs</h4>
                          </div>
                          <ul className="space-y-2">
                            {item.signs.map((sign, i) => (
                              <li key={i} className="flex items-start">
                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-guardian-blue mt-2 mr-2"></span>
                                <span className="text-guardian-text-secondary">{sign}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {item.points && (
                        <div className="bg-guardian-blue-light/30 rounded-xl p-6">
                          <div className="flex items-center mb-4">
                            <Users className="w-5 h-5 text-guardian-blue mr-2" />
                            <h4 className="font-medium text-guardian-blue">Key Resources</h4>
                          </div>
                          <ul className="space-y-2">
                            {item.points.map((point, i) => (
                              <li key={i} className="flex items-start">
                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-guardian-blue mt-2 mr-2"></span>
                                <span className="text-guardian-text-secondary">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {item.steps && (
                        <div className="bg-guardian-blue-light/30 rounded-xl p-6">
                          <div className="flex items-center mb-4">
                            <FileText className="w-5 h-5 text-guardian-blue mr-2" />
                            <h4 className="font-medium text-guardian-blue">Important Steps</h4>
                          </div>
                          <ul className="space-y-2">
                            {item.steps.map((step, i) => (
                              <li key={i} className="flex items-start">
                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-guardian-blue mt-2 mr-2"></span>
                                <span className="text-guardian-text-secondary">{step}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {item.tips && (
                        <div className="bg-guardian-blue-light/30 rounded-xl p-6">
                          <div className="flex items-center mb-4">
                            <MessageSquare className="w-5 h-5 text-guardian-blue mr-2" />
                            <h4 className="font-medium text-guardian-blue">Helpful Tips</h4>
                          </div>
                          <ul className="space-y-2">
                            {item.tips.map((tip, i) => (
                              <li key={i} className="flex items-start">
                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-guardian-blue mt-2 mr-2"></span>
                                <span className="text-guardian-text-secondary">{tip}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {item.situations && (
                        <div className="bg-guardian-blue-light/30 rounded-xl p-6">
                          <div className="flex items-center mb-4">
                            <Activity className="w-5 h-5 text-guardian-blue mr-2" />
                            <h4 className="font-medium text-guardian-blue">Critical Situations</h4>
                          </div>
                          <ul className="space-y-2">
                            {item.situations.map((situation, i) => (
                              <li key={i} className="flex items-start">
                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-guardian-blue mt-2 mr-2"></span>
                                <span className="text-guardian-text-secondary">{situation}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
