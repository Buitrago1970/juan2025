interface ProjectDetail {
  label: string;
  value: string | JSX.Element;
  url?: string;
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
          {detail.url ? (
            <a 
              href={detail.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-blue-400"
            >
              {detail.value}
            </a>
          ) : (
            <p className="text-white">{detail.value}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default function ProjectDetails() {
  const leftDetails = [
    { label: "Role", value: "Developer - Designer" },
    { 
      label: "Collaborators", 
      value: (
        <>
         <a href="https://www.linkedin.com/in/sebastianbbuitrago/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
          Juan Buitrago
          </a>
          {", "}
          <a href="https://www.linkedin.com/in/juliandalfonso/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
          Julian David
          </a>
          {", "}
          <a href="https://www.linkedin.com/in/jose-nicolas-castellanos-rangel/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            Nicolas Castellanos
          </a>
          {", "}
          <a href="https://www.linkedin.com/in/kevin-zarate-7666a0158/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            Kevin Zarate
          </a>
        </>
      ),
    },
  ];

  const rightDetails = [
    { label: "Duration", value: "2024" },
    { label: "Tools", value: "React.js, Anchor Framework, Phantom Wallet" },
  ];

  return (
    <div className="">
        <div className="grid grid-cols-2 space-x-4 mb-7 gap-6">
          <p>
          During the hackathon organized by Solana, we developed an innovative solution that addresses one of the greatest current challenges: reducing the carbon footprint.             </p>
          <p>
          Our project secured second place among dozens of proposals, standing out for its practical and scalable approach.            </p>
        </div>
        <div className="grid grid-cols-2 space-x-4 gap-6">
          <DetailsSection details={leftDetails} />
          <DetailsSection details={rightDetails} />
        </div>
    </div>
  );
}