
import { useState, useEffect } from 'react';

interface JournalEntry {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

interface JournalUpdateData {
  title?: string;
  content?: string;
  updatedAt: string;
}

export const useJournalStore = () => {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  
  // Load journal entries from localStorage on mount
  useEffect(() => {
    const storedEntries = localStorage.getItem('journalEntries');
    if (storedEntries) {
      try {
        setEntries(JSON.parse(storedEntries));
      } catch (e) {
        console.error('Failed to parse journal entries from localStorage:', e);
        setEntries([]);
      }
    }
  }, []);
  
  // Save journal entries to localStorage when they change
  useEffect(() => {
    localStorage.setItem('journalEntries', JSON.stringify(entries));
  }, [entries]);
  
  // Add a new journal entry
  const addEntry = (entry: JournalEntry) => {
    setEntries(prev => [entry, ...prev]);
  };
  
  // Update an existing journal entry
  const updateEntry = (id: string, data: JournalUpdateData) => {
    setEntries(prev => 
      prev.map(entry => 
        entry.id === id
          ? { ...entry, ...data }
          : entry
      )
    );
  };
  
  // Delete a journal entry
  const deleteEntry = (id: string) => {
    setEntries(prev => prev.filter(entry => entry.id !== id));
  };
  
  // Get a specific journal entry by ID
  const getEntryById = (id: string) => {
    return entries.find(entry => entry.id === id) || null;
  };
  
  // Get all journal entries
  const getAllEntries = () => {
    return entries;
  };
  
  return {
    entries,
    addEntry,
    updateEntry,
    deleteEntry,
    getEntryById,
    getAllEntries
  };
};
