
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useJournalStore } from '@/hooks/useJournalStore';

interface JournalEntryFormProps {
  onSaved: () => void;
  entryToEdit?: string;
}

const JournalEntryForm = ({ onSaved, entryToEdit }: JournalEntryFormProps) => {
  const { addEntry, getEntryById, updateEntry } = useJournalStore();
  const { toast } = useToast();
  const isEditing = !!entryToEdit;
  
  const initialEntry = isEditing && entryToEdit 
    ? getEntryById(entryToEdit) 
    : null;
  
  const [title, setTitle] = useState(initialEntry?.title || '');
  const [content, setContent] = useState(initialEntry?.content || '');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim()) {
      toast({
        title: "Title required",
        description: "Please enter a title for your journal entry",
        variant: "destructive",
      });
      return;
    }
    
    if (!content.trim()) {
      toast({
        title: "Content required",
        description: "Please enter some content for your journal entry",
        variant: "destructive",
      });
      return;
    }
    
    try {
      if (isEditing && entryToEdit) {
        updateEntry(entryToEdit, {
          title,
          content,
          updatedAt: new Date().toISOString()
        });
        
        toast({
          title: "Entry updated",
          description: "Your journal entry has been updated successfully",
        });
      } else {
        addEntry({
          id: Date.now().toString(),
          title,
          content,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        });
        
        toast({
          title: "Entry saved",
          description: "Your journal entry has been saved successfully",
        });
      }
      
      onSaved();
    } catch (error) {
      console.error('Error saving journal entry:', error);
      toast({
        title: "Error saving entry",
        description: "There was a problem saving your journal entry. Please try again.",
        variant: "destructive",
      });
    }
  };
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-guardian-text-primary mb-6">
        {isEditing ? 'Edit Journal Entry' : 'Create New Journal Entry'}
      </h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label 
            htmlFor="title" 
            className="block text-sm font-medium text-guardian-text-secondary mb-2"
          >
            Title
          </label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Give your entry a title..."
            className="w-full"
          />
        </div>
        
        <div className="mb-6">
          <label 
            htmlFor="content" 
            className="block text-sm font-medium text-guardian-text-secondary mb-2"
          >
            Content
          </label>
          <Textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your thoughts here..."
            className="w-full min-h-[300px]"
          />
        </div>
        
        <div className="flex justify-between">
          <Button
            type="button"
            variant="outline"
            onClick={onSaved}
          >
            Cancel
          </Button>
          <Button type="submit">
            {isEditing ? 'Update Entry' : 'Save Entry'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default JournalEntryForm;
