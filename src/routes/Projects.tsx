import styles from "./Projects.module.css";
import ProjectsList from "../components/organisms/ProjectsList";

export default function Projects() {
  return (
    <section className={styles.page}>
      <div className={styles.header}>
        <h2>Projects</h2>
      </div>
      <div className={styles.scrollArea}>
        <ProjectsList />
      </div>
    </section>
  );
}
