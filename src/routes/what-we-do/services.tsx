import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage } from "@/pages/what-we-do/ServicesPage";

export const Route = createFileRoute("/what-we-do/services")({
  head: () => ({
    meta: [
      { title: "Services | Alpha IT Managed Services" },
      {
        name: "description",
        content:
          "Alpha ITMS services: Managed IT Services, Cyber Security, Cloud Services, Digital Transformation, IT Strategy & Planning, IT Implementation & Integration, Data Services, Custom Product-Application Development, and Other Specialized Services.",
      },
    ],
    links: [{ rel: "canonical", href: "/what-we-do/services" }],
  }),
  component: ServicesPage,
});
