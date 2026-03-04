import BlogListItem from "../molecules/BlogListItem";
import styles from "./BlogList.module.css";

export const posts = [
  {
    title: "Sample Blog Post",
    date: "2026-03-03",
    slug: "sample-post",
  },
  {
    title: "Second Placeholder",
    date: "2026-03-02",
    slug: "second-post",
  },
  {
    title: "Third Placeholder",
    date: "2026-03-01",
    slug: "third-post",
  },
];

export default function BlogList() {
  return (
    <div className={styles.list}>
      {posts.map((p) => (
        <BlogListItem key={p.slug} {...p} />
      ))}
    </div>
  );
}
