
import React, { createContext, useState, useContext, useEffect } from 'react';

interface PrivacyModeContextType {
  privacyMode: boolean;
  togglePrivacyMode: () => void;
  quickHide: () => void;
}

const PrivacyModeContext = createContext<PrivacyModeContextType | undefined>(undefined);

export const usePrivacyMode = () => {
  const context = useContext(PrivacyModeContext);
  if (!context) {
    throw new Error('usePrivacyMode must be used within a PrivacyModeProvider');
  }
  return context;
};

interface Props {
  children: React.ReactNode;
}

const PrivacyModeProvider: React.FC<Props> = ({ children }) => {
  const [privacyMode, setPrivacyMode] = useState<boolean>(
    localStorage.getItem('privacyMode') === 'true'
  );
  
  // Save privacy mode state to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('privacyMode', privacyMode.toString());
    
    // Apply blur class to specific elements when privacy mode is enabled
    const sensitiveElements = document.querySelectorAll('.privacy-sensitive');
    sensitiveElements.forEach(element => {
      if (privacyMode) {
        element.classList.add('privacy-blur');
      } else {
        element.classList.remove('privacy-blur');
      }
    });
  }, [privacyMode]);
  
  // Toggle privacy mode
  const togglePrivacyMode = () => setPrivacyMode(prev => !prev);
  
  // Quick hide function (automatically turns off after 5 seconds)
  const quickHide = () => {
    setPrivacyMode(true);
    setTimeout(() => {
      setPrivacyMode(false);
    }, 5000);
  };
  
  return (
    <PrivacyModeContext.Provider value={{ privacyMode, togglePrivacyMode, quickHide }}>
      {children}
    </PrivacyModeContext.Provider>
  );
};

export default PrivacyModeProvider;
