import { useState, useEffect, useMemo, useRef } from "react";
import Section from "./Navbar/Section";
import Contact from "./Navbar/Contact";
import NavItem from "./Navbar/NavItem";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const isScrolling = useRef(false);

  const navegation = useMemo(() => [
    { name: "Homepage", link: "header" },
    { name: "Work", link: "projects" },
    { name: "About", link: "about-me" },
    { name: "Contact", link: "contact" },
  ], []);

  const socialMedia = ["Mail", "Linkedin", "Github", "Read.cv"];
  const webInterfaces = [
    // { name: "Web Design", link: "/web-design" },
    { name: "UI/UX Design", link: "/ui-ux-design" },
    // { name: "Full", link: "/full" },
  ];

  const handleScroll = (id: string) => {
    setActiveSection(id);
    isScrolling.current = true;

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      // Reset the flag after animation completes (typical duration is 1000ms)
      setTimeout(() => {
        isScrolling.current = false;
      }, 1000);
    }
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      if (isScrolling.current) return;

      const sections = navegation.map(nav => document.getElementById(nav.link));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollEvent);
    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, [navegation]);

  return (
    <nav className=" max-w-[240px] h-[100vh] pt-[5px]">
      <div className="flex items-center justify-center h-[100px] min-w-[240 px] border border-gray-items rounded-[6px] mb-[5px]">
        <div className="">
          <h3 className="text-white text-lg font-semibold">Juan Buitrago</h3>
          <p className="text-gray-300 text-xs -mt-1">Web Developer</p>
        </div>
      </div>
      <div className="border border-gray-items border-b-0 min-w-[230px] rounded-[6px] pb-10">
        <div className="border-b border-gray-items mt-8 pb-8 space-y-3">
          {navegation.map((nav, index) => (
            <NavItem
              key={index}
              name={nav.name}
              link={nav.link}
              activeSection={activeSection}
              handleScroll={handleScroll}
            />
          ))}
        </div>
        <Section title="DESTACADO" items={[{ name: "Hackathon", link: "/hackathon" }]} isLink />
        <Section title="WEB INTERFACES" items={webInterfaces} />
        <Contact socialMedia={socialMedia} />
      </div>
    </nav>
  );
}