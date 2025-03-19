
import { useState } from 'react';
import { Smile, Meh, Frown, Heart, HeartCrack } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useMoodStore } from '@/hooks/useMoodStore';

const moods = [
  { value: 'great', label: 'Great', icon: <Smile className="h-6 w-6" fill="#7DD3AD" /> },
  { value: 'good', label: 'Good', icon: <Smile className="h-6 w-6" /> },
  { value: 'neutral', label: 'Neutral', icon: <Meh className="h-6 w-6" /> },
  { value: 'bad', label: 'Bad', icon: <Frown className="h-6 w-6" /> },
  { value: 'terrible', label: 'Terrible', icon: <Frown className="h-6 w-6" fill="#f87171" /> }
];

const factors = [
  { id: 'sleep', label: 'Sleep' },
  { id: 'exercise', label: 'Exercise' },
  { id: 'social', label: 'Social Interaction' },
  { id: 'work', label: 'Work/School' },
  { id: 'stress', label: 'Stress' },
  { id: 'health', label: 'Health' }
];

const MoodEntryForm = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [selectedFactors, setSelectedFactors] = useState<string[]>([]);
  const [notes, setNotes] = useState('');
  const { toast } = useToast();
  const { addMoodEntry } = useMoodStore();
  
  const handleFactorToggle = (factorId: string) => {
    if (selectedFactors.includes(factorId)) {
      setSelectedFactors(selectedFactors.filter(id => id !== factorId));
    } else {
      setSelectedFactors([...selectedFactors, factorId]);
    }
  };
  
  const handleSubmit = () => {
    if (!selectedMood) {
      toast({
        title: "Please select a mood",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }
    
    // Create the mood entry
    const newEntry = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      mood: selectedMood,
      factors: selectedFactors,
      notes: notes,
    };
    
    // Save the mood entry
    addMoodEntry(newEntry);
    
    // Reset form
    setSelectedMood(null);
    setSelectedFactors([]);
    setNotes('');
    
    // Show success message
    toast({
      title: "Mood tracked",
      description: "Your entry has been saved",
      duration: 3000,
    });
  };
  
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h3 className="text-lg font-medium text-guardian-text-primary mb-4">How are you feeling?</h3>
        <div className="flex justify-center space-x-4 mb-6">
          {moods.map((mood) => (
            <button
              key={mood.value}
              onClick={() => setSelectedMood(mood.value)}
              className={`p-4 rounded-full transition-all ${
                selectedMood === mood.value 
                  ? 'bg-guardian-blue-light scale-110' 
                  : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
              aria-label={`Feeling ${mood.label}`}
            >
              {mood.icon}
              <span className="block text-xs mt-1">{mood.label}</span>
            </button>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-medium text-guardian-text-primary mb-4">What factors are affecting you?</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {factors.map((factor) => (
            <button
              key={factor.id}
              onClick={() => handleFactorToggle(factor.id)}
              className={`py-2 px-4 rounded-md text-sm transition-colors ${
                selectedFactors.includes(factor.id)
                  ? 'bg-guardian-blue text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-guardian-text-secondary hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {factor.label}
            </button>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-medium text-guardian-text-primary mb-4">Notes (optional)</h3>
        <Textarea 
          placeholder="Add any thoughts or details about how you're feeling..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="min-h-[100px]"
        />
      </div>
      
      <Button 
        onClick={handleSubmit}
        className="w-full"
      >
        Save Entry
      </Button>
    </div>
  );
};

export default MoodEntryForm;
