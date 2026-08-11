import { createFileRoute } from "@tanstack/react-router";
import { PharmaceuticalsPage } from "@/pages/what-we-do/industries/PharmaceuticalsPage";

export const Route = createFileRoute("/what-we-do/industries/pharmaceuticals")({
  head: () => ({
    meta: [
      { title: "Pharmaceuticals | Alpha IT Managed Services" },
      {
        name: "description",
        content:
          "Alpha ITMS provides specialized IT solutions for pharmaceuticals, accelerating drug discovery with AI/ML, optimizing manufacturing, and ensuring regulatory compliance.",
      },
    ],
    links: [{ rel: "canonical", href: "/what-we-do/industries/pharmaceuticals" }],
  }),
  component: PharmaceuticalsPage,
});
