import styles from "@/styles/Contact.module.css";

export default function Contact() {
  const links = [
    {
      name: "Mail",
      url: "juanbuitrago2002@outlook.com",
      text: "juanbuitrago2002@outlook.com",
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/juan-buitrago-4b8b901b6/",
      text: "sebastianbbuitrago",
    },
    {
      name: "Github",
      url: "",
      text: "sebastianbbuitrago",
    },
  ];


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="text-white mr-2 sm:mr-7 mb-5">

        <h1 className={`${styles.titleContact}`}>LET’S CREATE BEAUTIFUL THINGS</h1>
      <div className="flex lg:justify-end mt-5 lg:mt-20">
        <p className="w-[450px] pr-5 text-sm">
          Thank you for visiting my portfolio. I am currently working for
          Betplay, but I am always interested in new challenges and
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
            <a href={link.url} target="_blank" rel="noreferrer">
              <p className="text-xs text-gray-200 mt-2">{link.text}</p>
            </a>
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
    </div>
  );
}
