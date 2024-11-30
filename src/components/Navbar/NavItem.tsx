import Image from "next/image";
import styles from "@/styles/Navbar.module.css";


export default function NavItem({name, link, activeSection, handleScroll}: {name: string, link: string, activeSection: string, handleScroll: (id: string) => void}) {
  return (
    <div className="cursor-pointer" onClick={() => handleScroll(link)}>
    <div
      className={`flex items-center text-sm cursor-pointer text-white ${
        activeSection === link ? styles.active : ""
      }`}
    >
      <p className="ml-4 font-light hover:text-gray-400">{name}</p>
      {activeSection === link ? (
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
    </div>
  </div>
  )
}
