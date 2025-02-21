import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "@/styles/Projects.module.css";
import ProjectRow from "@/components/ProjectRow";

interface ProjectsProps {
  id?: string;
}

const Projects: React.FC<ProjectsProps> = ({ id }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Reset hover state when component mounts/unmounts
  useEffect(() => {
    setHoveredIndex(null);
    return () => {
      setHoveredIndex(null);
    };
  }, []);

  useEffect(() => {
    const projects = containerRef.current?.querySelectorAll(`.${styles.projectItem}`);
    
    if (projects) {
      gsap.from(projects, {
        y: 50,
        opacity: 1, // Cambiado de 0 a 1 para evitar la opacidad inicial
        duration: 1,
        ease: "power3.out",
        stagger: 0,
        delay: 0.5
      });
    }

    // Asegurarse de que todos los proyectos sean visibles
    const resetProjects = () => {
      if (projects) {
        projects.forEach((project) => {
          (project as HTMLElement).style.opacity = '1';
        });
      }
    };

    resetProjects();
    return () => resetProjects();
  }, []);

  const projectsFirstRow = [
    {
      title: "Betplay",
      description:
        "Web Developer: Leading Colombia’s top sports betting and casino platform.",
      color: "betplay",
      width: "full",
      video: "https://d2aw5og880ztxv.cloudfront.net/betplay1.mp4",
      link: "https://betplay.com.co/",
    },
    {
      title: "Kitsh",
      description:
      "Digital Architect from Conceptual Design to Full-Stack Coding.",
      color: "kitsch",
      width: "420px",
      video: "https://d2aw5og880ztxv.cloudfront.net/kitsch.mp4",
      link: "https://13kitsch.vercel.app/",
    },
  ];
  const projectsSecondRow = [
    {
      title: "San Diego",
      description: "Innovative UI-Focused Full-Stack Designer and Developer.",
      color: "san",
      width: "420px",
      video: "https://d2aw5og880ztxv.cloudfront.net/sandiego.mp4",
      link: "https://sandiegocol.netlify.app/",
    },
    {
      title: "Apostala",
      description:
      "Frontend Developer: Development of the new application interface, focusing on usability and an engaging user experience.",
      color: "rainbow",
      video: "https://d2aw5og880ztxv.cloudfront.net/apostala1.mp4", 
      width: "full",
      link: "https://nuevo.aposta.la/bets",
    }
  ];

  return (
    <section id={id}>
      <div ref={containerRef} className="mt-14 mx-5 pb-16 mb-20">
        <ProjectRow
          projects={projectsFirstRow}
          containerClass={styles["container-row-project"]}
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
          indexOffset={0}
        />
        <ProjectRow
          projects={projectsSecondRow}
          containerClass={styles["container-secondary-row-project"]}
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
          indexOffset={projectsFirstRow.length}
        />
      </div>
    </section>
  );
};

export default Projects;
