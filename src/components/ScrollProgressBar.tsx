
import { useScrollProgress } from '@/utils/animations';

const ScrollProgressBar = () => {
  const scrollProgress = useScrollProgress();
  
  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50">
      <div 
        className="h-full bg-gradient-to-r from-guardian-blue to-guardian-green origin-left transform"
        style={{ 
          transform: `scaleX(${scrollProgress})`,
          transition: 'transform 0.2s ease-out'
        }}
      />
    </div>
  );
};

export default ScrollProgressBar;
