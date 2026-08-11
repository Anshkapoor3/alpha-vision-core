import { createFileRoute } from "@tanstack/react-router";
import { DataServicesPage } from "@/pages/what-we-do/services/DataServicesPage";

export const Route = createFileRoute("/what-we-do/services/data-services")({
  head: () => ({
    meta: [
      { title: "Data Services | Alpha IT Managed Services" },
      {
        name: "description",
        content:
          "Alpha ITMS Data Services: Advanced analytics, data modernization, machine learning, and AI solutions. Unlock the full potential of your data with cutting-edge analytics and business intelligence.",
      },
    ],
    links: [{ rel: "canonical", href: "/what-we-do/services/data-services" }],
  }),
  component: DataServicesPage,
});
