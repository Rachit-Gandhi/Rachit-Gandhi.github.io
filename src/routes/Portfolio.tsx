import styles from "./Portfolio.module.css";
import PortfolioSection from "../components/organisms/PortfolioSection";

export default function Portfolio() {
  return (
    <section className={styles.page}>
      <div className={styles.header}>
        <h2>Portfolio</h2>
      </div>
      <div className={styles.scrollArea}>
        <PortfolioSection />
      </div>
    </section>
  );
}
