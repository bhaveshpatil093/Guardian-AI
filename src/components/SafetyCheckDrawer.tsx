
import React, { useState, useEffect } from 'react';
import { Shield, X, Check, AlertTriangle } from 'lucide-react';
import { 
  Drawer, 
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerFooter 
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const SafetyCheckDrawer = () => {
  const [open, setOpen] = useState(false);
  const [lastCheck, setLastCheck] = useState<number | null>(null);
  const { toast } = useToast();
  
  // Check every 30 minutes (adjust as needed)
  const checkInterval = 30 * 60 * 1000;
  
  useEffect(() => {
    // Get last check time from localStorage
    const storedLastCheck = localStorage.getItem('lastSafetyCheck');
    if (storedLastCheck) {
      setLastCheck(parseInt(storedLastCheck, 10));
    }
    
    const timer = setInterval(() => {
      const now = Date.now();
      
      // If never checked or it's been longer than the interval
      if (!lastCheck || (now - lastCheck > checkInterval)) {
        setOpen(true);
      }
    }, 10000); // Check every 10 seconds whether we need to show the drawer
    
    return () => clearInterval(timer);
  }, [lastCheck, checkInterval]);
  
  const handleSafe = () => {
    const now = Date.now();
    setLastCheck(now);
    localStorage.setItem('lastSafetyCheck', now.toString());
    setOpen(false);
    
    toast({
      title: "Safety Check Completed",
      description: "We're glad you're safe. We'll check in with you later.",
      duration: 3000,
    });
  };
  
  const handleNeedHelp = () => {
    setOpen(false);
    // Redirect to emergency page
    window.location.href = '/emergency';
  };
  
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent className="max-w-md mx-auto rounded-t-xl">
        <DrawerHeader className="text-center">
          <div className="mx-auto w-12 h-12 bg-guardian-blue-light rounded-full flex items-center justify-center mb-4">
            <Shield className="w-6 h-6 text-guardian-blue" />
          </div>
          <DrawerTitle className="text-2xl font-semibold text-guardian-text-primary">Safety Check</DrawerTitle>
          <p className="text-guardian-text-secondary mt-2">
            Guardian AI is checking in with you. Are you feeling safe right now?
          </p>
        </DrawerHeader>
        
        <div className="p-4 space-y-4">
          <Button 
            onClick={handleSafe}
            className="w-full py-6 bg-guardian-green-light hover:bg-guardian-green text-guardian-text-primary hover:text-white border border-guardian-green/20 transition-colors"
          >
            <Check className="mr-2 h-5 w-5" />
            Yes, I'm safe
          </Button>
          
          <Button 
            onClick={handleNeedHelp}
            variant="destructive"
            className="w-full py-6"
          >
            <AlertTriangle className="mr-2 h-5 w-5" />
            I need help
          </Button>
        </div>
        
        <DrawerFooter className="text-center">
          <p className="text-xs text-muted-foreground">
            If you're in immediate danger, please call emergency services: <strong>911</strong>
          </p>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default SafetyCheckDrawer;
