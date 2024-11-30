import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import "./Navbar.css";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("home");

  const navegation = [
    { name: "Homepage", link: "home" },
    { name: "Work", link: "work" },
    { name: "About", link: "about" },
    { name: "Contact", link: "contact" },
  ];

  const socialMedia = ["Mail", "Linkedin", "Github", "Read.cv"];
  const webInterfaces = ["Web Design", "UI/UX Design", "Full"];

  return (
    <nav className=" max-w-[240px] h-[100vh] pt-[5px] ben">
      <div className="flex items-center justify-center h-[100px] min-w-[240 px] border border-gray-items rounded-[6px] mb-[5px]">
        <div className="">
          <h3 className="text-white text-lg font-semibold">Juan Buitrago</h3>
          <p className="text-gray-300 text-xs -mt-1">Web Developer</p>
        </div>
      </div>
      <div className="border border-gray-items border-b-0 min-w-[230px] rounded-[6px] pb-10">
        <div className="border-b border-gray-items mt-8 pb-8 space-y-3">
          {navegation.map((nav, index) => (
            <div
              key={index}
              className="cursor-pointer"
              onClick={() => setActiveSection(nav.link)}
            >
              <a
                href={`#${nav.link}`}
                className={`flex items-center text-sm cursor-pointer text-white ${
                  activeSection === nav.link ? "active" : ""
                }`}
              >
                <p className="ml-4 font-light hover:text-gray-400">
                  {nav.name}
                </p>
                {activeSection === nav.link ? (
                  <div>
                    <Image
                      src="/Polygon.svg"
                      alt="arrow"
                      width={15}
                      height={15}
                      className="mr-4"
                    />
                  </div>
                ) : null}
              </a>
            </div>
          ))}
        </div>
        <div className="border-b border-gray-items mt-6 pb-5">
          <div>
            <h3 className="text-white ml-4 mb-4 tracking-wide text-[12px]">
              DESTACADO
            </h3>
            <div className="text-white">
              <Link href="/hackathon">
                <p className="ml-4 cursor-pointer text-xs">Hackathon</p>
              </Link>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div>
            <h3 className="text-white mt-7 ml-4 mb-4 tracking-wide text-[12px]">
              WEB INTERFACES
            </h3>
            <div className="space-y-2">
              {webInterfaces.map((web, index) => (
                <div className="text-white text-xs" key={index}>
                  <p className="ml-4 cursor-pointer">{web}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="mt-5 pb-5">
            <h3 className="text-white mt-6 ml-4 mb-6 tracking-wide text-[12px]">
              CONTACT
            </h3>
            <div className="text-white flex flex-col space-y-3">
              {socialMedia.map((social, index) => (
                <a href="" key={index} className="ml-4 cursor-pointer text-xs ">
                  <p className="hover:text-gray-400 inline">{social}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
