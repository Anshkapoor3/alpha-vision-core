import { createFileRoute } from "@tanstack/react-router";
import { InsuranceServicesPage } from "@/pages/what-we-do/industries/InsuranceServicesPage";

export const Route = createFileRoute("/what-we-do/industries/insurance")({
  head: () => ({
    meta: [
      { title: "Insurance Services | Alpha IT Managed Services" },
      {
        name: "description",
        content:
          "Alpha ITMS provides customized IT solutions for the insurance industry, enhancing customer service, streamlining claims processing, and bolstering data security.",
      },
    ],
    links: [{ rel: "canonical", href: "/what-we-do/industries/insurance" }],
  }),
  component: InsuranceServicesPage,
});
