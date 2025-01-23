import { useEffect, useRef, useState } from "react";
import gsap from 'gsap';
import styles from "../styles/AboutMe.module.css";
import Cards from "./Cards";

interface AboutMeProps {
  id?: string;
}

const AboutMe: React.FC<AboutMeProps> = ({ id }) => {
  const textRef = useRef<HTMLHeadingElement>(null);
  const highlightRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const particleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [particles, setParticles] = useState(Array(15).fill({ top: 0, left: 0 }));

  useEffect(() => {
    if (typeof window !== 'undefined' && textRef.current) {
      // Animación principal del texto
      gsap.fromTo(textRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out"
        }
      );

      // Animación de las palabras resaltadas
      highlightRefs.current.forEach((highlight, index) => {
        if (highlight) {
          // Animación inicial de fade in
          gsap.fromTo(highlight,
            { opacity: 0 },
            {
              opacity: 1,
              duration: 0.5,
              delay: 0.2 * index,
            }
          );

          // Animación del efecto de brillo
          gsap.fromTo(highlight.querySelector('::after'),
            { 
              x: '-100%',
              y: '-100%'
            },
            {
              x: '100%',
              y: '100%',
              duration: 1,
              delay: 0.5 + (0.2 * index),
              ease: "power2.inOut",
            }
          );
        }
      });

      // Animación de partículas
      particleRefs.current.forEach((particle, index) => {
        if (particle) {
          gsap.fromTo(particle,
            { opacity: 0, scale: 0 },
            {
              opacity: 1,
              scale: 1,
              duration: 0.5,
              delay: 1 + (0.2 * index),
              repeat: -1,
              yoyo: true,
              ease: "power2.inOut",
            }
          );
        }
      });
    }
  }, []);

  useEffect(() => {
    // Calculate random positions only on client-side
    const newParticles = particles.map(() => ({
      top: `${Math.random() * 150}%`,
      left: `${Math.random() * 150}%`
    }));
    setParticles(newParticles);
  }, []); // Run once on mount

  const sentence = (
    <>
      I develop web applications with the conviction that beauty and functionality are inseparable, delivering experiences that are both captivating and practical.
    </>
  );

  return (
    <section id={id} className="mt-14 lg:mt-52 lg:mr-5 mb-32">
      <div className="mr-5 lg:mr-0">
        <div className="font-semibold text-center text-white mx-auto text-2xl mb-48 sm:text-4xl lg:mb-52 lg:w-3/4 lg:text-left lg:text-5xl leading-[60px]">
          <h1 ref={textRef} className={`${styles.animatedText} ${styles.glow}`}>
            {sentence}
            {particles.map((position, index) => (
              <div
                key={index}
                ref={(el) => (particleRefs.current[index] = el)}
                className={styles.particle}
                style={{
                  top: position.top,
                  left: position.left
                }}
              />
            ))}
          </h1>
        </div>
      </div>
      <Cards />
    </section>
  );
};

export default AboutMe;