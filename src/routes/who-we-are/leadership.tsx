import { createFileRoute } from "@tanstack/react-router";
import { Leadership } from "@/pages/who-we-are/Leadership";

const title = "Leadership | Alpha IT Managed Services";
const description =
  "Meet the executive leadership team at Alpha IT Managed Services. Ownership, rigour, and business excellence across 27 countries.";

export const Route = createFileRoute("/who-we-are/leadership")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/who-we-are/leadership" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/who-we-are/leadership" }],
  }),
  component: Leadership,
});
