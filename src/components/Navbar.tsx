import { useState, useEffect, useMemo, useRef } from "react";
import Section from "./Navbar/Section";
import Contact from "./Navbar/Contact";
import NavItem from "./Navbar/NavItem";
import Image from "next/image";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const isScrolling = useRef(false);

  const navegation = useMemo(
    () => [
      { name: "Homepage", link: "header" },
      { name: "Work", link: "projects" },
      { name: "About", link: "about-me" },
      { name: "Contact", link: "contact" },
    ],
    []
  );

  type SocialMedia = {
    name: string;
    value: string;
    type: "copy" | "link" | "pdf";
  };

  const socialMediaData: SocialMedia[] = [
    { name: "Mail", value: "juanbuitrago2002@outlook.com", type: "copy" },
    {
      name: "LinkedIn",
      value: "https://www.linkedin.com/in/sebastianbbuitrago/",
      type: "link",
    },
    { name: "GitHub", value: "https://github.com/Buitrago1970", type: "link" },
    { name: "Resume", value: "/ruta/a/tu/cv.pdf", type: "pdf" },
  ];

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
      setTimeout(() => {
        isScrolling.current = false;
      }, 1000);
    }
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      if (isScrolling.current) return;

      const sections = navegation.map((nav) =>
        document.getElementById(nav.link)
      );
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
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
    <nav className="h-full pt-[5px] w-[240px] pb-5">
      <div className="flex items-center justify-center gap-3 h-[100px] border border-gray-items rounded-[6px] mb-[5px]">
          <div>
            <Image
              src="sb.svg"
              alt="Juan Buitrago"
              width={20}
              height={20}
            />
          </div>
        <div className=" ">

          <h3 className="text-white text-lg font-semibold">Juan Buitrago</h3>
          <p className="text-gray-300 text-xs -mt-1">Web Developer</p>
        </div>
      </div>

      <div className="border border-gray-items border-b-0 min-w-[230px] rounded-[6px] h-[calc(100%-110px)] overflow-y-auto">
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
        <Section
          title="DESTACADO"
          items={[{ name: "Hackathon", link: "/hackathon" }]}
          isLink
        />
        <Section title="WEB INTERFACES" items={webInterfaces} />
        <Contact socialMedia={socialMediaData} />
      </div>
    </nav>
  );
}
