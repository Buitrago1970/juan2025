import Head from "next/head";
import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
}

export default function MainLayout({ children, title, description }: MainLayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div >
        <Navbar />
        <main >{children}</main>
     </div>
    </>
  );
}