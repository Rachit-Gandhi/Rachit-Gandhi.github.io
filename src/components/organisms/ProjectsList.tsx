import ProjectCard from "../molecules/ProjectCard";
import { projects } from "../../data/projects";
import styles from "./ProjectsList.module.css";

type ProjectsListProps = {
  limit?: number;
};

export default function ProjectsList({ limit }: ProjectsListProps) {
  const list = limit ? projects.slice(0, limit) : projects;
  return (
    <div className={styles.list}>
      {list.map((p) => (
        <ProjectCard key={p.slug} {...p} />
      ))}
    </div>
  );
}
