import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/pages/ContactPage";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Alpha IT Managed Services" },
      {
        name: "description",
        content:
          "Contact Alpha IT Managed Services. Get in touch for IT consulting, managed services, cloud solutions, and more. Office in Mohali, India.",
      },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});
