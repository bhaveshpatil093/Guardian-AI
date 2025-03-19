
import { useState, useEffect } from 'react';

interface MoodEntry {
  id: string;
  timestamp: string;
  mood: string;
  factors: string[];
  notes: string;
}

export const useMoodStore = () => {
  const [moodEntries, setMoodEntries] = useState<MoodEntry[]>([]);
  
  // Load mood entries from localStorage on mount
  useEffect(() => {
    const storedEntries = localStorage.getItem('moodEntries');
    if (storedEntries) {
      try {
        setMoodEntries(JSON.parse(storedEntries));
      } catch (e) {
        console.error('Failed to parse mood entries from localStorage:', e);
        // If parsing fails, start with empty array
        setMoodEntries([]);
      }
    }
  }, []);
  
  // Save mood entries to localStorage when they change
  useEffect(() => {
    localStorage.setItem('moodEntries', JSON.stringify(moodEntries));
  }, [moodEntries]);
  
  // Add a new mood entry
  const addMoodEntry = (entry: MoodEntry) => {
    setMoodEntries(prev => [entry, ...prev]);
  };
  
  // Delete a mood entry
  const deleteMoodEntry = (id: string) => {
    setMoodEntries(prev => prev.filter(entry => entry.id !== id));
  };
  
  // Get all entries
  const getAllEntries = () => {
    return moodEntries;
  };
  
  // Get entries for the past n days
  const getRecentEntries = (days: number) => {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - days);
    
    return moodEntries.filter(entry => {
      const entryDate = new Date(entry.timestamp);
      return entryDate >= cutoffDate;
    });
  };
  
  // Get mood distribution (count of each mood)
  const getMoodDistribution = () => {
    const distribution: Record<string, number> = {
      great: 0,
      good: 0,
      neutral: 0,
      bad: 0,
      terrible: 0
    };
    
    moodEntries.forEach(entry => {
      if (distribution[entry.mood] !== undefined) {
        distribution[entry.mood]++;
      }
    });
    
    return distribution;
  };
  
  return {
    moodEntries,
    addMoodEntry,
    deleteMoodEntry,
    getAllEntries,
    getRecentEntries,
    getMoodDistribution
  };
};
