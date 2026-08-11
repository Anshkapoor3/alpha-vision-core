import { createFileRoute } from "@tanstack/react-router";
import { ManufacturingPage } from "@/pages/what-we-do/industries/ManufacturingPage";

export const Route = createFileRoute("/what-we-do/industries/manufacturing")({
  head: () => ({
    meta: [
      { title: "Manufacturing | Alpha IT Managed Services" },
      {
        name: "description",
        content:
          "Alpha IT delivers tailored IT solutions for manufacturing, enhancing production efficiency, improving supply chain management, and ensuring robust security.",
      },
    ],
    links: [{ rel: "canonical", href: "/what-we-do/industries/manufacturing" }],
  }),
  component: ManufacturingPage,
});
