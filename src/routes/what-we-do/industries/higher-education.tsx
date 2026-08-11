import { createFileRoute } from "@tanstack/react-router";
import { HigherEducationPage } from "@/pages/what-we-do/industries/HigherEducationPage";

export const Route = createFileRoute("/what-we-do/industries/higher-education")({
  head: () => ({
    meta: [
      { title: "Higher Education | Alpha IT Managed Services" },
      {
        name: "description",
        content:
          "Alpha IT empowers higher education institutions with bespoke IT solutions that enhance teaching, streamline administration, and ensure robust security.",
      },
    ],
    links: [{ rel: "canonical", href: "/what-we-do/industries/higher-education" }],
  }),
  component: HigherEducationPage,
});
