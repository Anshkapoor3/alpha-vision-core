import { createFileRoute } from "@tanstack/react-router";
import { CustomProductApplicationDevelopmentPage } from "@/pages/what-we-do/services/CustomProductApplicationDevelopmentPage";

export const Route = createFileRoute("/what-we-do/services/custom-product-application-development")({
  head: () => ({
    meta: [
      { title: "Custom Product-Application Development | Alpha IT Managed Services" },
      {
        name: "description",
        content:
          "Alpha ITMS Custom Product-Application Development: full-lifecycle software & mobile application engineering, cloud-native development, UX/UI design, QA automation, DevSecOps, and product support. Product-minded, outcome-focused, IP-retaining.",
      },
    ],
    links: [{ rel: "canonical", href: "/what-we-do/services/custom-product-application-development" }],
  }),
  component: CustomProductApplicationDevelopmentPage,
});
