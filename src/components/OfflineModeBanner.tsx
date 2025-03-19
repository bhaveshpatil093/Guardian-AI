
import { useState, useEffect } from 'react';
import { WifiOff, Wifi } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const OfflineModeBanner = () => {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  
  useEffect(() => {
    const handleOnline = () => {
      setIsOffline(false);
      toast({
        title: 'You are back online',
        description: 'Full app functionality has been restored.',
        duration: 3000,
      });
    };
    
    const handleOffline = () => {
      setIsOffline(true);
      toast({
        title: 'You are offline',
        description: 'Limited functionality available. Critical resources still accessible.',
        duration: 5000,
      });
    };
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
  
  if (!isOffline) return null;
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-amber-100 dark:bg-amber-900 p-2 z-50 animate-slide-up">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 text-amber-800 dark:text-amber-200">
          <WifiOff className="h-4 w-4" />
          <span className="text-sm font-medium">
            Offline Mode: Essential features available
          </span>
        </div>
        <button
          className="text-xs text-amber-800 dark:text-amber-200 underline"
          onClick={() => {
            toast({
              title: 'Offline Mode Info',
              description: 'While offline, you can access safety resources, your journal, and saved safety plans.',
              duration: 5000,
            });
          }}
        >
          Learn more
        </button>
      </div>
    </div>
  );
};

export default OfflineModeBanner;
