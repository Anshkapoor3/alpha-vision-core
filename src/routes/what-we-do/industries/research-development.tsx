import { createFileRoute } from "@tanstack/react-router";
import { ResearchDevelopmentPage } from "@/pages/what-we-do/industries/ResearchDevelopmentPage";

export const Route = createFileRoute("/what-we-do/industries/research-development")({
  head: () => ({
    meta: [
      { title: "Research & Development | Alpha IT Managed Services" },
      {
        name: "description",
        content:
          "Alpha ITMS revolutionizes R&D operations with tailored IT solutions, enhancing data analysis, high-performance computing, and accelerating discovery.",
      },
    ],
    links: [{ rel: "canonical", href: "/what-we-do/industries/research-development" }],
  }),
  component: ResearchDevelopmentPage,
});
