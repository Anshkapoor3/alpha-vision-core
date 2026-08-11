import { createFileRoute } from "@tanstack/react-router";
import { CloudServicesPage } from "@/pages/what-we-do/services/CloudServicesPage";

export const Route = createFileRoute("/what-we-do/services/cloud-services")({
  head: () => ({
    meta: [
      { title: "Cloud Services | Alpha IT Managed Services" },
      {
        name: "description",
        content:
          "Alpha ITMS Cloud Services: Cloud infrastructure design, migration, security, and SaaS solutions. Scalable, secure, cost-effective cloud services tailored to your business needs.",
      },
    ],
    links: [{ rel: "canonical", href: "/what-we-do/services/cloud-services" }],
  }),
  component: CloudServicesPage,
});
