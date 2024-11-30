import MainLayout from "@/layouts/MainLayout";
import styles from "@/styles/Home.module.css";

export default function About() {
  return (
    <MainLayout title="About" description="About page">
      <div className={styles.page}>
        <h1>About Page</h1>
        <p>Esta es la página sobre mí.</p>
      </div>
    </MainLayout>
  );
}