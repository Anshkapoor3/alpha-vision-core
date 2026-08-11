import { createFileRoute } from "@tanstack/react-router";
import { IndustriesPage } from "@/pages/what-we-do/IndustriesPage";

export const Route = createFileRoute("/what-we-do/industries")({
  head: () => ({
    meta: [
      { title: "Industries | Alpha IT Managed Services" },
      {
        name: "description",
        content:
          "Alpha ITMS serves 10 industries including Financial Services, Retail, Manufacturing, Pharmaceuticals, Telecommunications, Higher Education, Non-Profit, Government, Insurance, and R&D with tailored technology solutions.",
      },
    ],
    links: [{ rel: "canonical", href: "/what-we-do/industries" }],
  }),
  component: IndustriesPage,
});
