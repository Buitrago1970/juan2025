import Image from "next/image";

const projects = [
  {
    image: "/Screenshot 2025-01-22 at 8.37.39 PM.png",
    title: "1. Payment for Emission Reduction",
    description: "Companies pay us to offset their carbon footprint.",
  },
  {
    image: "/Screenshot 2025-01-22 at 8.39.26 PM.png",
    title: "2. Tree Planting",
    description: "We invest these resources in planting trees that absorb carbon dioxide.",
  },
  {
    image: "/im_nota-hackseries.jpg",
    title: "3. Blockchain Certification",
    description:
      "We use Solana to immutably record the amount of CO₂ offset, ensuring traceability and reliability.",
  },
  {
    image: "/Group 404.png",
    title: "My Role in the Team",
    description:
      "I contributed to the development of the application’s front-end, ensuring an intuitive and professional interface. Additionally, I worked on integrating the carbon offset metrics with the blockchain, allowing companies to visualize their emission reductions in real-time.",
  },
];

export default function ProjectGallery() {
  return (
    <div className="space-y-5">
      {projects.map((project, index) => (
        <div key={index} className="pt-1">
          <div>
            <Image
              src={project.image}
              alt={project.title}
              layout="responsive"
              width={100}
              height={100}
            />
          </div>
          <div className="pt-6">
            <p className="text-xl font-bold ">{project.title}</p>
            <p className="text-lg text-[#878794]">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
