interface ProjectDetail {
    label: string;
    value: string;
  }
  
  interface DetailsSectionProps {
    details: ProjectDetail[];
  }
  
  function DetailsSection({ details }: DetailsSectionProps) {
    return (
      <div className="flex space-x-40">
        {details.map((detail, index) => (
          <div key={index}>
            <h2 className="text-sm font-semibold text-gray-400 uppercase">
              {detail.label}
            </h2>
            <p className="text-white">{detail.value}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default function ProjectDetails() {
    const leftDetails = [
      { label: "Role", value: "Design Consultant" },
      { label: "Collaborators", value: "Jerry Yue (CEO), Gleb Kuznetsov" },
    ];
  
    const rightDetails = [
      { label: "Duration", value: "2020-2021" },
      { label: "Tools", value: "Figma, Origami Studio" },
    ];
  
    return (
      <div className="">
          <div className="grid grid-cols-2 space-x-4 mb-7 gap-6">
            <p>
            For 2 years, I prototyped new ways to engage with computer interfaces, mostly working with voice and AI. Brain was one of the first companies to explore the idea of multimodal, generative interfaces. My time working 
            </p>
            <p>
            with the team has shaped many of the principles I design with now. Most of my work stayed in R&D but pieces of it have shipped and are now in the app store↗ .
            </p>
          </div>
          <div className="grid grid-cols-2 space-x-4 gap-6">
            <DetailsSection details={leftDetails} />
            <DetailsSection details={rightDetails} />
          </div>
     
      </div>
    );
  }