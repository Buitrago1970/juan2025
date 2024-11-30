import React from "react";
import eye from "../../public/eye.svg";
import Image from "next/image";
import styles from '@/styles/Projects.module.css';

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
      video: "./6003998-uhd_2160_3840_30fps.mp4",
    },
    {
      title: "San Diego",
      description: "Innovative UI-Focused Full-Stack Designer and Developer.",
      color: "san",
      width: "420px",
    },
  ];
  const projectsSecondRow = [
    {
      title: "Kitsh",
      description:
        "Digital Architect from Conceptual Design to Full-Stack Coding.",
      color: "kitsch",
      width: "full",
    },
    {
      title: "Spark AR",
      description: "Digital Creator: 1.1M+ Project Interactions",
      color: "rainbow",
      width: "420px",
    },
  ];
  return (
    <section id={id}>
      <div className="mt-14 mr-5 pb-16 mb-20">
        <div className={styles["container-row-project"]}>
          {projectsFirstRow.map((project, index) => (
            <div
              key={index}
              className={`${project.width === "full" ? styles.full : styles.small} lg:w-full`}
            >
              <div
                className={`relative h-[630px] ${project.width === "full" ? styles.full : styles.small} lg:w-full ${styles[project.color]} rounded-[40px] mb-5 lg:mb-4 flex justify-center items-center hover:cursor-cell`}
              >
                <video
                  className="w-full h-full object-cover rounded-[25px] shadow-video"
                  src={project.video}
                  muted
                  autoPlay
                  loop
                ></video>
                <div className="w-[50%]"></div>
              </div>
              <div className="block lg:flex lg:space-x-2 space-y-4 lg:space-y-0 lg:text-sm text-gray-400 items-start">
                <p className="text-gray-100 font-semibold flex-shrink-0">
                  {project.title}
                </p>
                <p className="lg:font-medium flex-shrink">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles["container-secondary-row-project"]}>
          {projectsSecondRow.map((project, index) => (
            <div
              key={index}
              className={`${project.width === "full" ? styles.full : styles.small} lg:w-full`}
            >
              <div
                className={`relative h-[630px] ${project.width === "full" ? styles.full : styles.small} lg:w-full ${styles[project.color]} rounded-[40px] mb-5 lg:mb-4 flex justify-center items-center hover:cursor-cell`}
              >
                <div className="absolute inset-0 bg-black bg-opacity-15 flex justify-center flex-col items-center opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-[40px]">
                  <Image src={eye} alt="eye" width={50} height={50} />
                  <span className="mt-4 view text-white text-3xl">VIEW</span>
                </div>
              </div>
              <div className="block lg:flex lg:space-x-2 space-y-4 lg:space-y-0 lg:text-sm text-gray-400 items-start">
                <p className="text-gray-100 font-semibold flex-shrink-0">
                  {project.title}
                </p>
                <p className="lg:font-medium flex-shrink">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
