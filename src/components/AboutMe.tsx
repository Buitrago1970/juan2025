import {  useRef } from "react";

import styles from '@/styles/AboutMe.module.css';
import Cards from "./Cards";


export default function AboutMe() {
  const textRef = useRef(null);


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