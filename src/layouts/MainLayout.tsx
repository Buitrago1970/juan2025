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
      <div className="lg:flex bg-black-gray min-h-screen">
        <div className="hidden lg:block fixed top-0 left-0 h-full w-[240px] z-50">
          <Navbar />
        </div>
        <div className="lg:hidden z-50">
          <NavbarResponsive />
        </div>
        <div className="w-full lg:pl-[240px]">
          <div className="content-animate">
            <main>{children}</main>
          </div>
        </div>
      </div>
    </>
  );
}
