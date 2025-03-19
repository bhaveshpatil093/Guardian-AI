
import React from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePrivacyMode } from '@/context/PrivacyModeContext';
import { useToast } from '@/hooks/use-toast';

const PrivacyModeToggle = () => {
  const { privacyMode, togglePrivacyMode, quickHide } = usePrivacyMode();
  const { toast } = useToast();
  
  const handleToggle = () => {
    togglePrivacyMode();
    toast({
      title: privacyMode ? 'Privacy Mode Disabled' : 'Privacy Mode Enabled',
      description: privacyMode 
        ? 'Sensitive content is now visible.' 
        : 'Sensitive content is now hidden.',
      duration: 3000,
    });
  };
  
  const handleQuickHide = () => {
    quickHide();
    toast({
      title: 'Quick Hide Activated',
      description: 'Content hidden temporarily. Will restore in 5 seconds.',
      duration: 3000,
    });
  };
  
  return (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        size="sm"
        onClick={handleToggle}
        className="rounded-full"
        aria-label={privacyMode ? 'Disable privacy mode' : 'Enable privacy mode'}
      >
        {privacyMode ? (
          <EyeOff className="h-5 w-5 text-guardian-text-secondary" />
        ) : (
          <Eye className="h-5 w-5 text-guardian-text-secondary" />
        )}
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={handleQuickHide}
        className="text-xs"
      >
        Quick Hide
      </Button>
    </div>
  );
};

export default PrivacyModeToggle;
