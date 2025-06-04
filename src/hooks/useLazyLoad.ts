
import { useEffect, useRef, useState } from 'react';

interface UseLazyLoadOptions {
  threshold?: number;
  rootMargin?: string;
}

export const useLazyLoad = (options: UseLazyLoadOptions = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || hasBeenVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasBeenVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '50px'
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [hasBeenVisible, options.threshold, options.rootMargin]);

  return { elementRef, isVisible, hasBeenVisible };
};
