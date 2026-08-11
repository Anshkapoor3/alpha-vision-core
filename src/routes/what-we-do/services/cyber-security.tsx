import { createFileRoute } from "@tanstack/react-router";
import { CyberSecurityPage } from "@/pages/what-we-do/services/CyberSecurityPage";

export const Route = createFileRoute("/what-we-do/services/cyber-security")({
  head: () => ({
    meta: [
      { title: "Cyber Security | Alpha IT Managed Services" },
      {
        name: "description",
        content:
          "Alpha ITMS Cyber Security: Advanced threat detection, security assessments, strategy development, solution implementation, and incident response. Proactive protection against evolving cyber threats.",
      },
    ],
    links: [{ rel: "canonical", href: "/what-we-do/services/cyber-security" }],
  }),
  component: CyberSecurityPage,
});
