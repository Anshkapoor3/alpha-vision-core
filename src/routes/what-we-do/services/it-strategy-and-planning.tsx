import { createFileRoute } from "@tanstack/react-router";
import { ITStrategyAndPlanningPage } from "@/pages/what-we-do/services/ITStrategyAndPlanningPage";

export const Route = createFileRoute("/what-we-do/services/it-strategy-and-planning")({
  head: () => ({
    meta: [
      { title: "IT Strategy and Planning | Alpha IT Managed Services" },
      {
        name: "description",
        content:
          "Alpha ITMS IT Strategy and Planning: Expert guidance to align technology with business goals. IT assessments, governance, risk management, technology roadmaps, and architecture design for long-term success.",
      },
    ],
    links: [{ rel: "canonical", href: "/what-we-do/services/it-strategy-and-planning" }],
  }),
  component: ITStrategyAndPlanningPage,
});
