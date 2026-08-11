import { createFileRoute } from "@tanstack/react-router";
import { ManagedITServicesPage } from "@/pages/what-we-do/services/ManagedITServicesPage";

export const Route = createFileRoute("/what-we-do/services/managed-it-services")({
  head: () => ({
    meta: [
      { title: "Managed IT Services | Alpha IT Managed Services" },
      {
        name: "description",
        content:
          "Alpha ITMS Managed IT Services: 24/7 proactive monitoring, maintenance, security, and support. Reduce downtime, increase efficiency, enhance security, and improve productivity with our comprehensive managed solutions.",
      },
    ],
    links: [{ rel: "canonical", href: "/what-we-do/services/managed-it-services" }],
  }),
  component: ManagedITServicesPage,
});
