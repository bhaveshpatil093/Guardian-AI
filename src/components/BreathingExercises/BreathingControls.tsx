
import { Button } from '@/components/ui/button';
import { MinusIcon, PlusIcon, Play, Square } from 'lucide-react';

interface BreathingControlsProps {
  isExercising: boolean;
  setIsExercising: (value: boolean) => void;
  cycles: number;
  setCycles: (value: number) => void;
}

const BreathingControls = ({ 
  isExercising,
  setIsExercising,
  cycles,
  setCycles
}: BreathingControlsProps) => {
  
  const handleCycleChange = (increment: boolean) => {
    if (increment && cycles < 10) {
      setCycles(cycles + 1);
    } else if (!increment && cycles > 1) {
      setCycles(cycles - 1);
    }
  };
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-guardian-text-primary mb-4">
        Exercise Settings
      </h2>
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-guardian-text-secondary mb-2">
          Number of cycles
        </label>
        <div className="flex items-center">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleCycleChange(false)}
            disabled={cycles <= 1 || isExercising}
            className="rounded-full w-8 h-8 p-0"
          >
            <MinusIcon className="h-4 w-4" />
          </Button>
          <span className="mx-4 text-guardian-text-primary font-medium w-4 text-center">
            {cycles}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleCycleChange(true)}
            disabled={cycles >= 10 || isExercising}
            className="rounded-full w-8 h-8 p-0"
          >
            <PlusIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <Button
        onClick={() => setIsExercising(!isExercising)}
        className="w-full"
        variant={isExercising ? "outline" : "default"}
      >
        {isExercising ? (
          <>
            <Square className="mr-2 h-4 w-4" />
            Stop Exercise
          </>
        ) : (
          <>
            <Play className="mr-2 h-4 w-4" />
            Start Exercise
          </>
        )}
      </Button>
      
      <div className="mt-4 text-xs text-guardian-text-secondary">
        <p className="mb-2">Tips:</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>Find a comfortable, quiet position</li>
          <li>Focus on your breathing, not your thoughts</li>
          <li>Breathe through your nose when possible</li>
          <li>Practice daily for maximum benefit</li>
        </ul>
      </div>
    </div>
  );
};

export default BreathingControls;
