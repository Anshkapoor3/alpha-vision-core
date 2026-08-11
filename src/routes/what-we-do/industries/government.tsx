import { createFileRoute } from "@tanstack/react-router";
import { GovernmentPage } from "@/pages/what-we-do/industries/GovernmentPage";

export const Route = createFileRoute("/what-we-do/industries/government")({
  head: () => ({
    meta: [
      { title: "Government Agencies | Alpha IT Managed Services" },
      {
        name: "description",
        content:
          "Alpha ITMS provides specialized IT solutions for government agencies, enhancing efficiency, security, and innovation for effective public service.",
      },
    ],
    links: [{ rel: "canonical", href: "/what-we-do/industries/government" }],
  }),
  component: GovernmentPage,
});
