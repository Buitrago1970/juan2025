import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useRouter } from 'next/router';

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (!elementRef.current) return;
    
    const hasVisited = localStorage.getItem('hasVisited');
    
    // Animación inicial al cargar el sitio por primera vez
    if (!hasVisited) {
      gsap.fromTo(
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
    }

    // Configurar las animaciones de transición entre páginas
    const handleRouteChangeStart = () => {
      gsap.to(elementRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: 'power1.inOut'
      });
    };

    const handleRouteChangeComplete = () => {
      gsap.fromTo(
        elementRef.current,
        {
          opacity: 0,
          y: 20
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: 'power1.inOut'
        }
      );
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router]);

  return <div ref={elementRef}>{children}</div>;
}