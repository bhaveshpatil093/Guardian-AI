
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

export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const updateScroll = () => {
      const currentScrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrolled = currentScrollY / maxScroll;
      setProgress(scrolled);
    };
    
    window.addEventListener('scroll', updateScroll);
    
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);
  
  return progress;
};

export const useScrollAnimation = (threshold: number = 0.1) => {
  const [elements, setElements] = useState<Element[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );
    
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => {
      observer.observe(el);
    });
    
    setElements(Array.from(animatedElements));
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, [threshold]);
  
  return elements.length;
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
