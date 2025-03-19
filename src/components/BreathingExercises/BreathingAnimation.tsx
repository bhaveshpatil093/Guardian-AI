
import { useState, useEffect, useRef } from 'react';
import { BreathingTechnique } from '@/types/breathing';

interface BreathingAnimationProps {
  technique: BreathingTechnique;
  isActive: boolean;
  cycles: number;
  onComplete: () => void;
}

const BreathingAnimation = ({ 
  technique, 
  isActive, 
  cycles,
  onComplete 
}: BreathingAnimationProps) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [currentCycle, setCurrentCycle] = useState(1);
  const [instruction, setInstruction] = useState('');
  const timerRef = useRef<number | null>(null);
  
  useEffect(() => {
    // Reset when technique changes
    setCurrentStepIndex(0);
    setTimeRemaining(0);
    setCurrentCycle(1);
    
    if (technique.steps.length > 0) {
      setInstruction(technique.steps[0].instruction);
    }
  }, [technique]);
  
  useEffect(() => {
    if (isActive) {
      // Start exercise
      setCurrentStepIndex(0);
      setCurrentCycle(1);
      if (technique.steps.length > 0) {
        setInstruction(technique.steps[0].instruction);
        setTimeRemaining(technique.steps[0].duration);
      }
    } else {
      // Stop exercise
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }
  }, [isActive, technique]);
  
  useEffect(() => {
    if (isActive) {
      timerRef.current = window.setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            // Move to next step
            const nextStepIndex = (currentStepIndex + 1) % technique.steps.length;
            setCurrentStepIndex(nextStepIndex);
            
            if (nextStepIndex === 0) {
              // Completed a cycle
              if (currentCycle >= cycles) {
                // Exercise complete
                clearInterval(timerRef.current!);
                onComplete();
                return 0;
              } else {
                setCurrentCycle(prev => prev + 1);
              }
            }
            
            // Set instruction and time for next step
            setInstruction(technique.steps[nextStepIndex].instruction);
            return technique.steps[nextStepIndex].duration;
          }
          return prev - 1;
        });
      }, 1000);
      
      return () => {
        if (timerRef.current) {
          clearInterval(timerRef.current);
        }
      };
    }
  }, [isActive, currentStepIndex, technique, currentCycle, cycles, onComplete]);
  
  const getAnimationClass = () => {
    if (!isActive) return 'bg-gray-200 dark:bg-gray-700';
    
    const phase = technique.steps[currentStepIndex].phase;
    
    switch (phase) {
      case 'inhale':
        return 'animate-[scale-in_4s_ease-in-out_infinite] bg-guardian-blue';
      case 'exhale':
        return 'animate-[scale-out_4s_ease-in-out_infinite] bg-guardian-green';
      case 'hold':
        return 'bg-guardian-blue-light';
      default:
        return 'bg-gray-200 dark:bg-gray-700';
    }
  };
  
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md">
      <div className="relative mb-8 w-full aspect-square flex items-center justify-center">
        <div className={`absolute w-4/5 h-4/5 rounded-full transition-all duration-1000 ${getAnimationClass()}`}>
        </div>
        {isActive && (
          <div className="relative z-10 text-center">
            <p className="text-4xl font-bold text-white">
              {timeRemaining}
            </p>
            <p className="text-lg text-white mt-2">
              {instruction}
            </p>
            <p className="text-sm text-white/70 mt-4">
              Cycle {currentCycle} of {cycles}
            </p>
          </div>
        )}
        {!isActive && (
          <div className="text-center text-guardian-text-secondary">
            Press start to begin
          </div>
        )}
      </div>
    </div>
  );
};

export default BreathingAnimation;
