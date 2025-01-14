import { useEffect, useRef } from "react";
import gsap from 'gsap';
import styles from "../styles/AboutMe.module.css";
import Cards from "./Cards";

interface AboutMeProps {
  id?: string;
}

const AboutMe: React.FC<AboutMeProps> = ({ id }) => {
  const textRef = useRef<HTMLHeadingElement>(null);
  const highlightRefs = useRef<(HTMLSpanElement | null)[]>([]);

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
    }
  }, []);

  const sentence = (
    <>
      I have dedicated my career to developing{' '}
      <span ref={el => { highlightRefs.current[0] = el }} className={styles.highlight}>web applications</span> that are not only{' '}
      <span ref={el => {highlightRefs.current[1] = el}} className={styles.highlight}>functional</span> but also{' '}
      <span ref={el => {highlightRefs.current[2] = el}} className={styles.highlight}>charming</span> and{' '}
      <span ref={el => { highlightRefs.current[3] = el; }} className={styles.highlight}>intuitive</span>.
    </>
  );

  return (
    <section id={id} className="mt-14 lg:mt-52 lg:mr-5 mb-32">
      <div className="mr-5 lg:mr-0">
        <div className="font-semibold text-center text-white mx-auto text-2xl mb-48 sm:text-4xl lg:mb-52 lg:w-3/4 lg:text-left lg:text-5xl">
          <h1 ref={textRef} className={styles.animatedText}>
            {sentence}
          </h1>
        </div>
      </div>
      <Cards />
    </section>
  );
};

export default AboutMe;