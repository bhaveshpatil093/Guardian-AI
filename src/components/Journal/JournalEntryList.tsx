
import { useState } from 'react';
import { format } from 'date-fns';
import { PlusCircle, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useJournalStore } from '@/hooks/useJournalStore';

interface JournalEntryListProps {
  onViewEntry: (id: string) => void;
  onCreateEntry: () => void;
}

const JournalEntryList = ({ onViewEntry, onCreateEntry }: JournalEntryListProps) => {
  const { getAllEntries } = useJournalStore();
  const [searchQuery, setSearchQuery] = useState('');
  
  const allEntries = getAllEntries();
  
  const filteredEntries = allEntries.filter(entry => 
    entry.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    entry.content.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-guardian-text-secondary" />
          <Input
            placeholder="Search entries..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <Button onClick={onCreateEntry}>
          <PlusCircle className="mr-2 h-4 w-4" />
          New Entry
        </Button>
      </div>
      
      {filteredEntries.length === 0 ? (
        <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg">
          {searchQuery ? (
            <p className="text-guardian-text-secondary">
              No entries found matching "{searchQuery}"
            </p>
          ) : (
            <div className="space-y-4">
              <p className="text-guardian-text-secondary">
                You haven't created any journal entries yet.
              </p>
              <Button onClick={onCreateEntry} variant="outline">
                Create Your First Entry
              </Button>
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-4">
          {filteredEntries.map(entry => (
            <div 
              key={entry.id}
              onClick={() => onViewEntry(entry.id)}
              className="p-4 bg-white dark:bg-gray-800 rounded-lg border cursor-pointer hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-medium text-guardian-text-primary">
                {entry.title}
              </h3>
              <p className="text-xs text-guardian-text-secondary mt-1">
                {format(new Date(entry.createdAt), 'PPP p')}
              </p>
              <p className="text-guardian-text-secondary mt-2 line-clamp-2">
                {entry.content}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JournalEntryList;
