import React from 'react'
import styles from "@/styles/Projects.module.css";

export default function ProjectRow({
    projects,
    containerClass,
    hoveredIndex,
    setHoveredIndex,
    indexOffset
  }: {
    projects: {
      title: string;
      description: string;
      color: string;
      width: string;
      video?: string;
      link?: string;
    }[];
    containerClass: string;
    hoveredIndex: number | null;
    setHoveredIndex: (index: number | null) => void;
    indexOffset: number;
  }) {
  return (
        <div className={containerClass}>
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${
                project.width === "full" ? styles.full : styles.small
              } ${styles.projectItem} ${
                hoveredIndex !== null && hoveredIndex !== (index + indexOffset) ? styles.dimmed : ''
              } w-full transition-all duration-300`}
              onMouseEnter={() => setHoveredIndex(index + indexOffset)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className={`relative h-[630px] w-full ${
                  styles[project.color]
                } rounded-[40px] mb-5 lg:mb-4 flex flex-col justify-center items-center hover:cursor-cell`}
              >
                <video
                  className={`${
                    project.width === "full"
                      ? "w-[92%] max-w-[700px]"
                      : "w-[55%] h-[80%]"
                  }  border-2 border-black object-cover rounded-[25px] shadow-video brightness-90  `}
                  src={project.video}
                  muted
                  autoPlay
                  loop
                ></video>
              </a>
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
  )
}
