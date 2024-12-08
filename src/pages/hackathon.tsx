import HeroSection from "@/components/hackathon/HeroSection";
import ProjectDetails from "@/components/hackathon/DetailsSection";
import ProjectGallery from "@/components/hackathon/ProjectGallery";
import PageTransition from "@/components/PageTransition";

export default function Hackathon() {
  return (
    <PageTransition>
      <div className="bg-black-gray text-white">
        <HeroSection />
        <div className="flex flex-col lg:flex-row px-8 py-12 gap-6">
          <div className="lg:w-[28%] space-y-2">
            <h1 className="text-2xl font-bold uppercase">HHackathon Solana 2024:</h1>
            <p>Reducción de Huella de Carbono con Blockchain</p>
          </div>
          
          <div className="lg:w-[72%]">
            <ProjectDetails />
            <ProjectGallery />
          </div>
        </div>
      </div>
    </PageTransition>
  );
}