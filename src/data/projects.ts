import Gator, { meta as gatorMeta } from "../content/projects/gator.mdx";
import Grading, { meta as gradingMeta } from "../content/projects/automated-grading.mdx";
import Gateway, { meta as gatewayMeta } from "../content/projects/llm-api-gateway.mdx";

export type ProjectMeta = {
  title: string;
  date: string;
  stack: string;
  tags: string[];
  github?: string;
  website?: string;
  slug: string;
  Component: React.FC;
};

type MetaOnly = Omit<ProjectMeta, "slug" | "Component">;

export const projects: ProjectMeta[] = [
  { ...(gatorMeta as MetaOnly), slug: "gator", Component: Gator },
  { ...(gradingMeta as MetaOnly), slug: "automated-grading", Component: Grading },
  { ...(gatewayMeta as MetaOnly), slug: "llm-api-gateway", Component: Gateway },
];
