import styles from "./Blog.module.css";
import BlogList from "../components/organisms/BlogList";

export default function Blog() {
  return (
    <section className={styles.page}>
      <div className={styles.header}>
        <h2>Blog</h2>
      </div>
      <div className={styles.scrollArea}>
        <BlogList />
      </div>
    </section>
  );
}
