
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ScheduledCheckins = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-guardian-text-primary">Scheduled Check-ins</h1>
            <p className="text-guardian-text-secondary mt-2">
              Set regular wellness check-in reminders
            </p>
            <div className="separator"></div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 text-center">
            <h2 className="text-xl font-semibold text-guardian-text-primary mb-4">
              Coming Soon
            </h2>
            <p className="text-guardian-text-secondary">
              Our scheduled check-in feature is currently in development. This feature will allow you to customize when and how the app checks in with you.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ScheduledCheckins;
