import Head from "next/head";
import Navbar from "@/components/Navbar";
import NavbarResponsive from "@/components/NavbarResponsive";
import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
}

export default function MainLayout({
  children,
  title,
  description,
}: MainLayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="lg:flex bg-black-gray">
        <div className="hidden lg:flex navbar fixed top-0 left-0 h-full w-[240px] flex-col items-center">
          <Navbar />
        </div>
        <div className="lg:hidden">
          <NavbarResponsive />
        </div>
        <div className="m-0 main lg:ml-[240px] flex-1">
          <div className="content-animate">
            <main>{children}</main>
          </div>
        </div>
      </div>
    </>
  );
}
