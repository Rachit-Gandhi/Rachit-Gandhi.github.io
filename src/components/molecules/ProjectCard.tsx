import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
  title: string;
  summary: string;
  date: string;
  stack: string;
  tags: string[];
  slug: string;
};

export default function ProjectCard({ title, summary, date, stack, tags, slug }: ProjectCardProps) {
  return (
    <Link to={`/projects/${slug}`} className={styles.card}>
      <div className={`${styles.preview} ${styles[slug] ?? ""}`} aria-hidden="true">
        <span className={styles.previewLabel}>{slug === "traceflo" ? "RECORDED TRACE" : slug === "go-router" ? "ROUTING MAP" : "WORKFLOW"}</span>
        <div className={styles.previewFlow}><i /><b /><i /><b /><i /></div>
        <span className={styles.previewStatus}>{slug === "traceflo" ? "replayable" : slug === "go-router" ? "policy checked" : "shipped"}</span>
      </div>
      <div className={styles.header}>
        <div className={styles.title}>{title}</div>
        <ArrowUpRight size={16} className={styles.icon} />
      </div>
      <p className={styles.summary}>{summary}</p>
      <div className={styles.stack}>{stack}</div>
      <div className={styles.tags}>{tags.slice(0, 3).map((t) => <span key={t} className={styles.tag}>{t}</span>)}</div>
      <div className={styles.date}>{date}</div>
    </Link>
  );
}
