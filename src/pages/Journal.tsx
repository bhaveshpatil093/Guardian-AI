
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JournalEntryForm from '@/components/Journal/JournalEntryForm';
import JournalEntryList from '@/components/Journal/JournalEntryList';
import JournalEntryView from '@/components/Journal/JournalEntryView';
import { usePrivacyMode } from '@/context/PrivacyModeContext';

type JournalView = 'list' | 'create' | 'view';

const Journal = () => {
  const [currentView, setCurrentView] = useState<JournalView>('list');
  const [selectedEntryId, setSelectedEntryId] = useState<string | null>(null);
  const { privacyMode } = usePrivacyMode();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const handleViewEntry = (id: string) => {
    setSelectedEntryId(id);
    setCurrentView('view');
  };
  
  const handleCreateEntry = () => {
    setSelectedEntryId(null);
    setCurrentView('create');
  };
  
  const handleBackToList = () => {
    setCurrentView('list');
  };
  
  const renderContent = () => {
    switch (currentView) {
      case 'create':
        return <JournalEntryForm onSaved={handleBackToList} />;
      case 'view':
        return <JournalEntryView entryId={selectedEntryId!} onBack={handleBackToList} />;
      case 'list':
      default:
        return <JournalEntryList onViewEntry={handleViewEntry} onCreateEntry={handleCreateEntry} />;
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className={`flex-1 container mx-auto px-4 py-8 ${privacyMode ? 'privacy-blur' : ''} privacy-sensitive`}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-guardian-text-primary">Journal</h1>
            <p className="text-guardian-text-secondary mt-2">
              A private space to document your thoughts and experiences
            </p>
            <div className="separator"></div>
          </div>
          
          {renderContent()}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Journal;
