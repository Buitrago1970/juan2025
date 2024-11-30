import MainLayout from "@/layouts/MainLayout";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <MainLayout title="Home" description="Welcome to my portfolio">
      <div className={styles.page}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>src/pages/index.tsx</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>
        <p>Bienvenido a mi portafolio web!</p>
        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      </div>
    </MainLayout>
  );
}