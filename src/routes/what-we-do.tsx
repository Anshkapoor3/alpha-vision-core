import { createFileRoute } from "@tanstack/react-router";
import { WhatWeDo } from "@/pages/what-we-do/WhatWeDo";

export const Route = createFileRoute("/what-we-do")({
  head: () => ({
    meta: [
      { title: "What We Do | Alpha IT Managed Services" },
      {
        name: "description",
        content:
          "Explore Alpha ITMS industries, products & platforms, and services. We deliver tailored technology solutions across financial services, retail, healthcare, government, and more.",
      },
    ],
    links: [{ rel: "canonical", href: "/what-we-do" }],
  }),
  component: WhatWeDo,
});
