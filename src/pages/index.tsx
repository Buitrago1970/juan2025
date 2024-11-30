import MainLayout from "@/layouts/MainLayout";
import Header from "@/components/Header"
import Projects from "@/components/Projects"
import AboutMe from "@/components/AboutMe"

export default function Home() {
  return (
    <MainLayout title="Home" description="Welcome to my portfolio">
      <div className="ml-5 lg:ml-10">
        <Header />
       <Projects />
        <div className="text-white">
          <hr className="my-1 lg:my-3" />
          <p className="text-lg font-medium lg:text-base">About Me</p>
        </div>
        <AboutMe />
        <div className="text-white">
          <hr className="my-1 lg:my-3" />
          <p className="text-lg font-medium lg:text-base">CONTACT</p>
        </div>
        {/* <Contact />  */}
      </div>
    </MainLayout>
  );
}
