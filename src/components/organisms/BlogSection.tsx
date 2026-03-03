import BlogCard from "../molecules/BlogCard";
import styles from "./BlogSection.module.css";

export default function BlogSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Blog</h2>
      <div className={styles.scroll}>
        <BlogCard title="Post title 1" date="Date" />
        <BlogCard title="Post title 2" date="Date" />
        <BlogCard title="Post title 3" date="Date" />
      </div>
    </section>
  );
}
