import styles from "./BlogCard.module.css";

type BlogCardProps = {
  title: string;
  date: string;
  image?: string;
};

export default function BlogCard({ title, date, image }: BlogCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        {image ? <img src={image} alt={title} /> : "Image"}
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.date}>{date}</div>
    </div>
  );
}
