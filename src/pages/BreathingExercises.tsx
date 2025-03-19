
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BreathingAnimation from '@/components/BreathingExercises/BreathingAnimation';
import BreathingControls from '@/components/BreathingExercises/BreathingControls';
import { BreathingTechnique } from '@/types/breathing';

const techniques: BreathingTechnique[] = [
  {
    id: 'box',
    name: 'Box Breathing',
    description: 'Inhale, hold, exhale, and hold again for equal counts. Promotes relaxation and focus.',
    steps: [
      { phase: 'inhale', duration: 4, instruction: 'Breathe in slowly' },
      { phase: 'hold', duration: 4, instruction: 'Hold your breath' },
      { phase: 'exhale', duration: 4, instruction: 'Breathe out slowly' },
      { phase: 'hold', duration: 4, instruction: 'Hold your breath' }
    ],
    benefits: 'Reduces stress and improves concentration'
  },
  {
    id: '478',
    name: '4-7-8 Breathing',
    description: 'Inhale for 4, hold for 7, exhale for 8. Helps reduce anxiety and promote sleep.',
    steps: [
      { phase: 'inhale', duration: 4, instruction: 'Breathe in through your nose' },
      { phase: 'hold', duration: 7, instruction: 'Hold your breath' },
      { phase: 'exhale', duration: 8, instruction: 'Exhale completely through your mouth' }
    ],
    benefits: 'Reduces anxiety and helps with sleep'
  },
  {
    id: 'calm',
    name: 'Calming Breath',
    description: 'Long inhale followed by a longer exhale. Helps activate the parasympathetic nervous system.',
    steps: [
      { phase: 'inhale', duration: 4, instruction: 'Inhale deeply' },
      { phase: 'exhale', duration: 6, instruction: 'Exhale slowly and completely' }
    ],
    benefits: 'Reduces heart rate and blood pressure'
  }
];

const BreathingExercises = () => {
  const [selectedTechnique, setSelectedTechnique] = useState<BreathingTechnique>(techniques[0]);
  const [isExercising, setIsExercising] = useState(false);
  const [cycles, setCycles] = useState(3);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-guardian-text-primary">Breathing Exercises</h1>
            <p className="text-guardian-text-secondary mt-2">
              Guided breathing techniques to help reduce stress and anxiety
            </p>
            <div className="separator"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1 space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold text-guardian-text-primary mb-4">
                  Choose a Technique
                </h2>
                
                <div className="space-y-2">
                  {techniques.map((technique) => (
                    <button
                      key={technique.id}
                      onClick={() => setSelectedTechnique(technique)}
                      className={`w-full text-left p-3 rounded-md transition-colors ${
                        selectedTechnique.id === technique.id
                          ? 'bg-guardian-blue-light text-guardian-text-primary'
                          : 'text-guardian-text-secondary hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      <div className="font-medium">{technique.name}</div>
                      <div className="text-xs mt-1">{technique.benefits}</div>
                    </button>
                  ))}
                </div>
              </div>
              
              <BreathingControls 
                isExercising={isExercising}
                setIsExercising={setIsExercising}
                cycles={cycles}
                setCycles={setCycles}
              />
            </div>
            
            <div className="md:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 h-full flex flex-col">
                <h2 className="text-xl font-semibold text-guardian-text-primary mb-2">
                  {selectedTechnique.name}
                </h2>
                <p className="text-guardian-text-secondary text-sm mb-6">
                  {selectedTechnique.description}
                </p>
                
                <div className="flex-1 flex items-center justify-center">
                  <BreathingAnimation 
                    technique={selectedTechnique}
                    isActive={isExercising}
                    cycles={cycles}
                    onComplete={() => setIsExercising(false)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BreathingExercises;
