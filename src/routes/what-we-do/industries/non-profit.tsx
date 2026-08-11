import { createFileRoute } from "@tanstack/react-router";
import { NonProfitPage } from "@/pages/what-we-do/industries/NonProfitPage";

export const Route = createFileRoute("/what-we-do/industries/non-profit")({
  head: () => ({
    meta: [
      { title: "Non-Profit Agencies | Alpha IT Managed Services" },
      {
        name: "description",
        content:
          "Alpha ITMS provides tailored solutions for nonprofits, boosting efficiency, strengthening security, and advancing your mission with advanced technology.",
      },
    ],
    links: [{ rel: "canonical", href: "/what-we-do/industries/non-profit" }],
  }),
  component: NonProfitPage,
});
