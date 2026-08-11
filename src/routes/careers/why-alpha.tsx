import { createFileRoute } from "@tanstack/react-router";
import { WhyAlphaPage } from "@/pages/careers/WhyAlphaPage";

export const Route = createFileRoute("/careers/why-alpha")({
  head: () => ({
    meta: [
      { title: "Why Alpha | Alpha IT Managed Services" },
      {
        name: "description",
        content:
          "Explore why top talent chooses Alpha Technologies. Culture of excellence, innovation, global impact, collaboration, and work-life balance. Join a team revolutionizing technology.",
      },
    ],
    links: [{ rel: "canonical", href: "/careers/why-alpha" }],
  }),
  component: WhyAlphaPage,
});
