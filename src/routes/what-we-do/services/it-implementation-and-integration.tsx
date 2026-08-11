import { createFileRoute } from "@tanstack/react-router";
import { ITImplementationAndIntegrationPage } from "@/pages/what-we-do/services/ITImplementationAndIntegrationPage";

export const Route = createFileRoute("/what-we-do/services/it-implementation-and-integration")({
  head: () => ({
    meta: [
      { title: "IT Implementation and Integration | Alpha IT Managed Services" },
      {
        name: "description",
        content:
          "Alpha ITMS IT Implementation and Integration: Expert deployment and integration services ensuring technology systems work harmoniously. End-to-end support from planning to deployment.",
      },
    ],
    links: [{ rel: "canonical", href: "/what-we-do/services/it-implementation-and-integration" }],
  }),
  component: ITImplementationAndIntegrationPage,
});
