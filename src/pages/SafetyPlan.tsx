
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { usePrivacyMode } from '@/context/PrivacyModeContext';

interface SafetyPlanSection {
  id: string;
  title: string;
  description: string;
  prompts: string[];
  content: string;
}

const defaultSections: SafetyPlanSection[] = [
  {
    id: 'warning-signs',
    title: 'Warning Signs',
    description: 'List the thoughts, feelings, or behaviors that might indicate a crisis is developing',
    prompts: [
      'What thoughts do you experience when you start to feel unsafe?',
      'What emotions signal that you might need help?',
      'How does your behavior change when you\'re struggling?'
    ],
    content: '',
  },
  {
    id: 'coping-strategies',
    title: 'Coping Strategies',
    description: 'Activities you can do on your own to help yourself feel better',
    prompts: [
      'What healthy activities help distract you from difficult feelings?',
      'What calming techniques work for you?',
      'What self-care practices do you find most helpful?'
    ],
    content: '',
  },
  {
    id: 'social-contacts',
    title: 'Social Contacts',
    description: 'People who can provide support and distraction during difficult times',
    prompts: [
      'Which friends or family members can you reach out to when you need support?',
      'Who helps you feel safe and calm?',
      'Consider listing names and contact information'
    ],
    content: '',
  },
  {
    id: 'professional-help',
    title: 'Professional Help',
    description: 'Mental health professionals and organizations you can contact',
    prompts: [
      'List your therapist, counselor, or doctor contact information',
      'Include any mental health hotlines you might call',
      'Add local crisis centers or emergency departments'
    ],
    content: '',
  },
  {
    id: 'environment-safety',
    title: 'Environment Safety',
    description: 'Steps to make your environment safer during a crisis',
    prompts: [
      'What items should be removed or secured?',
      'Who can help you create a safer environment?',
      'What places feel safest to you?'
    ],
    content: '',
  },
];

const SafetyPlan = () => {
  const [planName, setPlanName] = useState('My Safety Plan');
  const [sections, setSections] = useState<SafetyPlanSection[]>(defaultSections);
  const [activeSectionId, setActiveSectionId] = useState<string>(sections[0].id);
  const { toast } = useToast();
  const { privacyMode } = usePrivacyMode();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Load saved plan from localStorage
    const savedPlan = localStorage.getItem('safetyPlan');
    if (savedPlan) {
      try {
        const { name, sections: savedSections } = JSON.parse(savedPlan);
        setPlanName(name);
        
        // Merge saved content with default sections (in case new sections were added)
        const mergedSections = defaultSections.map(defaultSection => {
          const savedSection = savedSections.find((s: SafetyPlanSection) => s.id === defaultSection.id);
          return savedSection ? { ...defaultSection, content: savedSection.content } : defaultSection;
        });
        
        setSections(mergedSections);
      } catch (e) {
        console.error('Failed to parse saved safety plan:', e);
      }
    }
  }, []);
  
  const savePlan = () => {
    const plan = {
      name: planName,
      sections,
      updatedAt: new Date().toISOString()
    };
    
    localStorage.setItem('safetyPlan', JSON.stringify(plan));
    
    toast({
      title: "Safety Plan Saved",
      description: "Your safety plan has been saved successfully.",
      duration: 3000,
    });
  };
  
  const resetPlan = () => {
    setPlanName('My Safety Plan');
    setSections(defaultSections);
    localStorage.removeItem('safetyPlan');
    
    toast({
      title: "Safety Plan Reset",
      description: "Your safety plan has been reset to default.",
      duration: 3000,
    });
  };
  
  const updateSectionContent = (id: string, content: string) => {
    setSections(sections.map(section => 
      section.id === id ? { ...section, content } : section
    ));
  };
  
  const activeSection = sections.find(section => section.id === activeSectionId) || sections[0];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className={`flex-1 container mx-auto px-4 py-8 ${privacyMode ? 'privacy-blur' : ''} privacy-sensitive`}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-guardian-text-primary">Safety Plan</h1>
            <p className="text-guardian-text-secondary mt-2">
              Create a personalized plan to help you stay safe during difficult times
            </p>
            <div className="separator"></div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
            <div className="p-6 border-b">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-guardian-text-secondary mb-1">
                    Plan Name
                  </label>
                  <Input
                    value={planName}
                    onChange={(e) => setPlanName(e.target.value)}
                    className="font-medium text-guardian-text-primary"
                  />
                </div>
                <div className="flex gap-2">
                  <Button onClick={savePlan}>
                    Save Plan
                  </Button>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="outline">Reset</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This will reset all sections of your safety plan to their default state. This action cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={resetPlan}>Reset Plan</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              <div className="bg-gray-50 dark:bg-gray-900 p-4">
                <h3 className="font-medium text-guardian-text-primary mb-4">Plan Sections</h3>
                <div className="space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSectionId(section.id)}
                      className={`w-full text-left p-3 rounded-md transition-colors ${
                        activeSectionId === section.id
                          ? 'bg-guardian-blue-light text-guardian-text-primary'
                          : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-guardian-text-secondary'
                      }`}
                    >
                      {section.title}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="p-6 md:col-span-2">
                <h2 className="text-xl font-semibold text-guardian-text-primary mb-2">
                  {activeSection.title}
                </h2>
                <p className="text-guardian-text-secondary mb-6">
                  {activeSection.description}
                </p>
                
                <div className="mb-4 bg-guardian-blue-light/30 p-4 rounded-md">
                  <h4 className="font-medium text-guardian-text-primary mb-2">Prompts:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-guardian-text-secondary">
                    {activeSection.prompts.map((prompt, i) => (
                      <li key={i}>{prompt}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <label 
                    htmlFor={activeSection.id}
                    className="block text-sm font-medium text-guardian-text-secondary mb-2"
                  >
                    Your Response
                  </label>
                  <Textarea
                    id={activeSection.id}
                    value={activeSection.content}
                    onChange={(e) => updateSectionContent(activeSection.id, e.target.value)}
                    placeholder={`Enter information for ${activeSection.title.toLowerCase()}...`}
                    className="min-h-[200px]"
                  />
                </div>
              </div>
            </div>
            
            <div className="p-6 border-t bg-gray-50 dark:bg-gray-900">
              <div className="flex justify-between items-center">
                <p className="text-sm text-guardian-text-secondary">
                  Your plan is saved locally on your device.
                </p>
                <Button onClick={savePlan}>
                  Save Plan
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SafetyPlan;
