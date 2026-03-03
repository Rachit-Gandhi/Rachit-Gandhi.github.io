import PortfolioAccordion from "../molecules/PortfolioAccordion";
import type { PortfolioItem } from "../molecules/PortfolioAccordion";
import styles from "./PortfolioSection.module.css";

export default function PortfolioSection() {
  const workItems: PortfolioItem[] = [
    { title: "Role / Company", description: "Details soon" },
  ];
  const projectItems: PortfolioItem[] = [
    { title: "Project", description: "Details soon", images: ["", "", ""] },
  ];
  const educationItems: PortfolioItem[] = [
    { title: "Institution", description: "Details soon" },
  ];

  return (
    <section className={styles.section} id="portfolio">
      <div className={styles.header}>
        <h2 className={styles.title}>Portfolio</h2>
      </div>
      <div className={styles.stack}>
        <PortfolioAccordion title="Work Experience" items={workItems} />
        <PortfolioAccordion title="Projects" items={projectItems} linkHref="/portfolio" anchorId="projects" />
        <PortfolioAccordion title="Education" items={educationItems} />
      </div>
    </section>
  );
}
