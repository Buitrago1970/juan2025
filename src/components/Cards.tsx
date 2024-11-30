import React from "react";

export default function Cards() {
  const services = [
    {
      title: "Design",
      description:
        "With a solid track record in designing websites, I deliver strong and user-friendly digital designs.",
    },
    {
      title: "Development",
      description:
        "I build scalable websites from scratch that seamlessly integrate with design, focusing on precision, user interaction, and accessibility using React, Angular, and Webflow.",
    },
    {
      title: "The full package",
      description:
        "A complete website from concept to implementation, that's what makes me stand out.",
    },
  ];

  return (
    <div>
      <h2 className="text-base lg:text-lg pl-2 lg:pl-0 bg-green-page w-[70%] lg:w-[250px] py-[2px] lg:text-center rounded-s mb-10 font-medium text-black lg:font-semibold lg:mb-20">
        What I can do for you...
      </h2>
      <div className="flex flex-col items-center justify-center lg:flex-row gap-x-10">
        {services.map((service, index) => (
          <div key={index} className="my-4 lg:my-10 w-full">
            <p className="mr-3 lg:mr-0 text-white mb-2 lg:mb-5 font-semibold text-xs lg:text-sm text-right lg:text-left">
              0{index + 1}
            </p>
            <div className="flex items-center justify-center lg:hidden">
              <div className="square"></div>
              <div className="line"></div>
            </div>
            <div className="lg:w-[343px] mb-7 lg:h-[168px] lg:px-8 pt-2 rounded-[25px] lg:border flex flex-col lg:items-center">
              <div className="flex lg:items-cente mb-3 lg:mb-6 mr-5 lg:mr-0">
                <h3 className="service-title text-[25px] lg:text-[30px] font-semibold text-white tracking-wide">
                  {service.title}
                </h3>
              </div>
              <p className="text-xs text-[#A7A7A7] lg:text-xs font-normal lg:text-[#ffffff] lg:text-center">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
