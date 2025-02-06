import React from "react";
import styles from "@/styles/Projects.module.css";
import ProjectRow from "@/components/ProjectRow";

interface ProjectsProps {
  id?: string;
}

const Projects: React.FC<ProjectsProps> = ({ id }) => {
  const projectsFirstRow = [
    {
      title: "Betplay",
      description:
        "Web Developer: Leading Colombia’s top sports betting and casino platform.",
      color: "betplay",
      width: "full",
      video: "./betplay1.mp4",
      link: "https://betplay.com.co/",
    },
    {
      title: "San Diego",
      description: "Innovative UI-Focused Full-Stack Designer and Developer.",
      color: "san",
      width: "420px",
      video: "./Screen Recording 2025-01-21 at 8.14.59 PM.mp4",
      link: "https://www.google.com",
    },
  ];
  const projectsSecondRow = [
    {
      title: "Kitsh",
      description:
      "Digital Architect from Conceptual Design to Full-Stack Coding.",
      color: "kitsch",
      width: "420px",
      video: "./kitsch.mp4",
      link: "https://13kitsch.vercel.app/",
    },
    {
      title: "Apostala",
      description:
      "Frontend Developer: Development of the new application interface, focusing on usability and an engaging user experience.",
      color: "rainbow",
      video: "./apostala1.mp4",
      width: "full",

      link: "https://nuevo.aposta.la/bets",
    }
  ];

  return (
    <section id={id}>
      <div className="mt-14 mx-5 pb-16 mb-20">
        <ProjectRow
          projects={projectsFirstRow}
          containerClass={styles["container-row-project"]}
        />
        <ProjectRow
          projects={projectsSecondRow}
          containerClass={styles["container-secondary-row-project"]}
        />
      </div>
    </section>
  );
};

export default Projects;
