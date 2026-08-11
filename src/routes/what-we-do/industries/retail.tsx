import { createFileRoute } from "@tanstack/react-router";
import { RetailServicesPage } from "@/pages/what-we-do/industries/RetailServicesPage";

export const Route = createFileRoute("/what-we-do/industries/retail")({
  head: () => ({
    meta: [
      { title: "Retail Services | Alpha IT Managed Services" },
      {
        name: "description",
        content:
          "Alpha IT transforms retail operations with customized IT solutions that elevate customer experiences, streamline supply chains, and accelerate sales growth.",
      },
    ],
    links: [{ rel: "canonical", href: "/what-we-do/industries/retail" }],
  }),
  component: RetailServicesPage,
});
