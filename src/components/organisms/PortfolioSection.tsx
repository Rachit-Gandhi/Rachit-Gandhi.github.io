import PortfolioAccordion, { PortfolioItem } from "../molecules/PortfolioAccordion";
import styles from "./PortfolioSection.module.css";

export default function PortfolioSection() {
  const workItems: PortfolioItem[] = [
    { title: "Role / Company", description: "Details soon", images: ["", "", ""] },
  ];
  const projectItems: PortfolioItem[] = [
    { title: "Project", description: "Details soon", images: ["", "", ""] },
  ];
  const educationItems: PortfolioItem[] = [
    { title: "Institution", description: "Details soon", images: ["", "", ""] },
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Portfolio</h2>
      <div className={styles.stack}>
        <PortfolioAccordion title="Work Experience" items={workItems} />
        <PortfolioAccordion title="Projects" items={projectItems} />
        <PortfolioAccordion title="Education" items={educationItems} />
      </div>
    </section>
  );
}
