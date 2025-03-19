
import { useEffect, useState } from 'react';

export const useAnimatedMount = (delay: number = 0) => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  return mounted;
};

export const fadeInClasses = (mounted: boolean, delay?: number): string => {
  const delayClass = delay ? ` animation-delay-${delay}` : '';
  return mounted ? `opacity-100 translate-y-0${delayClass}` : 'opacity-0 translate-y-4';
};

export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3, ease: "easeInOut" }
};
