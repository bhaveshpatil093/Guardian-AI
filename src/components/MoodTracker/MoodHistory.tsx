
import { useState } from 'react';
import { format } from 'date-fns';
import { Smile, Meh, Frown, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useMoodStore } from '@/hooks/useMoodStore';
import { useToast } from '@/hooks/use-toast';

const MoodHistory = () => {
  const { moodEntries, deleteMoodEntry } = useMoodStore();
  const { toast } = useToast();
  const [selectedPeriod, setSelectedPeriod] = useState<'all' | 'week' | 'month'>('week');
  
  // Filter entries based on selected period
  const filteredEntries = () => {
    switch(selectedPeriod) {
      case 'week':
        const weekAgo = new Date();
        weekAgo.setDate(weekAgo.getDate() - 7);
        return moodEntries.filter(entry => new Date(entry.timestamp) >= weekAgo);
      case 'month':
        const monthAgo = new Date();
        monthAgo.setMonth(monthAgo.getMonth() - 1);
        return moodEntries.filter(entry => new Date(entry.timestamp) >= monthAgo);
      case 'all':
      default:
        return moodEntries;
    }
  };
  
  const getMoodIcon = (mood: string) => {
    switch(mood) {
      case 'great':
        return <Smile className="h-5 w-5" fill="#7DD3AD" />;
      case 'good':
        return <Smile className="h-5 w-5" />;
      case 'neutral':
        return <Meh className="h-5 w-5" />;
      case 'bad':
        return <Frown className="h-5 w-5" />;
      case 'terrible':
        return <Frown className="h-5 w-5" fill="#f87171" />;
      default:
        return <Meh className="h-5 w-5" />;
    }
  };
  
  const handleDelete = (id: string) => {
    deleteMoodEntry(id);
    toast({
      title: "Entry deleted",
      description: "Your mood entry has been removed",
      duration: 3000,
    });
  };
  
  const entries = filteredEntries();
  
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-center space-x-2 mb-6">
        <Button 
          variant={selectedPeriod === 'week' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setSelectedPeriod('week')}
        >
          Last Week
        </Button>
        <Button 
          variant={selectedPeriod === 'month' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setSelectedPeriod('month')}
        >
          Last Month
        </Button>
        <Button 
          variant={selectedPeriod === 'all' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setSelectedPeriod('all')}
        >
          All Time
        </Button>
      </div>
      
      {entries.length === 0 ? (
        <div className="text-center py-8 text-guardian-text-secondary">
          No mood entries found for this period.
        </div>
      ) : (
        <div className="space-y-4">
          {entries.map(entry => (
            <div key={entry.id} className="p-4 rounded-lg border bg-white dark:bg-gray-800">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full">
                    {getMoodIcon(entry.mood)}
                  </div>
                  <div>
                    <h4 className="font-medium text-guardian-text-primary capitalize">
                      {entry.mood}
                    </h4>
                    <p className="text-xs text-guardian-text-secondary">
                      {format(new Date(entry.timestamp), 'PPP p')}
                    </p>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => handleDelete(entry.id)}
                  className="text-red-500"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              
              {entry.factors.length > 0 && (
                <div className="mt-3">
                  <p className="text-xs text-guardian-text-secondary mb-1">Factors:</p>
                  <div className="flex flex-wrap gap-1">
                    {entry.factors.map(factor => (
                      <span 
                        key={factor} 
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs"
                      >
                        {factor}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {entry.notes && (
                <div className="mt-3">
                  <p className="text-xs text-guardian-text-secondary mb-1">Notes:</p>
                  <p className="text-sm text-guardian-text-primary bg-gray-50 dark:bg-gray-750 p-2 rounded">
                    {entry.notes}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MoodHistory;
