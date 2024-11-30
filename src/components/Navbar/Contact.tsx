import React from "react";

export default function Contact({ socialMedia }: { socialMedia: string[] }) {
  return (
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
  )
}
