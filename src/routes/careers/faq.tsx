import { createFileRoute } from "@tanstack/react-router";
import { FAQPage } from "@/pages/careers/FAQPage";

export const Route = createFileRoute("/careers/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | Alpha IT Managed Services" },
      {
        name: "description",
        content:
          "Frequently asked questions about Alpha Technologies services, solutions, support, careers, and more. Find clear and concise answers to common questions.",
      },
    ],
    links: [{ rel: "canonical", href: "/careers/faq" }],
  }),
  component: FAQPage,
});
