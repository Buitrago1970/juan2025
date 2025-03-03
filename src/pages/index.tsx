import MainLayout from "@/layouts/MainLayout";
import Header from "@/components/Header"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import PageTransition from "@/components/PageTransition";
import NoiseCanvas from "@/components/NoiseCanvas/NoiseCanvas";


export default function Home() {
 

  return (
    <MainLayout title="Home" description="Welcome to my portfolio">
      <NoiseCanvas /> 
      <PageTransition>
        <div className="ml-5 lg:ml-10 [@media(max-width:1138px)]:!ml-5">
          <section id="header">
            <Header />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <div className="text-white">
            <hr className="my-1 lg:my-3" />
            <p className="text-lg font-medium lg:text-base">CONTACT</p>
          </div>
          <section id="contact">
            <Contact />
          </section>
        </div>
      </PageTransition>
    </MainLayout>
  );
}
