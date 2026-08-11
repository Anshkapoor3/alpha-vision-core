import { createFileRoute } from "@tanstack/react-router";
import { FinancialServicesPage } from "@/pages/what-we-do/industries/FinancialServicesPage";

export const Route = createFileRoute("/what-we-do/industries/financial-services")({
  head: () => ({
    meta: [
      { title: "Financial Services | Alpha IT Managed Services" },
      {
        name: "description",
        content:
          "Alpha ITMS delivers tailored IT solutions for financial services, boosting security, optimizing operations, and driving innovation. Dedicated support for banking, capital markets, and insurance.",
      },
    ],
    links: [{ rel: "canonical", href: "/what-we-do/industries/financial-services" }],
  }),
  component: FinancialServicesPage,
});
