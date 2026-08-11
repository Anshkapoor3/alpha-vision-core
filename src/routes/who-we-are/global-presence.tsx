import { createFileRoute } from "@tanstack/react-router";
import { GlobalPresence } from "@/pages/who-we-are/GlobalPresence";

const title = "Global Presence | Alpha IT Managed Services";
const description =
  "Explore Alpha Technologies' global presence. Offices across America, Europe, and Asia delivering innovative IT solutions worldwide.";

export const Route = createFileRoute("/who-we-are/global-presence")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/who-we-are/global-presence" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/who-we-are/global-presence" }],
  }),
  component: GlobalPresence,
});
