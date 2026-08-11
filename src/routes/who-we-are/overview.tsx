import { createFileRoute } from "@tanstack/react-router";
import { Overview } from "@/pages/who-we-are/Overview";

export const Route = createFileRoute("/who-we-are/overview")({
  head: () => ({
    meta: [
      { title: "Overview | Alpha IT Managed Services" },
      { name: "description", content: "Overview of Alpha IT Managed Services." },
    ],
    links: [{ rel: "canonical", href: "/who-we-are/overview" }],
  }),
  component: Overview,
});
