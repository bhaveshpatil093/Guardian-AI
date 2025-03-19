
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MoodEntryForm from '@/components/MoodTracker/MoodEntryForm';
import MoodHistory from '@/components/MoodTracker/MoodHistory';
import MoodStats from '@/components/MoodTracker/MoodStats';
import { useToast } from '@/hooks/use-toast';
import { usePrivacyMode } from '@/context/PrivacyModeContext';

const MoodTracker = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'entry' | 'history' | 'stats'>('entry');
  const { toast } = useToast();
  const { privacyMode } = usePrivacyMode();
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const renderTabContent = () => {
    switch(activeTab) {
      case 'entry':
        return <MoodEntryForm />;
      case 'history':
        return <MoodHistory />;
      case 'stats':
        return <MoodStats />;
      default:
        return <MoodEntryForm />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className={`max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 ${privacyMode ? 'privacy-blur' : ''} privacy-sensitive`}>
          <div className="p-6">
            <h1 className="text-2xl font-bold text-guardian-text-primary mb-6">Mood Tracker</h1>
            <p className="text-guardian-text-secondary mb-8">
              Track your emotional wellbeing over time. Your entries are private and stored locally on your device.
            </p>
            
            <div className="flex border-b mb-6">
              <button
                className={`px-4 py-2 font-medium ${
                  activeTab === 'entry' 
                    ? 'text-guardian-blue border-b-2 border-guardian-blue' 
                    : 'text-guardian-text-secondary'
                }`}
                onClick={() => setActiveTab('entry')}
              >
                New Entry
              </button>
              <button
                className={`px-4 py-2 font-medium ${
                  activeTab === 'history' 
                    ? 'text-guardian-blue border-b-2 border-guardian-blue' 
                    : 'text-guardian-text-secondary'
                }`}
                onClick={() => setActiveTab('history')}
              >
                History
              </button>
              <button
                className={`px-4 py-2 font-medium ${
                  activeTab === 'stats' 
                    ? 'text-guardian-blue border-b-2 border-guardian-blue' 
                    : 'text-guardian-text-secondary'
                }`}
                onClick={() => setActiveTab('stats')}
              >
                Insights
              </button>
            </div>
            
            {renderTabContent()}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MoodTracker;
