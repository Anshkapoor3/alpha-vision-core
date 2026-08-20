import { createFileRoute } from "@tanstack/react-router";
import { PasswordResetToolPage } from "@/pages/what-we-do/products/PasswordResetToolPage";

export const Route = createFileRoute("/what-we-do/products/password-reset-tool")({
  head: () => ({
    meta: [
      { title: "Password Reset Tool | Alpha IT Managed Services" },
      {
        name: "description",
        content:
          "Alpha ITMS Password Reset Tool: secure, self-service password reset and account unlock for hybrid Active Directory and Entra ID. MFA enforcement, delegation, audit trails, and policy-driven automation.",
      },
    ],
    links: [{ rel: "canonical", href: "/what-we-do/products/password-reset-tool" }],
  }),
  component: PasswordResetToolPage,
});
