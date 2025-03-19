
import { X } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

interface QuickExitProps {
  className?: string;
}

const QuickExit = ({ className = '' }: QuickExitProps) => {
  const [isHovering, setIsHovering] = useState(false);
  
  const handleExit = () => {
    toast.info('Redirecting to weather.com...');
    
    // This setTimeout gives the toast time to appear before redirecting
    setTimeout(() => {
      window.location.href = 'https://weather.com';
    }, 300);
  };
  
  return (
    <button
      onClick={handleExit}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`group flex items-center space-x-1 px-3 py-1.5 rounded-full text-sm bg-guardian-green-light transition-all duration-300 hover:bg-guardian-green/20 ${className}`}
      aria-label="Quick Exit"
    >
      <X size={16} className="text-guardian-green transition-all duration-300 group-hover:text-guardian-green/90" />
      <span className={`text-guardian-green font-medium transition-all duration-300 group-hover:text-guardian-green/90 ${isHovering ? 'opacity-100 max-w-24' : 'opacity-0 max-w-0 overflow-hidden'} `}>
        Quick Exit
      </span>
    </button>
  );
};

export default QuickExit;
