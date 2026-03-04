import PortfolioAccordion from "../molecules/PortfolioAccordion";
import type { PortfolioItem } from "../molecules/PortfolioAccordion";
import ProjectsList from "./ProjectsList";
import styles from "./PortfolioSection.module.css";

export default function PortfolioSection() {
  const workItems: PortfolioItem[] = [
    {
      title: "Q3 Technologies · Software Developer (Aug 2025 – Present)",
      description:
        "Multi-agent chatbot with Azure OpenAI Foundry + Azure AI Search (RAG + tool calling). OAuth 2.0 integration with Canvas LMS via JWT. Refactored Django REST API to DRF (30% codebase reduction). Built reusable Vue.js chatbot component with markdown streaming (80% faster client integration).",
    },
    {
      title: "KPMG India · Solutions Intern (Jul 2024 – Dec 2024)",
      description:
        "Built solar downtime & power prediction model on Azure Functions + Azure ML. Reduced transaction data processing from 1 day to 2 hours using Databricks/Spark. Integer Programming model improved power station scheduling and cut operational costs by ~20%.",
    },
  ];

  const projectItems: PortfolioItem[] = [
    {
      title: "Projects — see full list",
      description: "Go to Projects for full details",
      images: [],
    },
  ];

  const educationItems: PortfolioItem[] = [
    {
      title:
        "BITS Pilani (Pilani Campus) — B.E. (Hons.) E&I + M.Sc. (Hons.) Mathematics (Sep 2020 – Jun 2025)",
      description: "Pilani, India",
    },
  ];

  return (
    <section className={styles.section} id="portfolio">
      <div className={styles.header}>
        <h2 className={styles.title}>Portfolio</h2>
      </div>
      <div className={styles.stack}>
        <PortfolioAccordion title="Work Experience" items={workItems} />
        <PortfolioAccordion title="Projects" items={projectItems} linkHref="/projects" anchorId="projects" />
        <div className={styles.miniProjects}>
          <ProjectsList limit={3} />
        </div>
        <PortfolioAccordion title="Education" items={educationItems} />
      </div>
    </section>
  );
}
