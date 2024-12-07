import HeroSection from "@/components/hackathon/HeroSection";
import ProjectDetails from "@/components/hackathon/DetailsSection";
import ProjectGallery from "@/components/hackathon/ProjectGallery";

export default function Hackathon() {
  return (
      <div className="bg-black-gray text-white">
        <HeroSection />
        
        <div className="flex flex-col lg:flex-row px-8 py-12 gap-6">
          <div className="lg:w-[28%] space-y-6">
            <h1 className="text-2xl font-bold uppercase">Solana eco eco</h1>
            <p>CRIPTO HACKATON</p>
          </div>
          
          <div className="lg:w-[72%]">
            <ProjectDetails />
            <ProjectGallery />
          </div>
        </div>
      </div>
  );
}