import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from '@/styles/AboutMe.module.css';
import Cards from "./Cards";

gsap.registerPlugin(ScrollTrigger);

export default function AboutMe() {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0, 
        duration: 1,
        ease: "power2.out", 
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "top 60%", 
          scrub: true,
        },
      }
    );
  }, []);

  const sentence =
    "I have dedicated my career to developing web applications that are not only functional but also charming and intuitive.";

  return (
    <div className="mt-14 lg:mt-52 lg:mr-5 mb-32">
      <div className="mr-5 lg:mr-0">
        <div className="font-semibold text-center text-white mx-auto text-2xl mb-48 sm:text-4xl lg:mb-52 lg:w-3/4 lg:text-left lg:text-5xl">
          <h1 ref={textRef} className={styles.animatedText}>
            {sentence}
          </h1>
        </div>
      </div>
      <Cards />
    </div>
  );
}