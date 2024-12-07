import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;
    
    const hasVisited = localStorage.getItem('hasVisited');
    
    if (!hasVisited) {
      const animation = gsap.fromTo(
        elementRef.current,
        {
          opacity: 0,
          scale: 0.8,
          filter: 'blur(15px)'
        },
        {
          opacity: 1,
          scale: 1,
          filter: 'blur(0px)',
          duration: 1.5,
          ease: 'power1.inOut'
        }
      );
      
      localStorage.setItem('hasVisited', 'true');
      
      return () => {
        animation.kill();
      };
    } else {
      // Si ya ha visitado, mostrar el contenido sin animación
      gsap.set(elementRef.current, {
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)'
      });
    }
  }, []);

  return <div ref={elementRef}>{children}</div>;
}