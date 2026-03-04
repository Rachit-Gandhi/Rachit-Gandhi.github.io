import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import styles from "./ProjectItem.module.css";

export default function ProjectItem() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <div>Project not found.</div>;

  const Post = project.Component;

  return (
    <section className={styles.page}>
      <div className={styles.header}>
        <h2>{project.title}</h2>
        <div className={styles.metaRow}>
          <span>{project.date}</span>
          <span>{project.stack}</span>
        </div>
        <div className={styles.tags}>
          {project.tags.map((t) => (
            <span key={t} className={styles.tag}>{t}</span>
          ))}
        </div>
        <div className={styles.links}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
          )}
          {project.website && (
            <a href={project.website} target="_blank" rel="noreferrer">Website</a>
          )}
        </div>
      </div>
      <article className={styles.content}>
        <Post />
      </article>
    </section>
  );
}
