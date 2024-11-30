
export default function NavbarResponsive() {
  const navegation = [
    { name: "Homepage", link: "home" },
    { name: "Work", link: "work" },
    { name: "About", link: "about" },
    { name: "Contact", link: "contact" },
  ];
  return (
    <div className="flex mx-3 mt-2 mb-14">
      <div>
        <div className="w-8 h-11 border border-yellow-900 rounded"></div>
      </div>
      <div className="flex justify-end items-center w-full space-x-8 font-medium ">
        {navegation.map((nav, index) => (
          <a
            className="cursor-pointer text-xs lg:text-sm text-[#E9E9E9]"
            key={index}
          >
            <p>{nav.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
