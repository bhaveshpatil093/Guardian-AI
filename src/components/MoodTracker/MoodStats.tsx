
import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell } from 'recharts';
import { useMoodStore } from '@/hooks/useMoodStore';

const MoodStats = () => {
  const { moodEntries, getMoodDistribution } = useMoodStore();
  const [chartData, setChartData] = useState<any[]>([]);
  
  useEffect(() => {
    const distribution = getMoodDistribution();
    
    const data = [
      { name: 'Great', value: distribution.great, color: '#7DD3AD' },
      { name: 'Good', value: distribution.good, color: '#6AAFDF' },
      { name: 'Neutral', value: distribution.neutral, color: '#BBBBBB' },
      { name: 'Bad', value: distribution.bad, color: '#FFB067' },
      { name: 'Terrible', value: distribution.terrible, color: '#f87171' }
    ];
    
    setChartData(data);
  }, [moodEntries, getMoodDistribution]);
  
  const totalEntries = moodEntries.length;
  
  // Count consecutive days with entries
  const calculateStreak = () => {
    if (!moodEntries.length) return 0;
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    let streakCount = 0;
    let currentDate = new Date(today);
    
    while (true) {
      // Check if there's an entry for this date
      const hasEntry = moodEntries.some(entry => {
        const entryDate = new Date(entry.timestamp);
        entryDate.setHours(0, 0, 0, 0);
        return entryDate.getTime() === currentDate.getTime();
      });
      
      if (hasEntry) {
        streakCount++;
        // Move to previous day
        currentDate.setDate(currentDate.getDate() - 1);
      } else {
        break;
      }
    }
    
    return streakCount;
  };
  
  const streak = calculateStreak();
  
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-lg bg-white dark:bg-gray-800 border text-center">
          <p className="text-guardian-text-secondary text-sm">Total Entries</p>
          <p className="text-3xl font-bold text-guardian-text-primary mt-2">{totalEntries}</p>
        </div>
        
        <div className="p-4 rounded-lg bg-white dark:bg-gray-800 border text-center">
          <p className="text-guardian-text-secondary text-sm">Current Streak</p>
          <p className="text-3xl font-bold text-guardian-text-primary mt-2">{streak} day{streak !== 1 ? 's' : ''}</p>
        </div>
        
        <div className="p-4 rounded-lg bg-white dark:bg-gray-800 border text-center">
          <p className="text-guardian-text-secondary text-sm">Most Common Mood</p>
          <p className="text-3xl font-bold text-guardian-text-primary mt-2 capitalize">
            {chartData.length > 0 
              ? chartData.reduce((prev, current) => (prev.value > current.value) ? prev : current).name 
              : 'None'}
          </p>
        </div>
      </div>
      
      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border">
        <h3 className="text-lg font-medium text-guardian-text-primary mb-4">Mood Distribution</h3>
        
        {totalEntries === 0 ? (
          <div className="text-center py-12 text-guardian-text-secondary">
            No data available yet. Start tracking your mood to see insights.
          </div>
        ) : (
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip 
                  formatter={(value) => [`${value} entries`, 'Count']}
                  labelStyle={{ color: '#2C3E50' }}
                />
                <Bar dataKey="value" name="Entries">
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
      
      <div className="text-sm text-guardian-text-secondary p-4 bg-guardian-blue-light/30 rounded-lg">
        <p>
          <span className="font-medium">Tip:</span> Consistent mood tracking can help you identify patterns and triggers that affect your emotional wellbeing.
        </p>
      </div>
    </div>
  );
};

export default MoodStats;
