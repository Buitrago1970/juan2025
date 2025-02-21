

export default function NavbarResponsive() {
  const navegation = [
    { name: "Homepage", link: "header" },
    { name: "Work", link: "projects" },
    { name: "Contact", link: "contact" },
  ];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex mx-3 mt-2 mb-14">
      <div>
        <div className="w-8 h-11 border border-yellow-900 rounded"></div>
      </div>
      <div className="flex justify-end items-center w-full space-x-8 font-medium ">
        {navegation.map((nav, index) => (
          <div
            className="cursor-pointer text-xs lg:text-sm text-[#E9E9E9]"
            key={index}
            onClick={() => handleScroll(nav.link)}
          >
            <p>{nav.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
