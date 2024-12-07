import Image from "next/image";
import Link from "next/link";

export default function hackathon() {
  return (
    <div className="bg-black-gray text-white">
      {/* Imagen principal */}
      <div className="relative w-full h-[90vh] border-b border-b-gray-400">
        <Link href="/" className="relative z-50">
          <div className="absolute top-8 left-8 w-12 h-12 border border-white rounded-full flex items-center justify-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="white"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </div>
        </Link>
        <Image
          src="/solana_header.png"
          alt="Main Image"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Contenedor dividido */}
      <div className="flex flex-col lg:flex-row px-8 py-12 gap-6">
        {/* Columna izquierda (28%) */}
        <div className="lg:w-[28%] space-y-6">
          <h1 className="text-2xl font-bold uppercase">Solana eco eco</h1>
          <p>CRIPTO HACKATON</p>
        </div>

        {/* Columna derecha (72%) */}
        <div className="lg:w-[72%] space-y-4">
          <div>
            <div className="grid grid-cols-2 space-x-4">
              <p>
                For 2 years, I prototyped new ways to engage with computer
                interfaces, mostly working with voice and AI. Brain was one of
                the first companies to explore the idea of multimodal,
                generative interfaces.
              </p>

              <p>
                with the team has shaped many of the principles I design with
                now. Most of my work stayed in R&D but pieces of it have shipped
                and are now in the app store↗ .
              </p>
            </div>
            <div className="grid grid-cols-2 space-x-4">
              <div className="flex space-x-40">
                <div>
                  <h2 className="text-sm font-semibold text-gray-400 uppercase">
                    Role
                  </h2>
                  <p className="text-white">Design Consultant</p>
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-gray-400 uppercase">
                    Collaborators
                  </h2>
                  <p className="text-white w-2/3">
                    Jerry Yue (CEO), Gleb Kuznetsov
                  </p>
                </div>
              </div>
              <div className="flex space-x-40">
                <div>
                  <h2 className="text-sm font-semibold text-gray-400 uppercase">
                    Duration
                  </h2>
                  <p className="text-white">2020-2021</p>
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-gray-400 uppercase">
                    Tools
                  </h2>
                  <p className="text-white ">Figma, Origami Studio</p>
                </div>
              </div>
            </div>
          </div>

          {/* Imagen secundaria */}
          <div className="pt-20">
            <div>
              <Image
                src="/solana_header.png"
                alt="Main Image"
                layout="responsive"
                width={100}
                height={100}
              />
            </div>
            <p>
            COSAS DE ECO ECO 
            </p>
          </div>
          <div className="pt-20">
            <div>
              <Image
                src="/solana_header.png"
                alt="Main Image"
                layout="responsive"
                width={100}
                height={100}
              />
            </div>
            <p>
            COSAS DE ECO ECO 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
