
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BookOpen, Users, FileText, MessageSquare, ShieldAlert, Activity, PhoneCall, Globe, Shield, Brain, Heart, AlertTriangle, Smile, HandHelping } from 'lucide-react';

const Resources = () => {
  const location = useLocation();
  const recognizingRef = useRef<HTMLDivElement>(null);
  const networksRef = useRef<HTMLDivElement>(null);
  const safetyRef = useRef<HTMLDivElement>(null);
  const helplinesRef = useRef<HTMLDivElement>(null);
  const onlineRef = useRef<HTMLDivElement>(null);
  const legalRef = useRef<HTMLDivElement>(null);

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
        } else if (hash === 'helplines' && helplinesRef.current) {
          helplinesRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (hash === 'online' && onlineRef.current) {
          onlineRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (hash === 'legal' && legalRef.current) {
          legalRef.current.scrollIntoView({ behavior: 'smooth' });
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
        },
        {
          title: "Neglect",
          description: "Neglect is the failure to provide for a child's basic needs, including food, clothing, shelter, medical care, education, supervision, and emotional nurturing.",
          signs: [
            "Consistently dirty or inappropriate clothing",
            "Frequent absences from school",
            "Lack of medical or dental care when needed",
            "Being frequently unsupervised or left alone"
          ]
        },
        {
          title: "Sexual Abuse",
          description: "Sexual abuse includes any sexual activity imposed on a child, including touching and non-touching offenses.",
          signs: [
            "Knowledge of sexual acts inappropriate for their age",
            "Avoiding certain people or places without explanation",
            "Sudden changes in behavior or personality",
            "Sexual behavior or language that is not age-appropriate"
          ]
        },
        {
          title: "Digital/Online Abuse",
          description: "Online abuse includes cyberbullying, sending threatening messages, sharing private information or images without consent, and other harmful online behaviors.",
          signs: [
            "Sudden disinterest in devices or social media",
            "Becoming anxious when receiving notifications",
            "Deleting social media accounts or changing privacy settings",
            "Withdrawing from online friends and activities"
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
        },
        {
          title: "Building Your Support Network",
          description: "Steps to create and maintain a strong support network.",
          points: [
            "Identify people you trust and feel comfortable talking to",
            "Practice asking for help with small issues before bigger ones",
            "Maintain regular contact with supportive people in your life",
            "Be open about your feelings and needs when appropriate"
          ]
        },
        {
          title: "Support Groups",
          description: "Joining a support group can connect you with others who have similar experiences.",
          points: [
            "School-based support groups",
            "Community center programs",
            "Hospital or therapy-led groups",
            "Online forums and virtual support communities"
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
        },
        {
          title: "School Safety Planning",
          description: "Specific strategies for staying safe at school if you're experiencing bullying or harassment.",
          steps: [
            "Identify trusted teachers or staff you can go to for help",
            "Stay in groups when possible to avoid isolation",
            "Know the locations of safe spaces like counseling offices",
            "Document incidents of bullying or harassment",
            "Report serious threats to school officials immediately"
          ]
        },
        {
          title: "Emotional Safety Planning",
          description: "Strategies to protect your emotional wellbeing during difficult situations.",
          tips: [
            "Develop healthy coping mechanisms like journaling or exercise",
            "Practice self-care routines that help you feel calm and centered",
            "Identify triggering situations and plan responses in advance",
            "Create a list of positive affirmations or supportive messages",
            "Know when and how to disengage from harmful interactions"
          ]
        }
      ]
    },
    {
      id: 'helplines',
      ref: helplinesRef,
      title: "Helplines & Contacts",
      icon: <PhoneCall className="w-8 h-8 text-guardian-blue" />,
      description: "A comprehensive directory of national and local helplines and support services for various situations.",
      content: [
        {
          title: "Crisis Hotlines",
          description: "24/7 hotlines for immediate support during crises.",
          points: [
            "National Suicide Prevention Lifeline: 988 or 1-800-273-8255",
            "Crisis Text Line: Text HOME to 741741",
            "Childhelp National Child Abuse Hotline: 1-800-422-4453",
            "National Domestic Violence Hotline: 1-800-799-7233",
            "Trevor Project LGBTQ Youth: 1-866-488-7386"
          ]
        },
        {
          title: "Youth-Specific Resources",
          description: "Resources specifically designed for children and teens.",
          points: [
            "Boys Town National Hotline: 1-800-448-3000",
            "National Runaway Safeline: 1-800-786-2929",
            "TEEN LINE: 1-800-852-8336 or text TEEN to 839863",
            "Youth.gov: Resources for youth programs and services",
            "StopBullying.gov: Information and resources about bullying"
          ]
        },
        {
          title: "Mental Health Resources",
          description: "Support for mental health concerns including anxiety, depression, and trauma.",
          points: [
            "SAMHSA's National Helpline: 1-800-662-4357",
            "National Alliance on Mental Illness (NAMI) Helpline: 1-800-950-6264",
            "Association for Children's Mental Health",
            "Mental Health America",
            "Psychology Today's Therapist Directory"
          ]
        },
        {
          title: "Online Support Resources",
          description: "Websites and online platforms offering support and information.",
          points: [
            "7 Cups: Online therapy and free emotional support",
            "Talkspace: Online therapy platform",
            "Calm Harm App: Helps manage self-harm urges",
            "ReachOut Forums: Peer support community",
            "Teen Line Online: Message board and resources for teens"
          ]
        },
        {
          title: "School-Based Resources",
          description: "Support services available through educational institutions.",
          points: [
            "School counselors and psychologists",
            "School social workers",
            "Student assistance programs",
            "School-based health centers",
            "Peer support programs"
          ]
        }
      ]
    },
    {
      id: 'online',
      ref: onlineRef,
      title: "Online Safety",
      icon: <Globe className="w-8 h-8 text-guardian-blue" />,
      description: "Comprehensive guidance on staying safe in digital spaces and protecting your privacy online.",
      content: [
        {
          title: "Social Media Safety",
          description: "Best practices for using social media platforms safely.",
          tips: [
            "Keep profiles private and only accept friend requests from people you know",
            "Be cautious about sharing personal information like your location, school, or home address",
            "Think before posting: once something is online, it can be hard to completely remove",
            "Use strong passwords and enable two-factor authentication",
            "Regularly review and update privacy settings on all platforms"
          ]
        },
        {
          title: "Cyberbullying Response",
          description: "Steps to take if you experience harassment or bullying online.",
          steps: [
            "Don't respond to or engage with the bully",
            "Take screenshots as evidence of the bullying",
            "Block the person on the platform",
            "Report the behavior to the platform",
            "Talk to a trusted adult about what you're experiencing"
          ]
        },
        {
          title: "Digital Privacy Protection",
          description: "Ways to safeguard your personal information online.",
          tips: [
            "Use unique, strong passwords for each account",
            "Be wary of public Wi-Fi networks for sensitive activities",
            "Regularly check and adjust privacy settings on devices and apps",
            "Be cautious about apps that request excessive permissions",
            "Use secure messaging apps for private conversations"
          ]
        },
        {
          title: "Recognizing Online Predators",
          description: "Warning signs of potentially dangerous online relationships.",
          signs: [
            "Someone who quickly tries to establish a close relationship",
            "Asking to keep conversations secret",
            "Requesting personal information or photos",
            "Suggesting moving communication to private platforms",
            "Pressuring you to do things that make you uncomfortable"
          ]
        },
        {
          title: "Healthy Tech Habits",
          description: "Creating a balanced relationship with technology and social media.",
          tips: [
            "Set boundaries for screen time and digital-free zones",
            "Take regular breaks from social media",
            "Be mindful of how online content affects your mood and self-image",
            "Focus on meaningful connections rather than follower counts",
            "Use tools to monitor and manage your screen time"
          ]
        }
      ]
    },
    {
      id: 'legal',
      ref: legalRef,
      title: "Legal Information",
      icon: <Shield className="w-8 h-8 text-guardian-blue" />,
      description: "Age-appropriate information about legal rights and protections for minors facing abuse or bullying situations.",
      content: [
        {
          title: "Children's Rights",
          description: "Basic legal rights that all children have regardless of their circumstances.",
          points: [
            "Right to be protected from abuse and neglect",
            "Right to education",
            "Right to medical care",
            "Right to be heard in matters affecting them",
            "Right to privacy appropriate to their age"
          ]
        },
        {
          title: "Reporting Abuse",
          description: "The legal process of reporting child abuse or neglect.",
          steps: [
            "Anyone can report suspected child abuse to Child Protective Services",
            "Some professionals (teachers, doctors) are mandated reporters",
            "Reports can usually be made anonymously",
            "Providing specific details helps investigators respond appropriately",
            "False reporting is illegal, but good faith reports are protected"
          ]
        },
        {
          title: "School Bullying Laws",
          description: "Legal protections against bullying in educational settings.",
          points: [
            "All states have anti-bullying laws or policies",
            "Schools are required to have procedures for reporting bullying",
            "Some forms of bullying may be considered harassment under civil rights laws",
            "Schools must take action when bullying is reported",
            "Parents have rights to advocate for their children's safety at school"
          ]
        },
        {
          title: "Cyberbullying Laws",
          description: "Legal protections against online harassment and bullying.",
          points: [
            "Many states have specific laws addressing cyberbullying",
            "Severe cyberbullying can sometimes be prosecuted under criminal laws",
            "Schools may have authority to address cyberbullying even if it occurs off-campus",
            "Online platforms have policies against harassment and methods to report it",
            "Evidence of cyberbullying should be preserved through screenshots"
          ]
        },
        {
          title: "Emancipation & Legal Independence",
          description: "Information about when and how minors can legally make decisions for themselves.",
          points: [
            "Emancipation is a legal process that gives minors many adult rights before age 18",
            "Requirements for emancipation vary by state",
            "Some healthcare decisions can be made by minors without parental consent",
            "In emergency situations, minors may consent to certain services",
            "Legal aid organizations can provide guidance to minors about their rights"
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
