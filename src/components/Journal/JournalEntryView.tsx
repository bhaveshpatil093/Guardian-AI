
import { useState } from 'react';
import { format } from 'date-fns';
import { ArrowLeft, Edit, Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useJournalStore } from '@/hooks/useJournalStore';
import { useToast } from '@/hooks/use-toast';
import JournalEntryForm from './JournalEntryForm';

interface JournalEntryViewProps {
  entryId: string;
  onBack: () => void;
}

const JournalEntryView = ({ entryId, onBack }: JournalEntryViewProps) => {
  const { getEntryById, deleteEntry } = useJournalStore();
  const [isEditing, setIsEditing] = useState(false);
  const { toast } = useToast();
  
  const entry = getEntryById(entryId);
  
  if (!entry) {
    return (
      <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-lg">
        <p className="text-guardian-text-secondary">
          The entry you're looking for could not be found.
        </p>
        <Button onClick={onBack} variant="outline" className="mt-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Journal
        </Button>
      </div>
    );
  }
  
  if (isEditing) {
    return (
      <JournalEntryForm 
        entryToEdit={entryId} 
        onSaved={() => {
          setIsEditing(false);
        }} 
      />
    );
  }
  
  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this journal entry? This action cannot be undone.')) {
      deleteEntry(entryId);
      toast({
        title: "Entry deleted",
        description: "Your journal entry has been deleted permanently",
      });
      onBack();
    }
  };
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <Button
          variant="ghost"
          size="sm"
          onClick={onBack}
          className="flex items-center text-guardian-text-secondary"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsEditing(true)}
          >
            <Edit className="mr-2 h-4 w-4" />
            Edit
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleDelete}
            className="text-red-500 border-red-200 hover:bg-red-50 dark:hover:bg-red-900"
          >
            <Trash className="mr-2 h-4 w-4" />
            Delete
          </Button>
        </div>
      </div>
      
      <article>
        <h1 className="text-2xl font-bold text-guardian-text-primary">
          {entry.title}
        </h1>
        
        <div className="flex items-center text-xs text-guardian-text-secondary mt-2 mb-6">
          <time>Created: {format(new Date(entry.createdAt), 'PPP')}</time>
          {entry.createdAt !== entry.updatedAt && (
            <time className="ml-4">
              Updated: {format(new Date(entry.updatedAt), 'PPP')}
            </time>
          )}
        </div>
        
        <div className="prose dark:prose-invert max-w-none">
          {entry.content.split('\n').map((paragraph, i) => (
            <p key={i} className="mb-4 text-guardian-text-primary">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </div>
  );
};

export default JournalEntryView;
