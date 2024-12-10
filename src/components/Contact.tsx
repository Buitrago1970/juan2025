import { useState } from "react";
import styles from "@/styles/Contact.module.css";

interface ContactProps {
  id?: string;
}

const Contact: React.FC<ContactProps> = ({ id }) => {
  const [copyText, setCopyText] = useState("Copy");

  const handleCopy = () => {
    navigator.clipboard.writeText("juanbuitrago2002@outlook.com");
    setCopyText("Copied!!");
    setTimeout(() => setCopyText("Copy"), 2000);
  };

  const links = [
    {
      name: "Mail",
      url: "",
      text: "juanbuitrago2002@outlook.com",
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/sebastianbbuitrago/",
      text: "sebastianbbuitrago",
    },
    {
      name: "Github",
      url: "https://github.com/Buitrago1970",
      text: "Buitrago1970",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id={id} className="text-white mr-2 sm:mr-7 mb-5">
      <h1 className={`${styles.titleContact}`}>
        LET’S CREATE BEAUTIFUL THINGS
      </h1>
      <div className="flex lg:justify-end mt-5 lg:mt-20">
        <p className="w-[450px] pr-5 text-sm">
          Thank you for visiting my portfolio. I am currently working for
          Betplay, but I am always interested in new and powerful challenges and
          opportunities.
        </p>
      </div>
      <div className="justify-center mt-20 hidden lg:flex">
        <button
          className={`${styles.goTopBtn} border border-white rounded-full text-[10px] w-[80px]`}
          onClick={scrollToTop}
        >
          GO TOP
        </button>
      </div>
      <div className="space-y-12 lg:flex justify-between items-end mt-[80px]">
        {links.map((link) => (
          <div key={link.name}>
            <h3 className="text-xl font-semibold">{link.name}</h3>
            {link.url ? (
              <a href={link.url} target="_blank" rel="noreferrer">
                <p className="text-xs text-gray-200 mt-2 flex items-center">
                  {link.text}
                  {link.name === "Mail" && (
                    <div
                      className="relative group flex items-center ml-2 cursor-pointer"
                      onClick={handleCopy}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
                        viewBox="0 0 100 100"
                      >
                        <rect
                          x="20"
                          y="20"
                          width="60"
                          height="60"
                          rx="5"
                          ry="5"
                          fill="#cccccc"
                          stroke="#000000"
                          stroke-width="2"
                        />
                        <rect
                          x="30"
                          y="30"
                          width="60"
                          height="60"
                          rx="5"
                          ry="5"
                          fill="#ffffff"
                          stroke="#000000"
                          stroke-width="2"
                        />
                      </svg>
                      {/* Tooltip */}
                      <span className="absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                        {copyText}
                      </span>
                    </div>
                  )}
                </p>
              </a>
            ) : (
              <p className="text-xs text-gray-200 mt-2 flex items-center">
                {link.text}
                {link.name === "Mail" && (
                  <div
                    className="relative group flex items-center ml-2 cursor-pointer"
                    onClick={handleCopy}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 100 100"
                    >
                      <rect
                        x="20"
                        y="20"
                        width="60"
                        height="60"
                        rx="5"
                        ry="5"
                        fill="#cccccc"
                        stroke="#000000"
                        stroke-width="2"
                      />
                      <rect
                        x="30"
                        y="30"
                        width="60"
                        height="60"
                        rx="5"
                        ry="5"
                        fill="#ffffff"
                        stroke="#000000"
                        stroke-width="2"
                      />
                    </svg>
                    {/* Tooltip */}
                    <span className="absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                      {copyText}
                    </span>
                  </div>
                )}
              </p>
            )}
          </div>
        ))}
        <div>
          <h3 className="text-xl font-semibold">CV</h3>
          <p className="text-xs text-gray-200 mt-2">Read cv</p>
        </div>
        <div className="justify-end relative flex lg:hidden">
          <button
            className="absolute bottom-[48px] border border-white rounded-full text-[10px] w-[80px] go-top-btn"
            onClick={() => scrollTo(0, 0)}
          >
            GO TOP
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
