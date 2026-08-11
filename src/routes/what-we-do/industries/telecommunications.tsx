import { createFileRoute } from "@tanstack/react-router";
import { TelecommunicationsPage } from "@/pages/what-we-do/industries/TelecommunicationsPage";

export const Route = createFileRoute("/what-we-do/industries/telecommunications")({
  head: () => ({
    meta: [
      { title: "Telecommunications | Alpha IT Managed Services" },
      {
        name: "description",
        content:
          "Alpha IT delivers innovative solutions for telecommunications, enhancing network performance, improving security, and driving operational efficiency.",
      },
    ],
    links: [{ rel: "canonical", href: "/what-we-do/industries/telecommunications" }],
  }),
  component: TelecommunicationsPage,
});
