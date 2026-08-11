import { createFileRoute } from "@tanstack/react-router";
import { AboutUs } from "@/pages/who-we-are/AboutUs";

export const Route = createFileRoute("/who-we-are/about-us")({
  head: () => ({
    meta: [
      { title: "About Us | Alpha IT Managed Services" },
      { name: "description", content: "About Alpha IT Managed Services." },
    ],
    links: [{ rel: "canonical", href: "/who-we-are/about-us" }],
  }),
  component: AboutUs,
});
