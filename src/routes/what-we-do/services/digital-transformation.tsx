import { createFileRoute } from "@tanstack/react-router";
import { DigitalTransformationPage } from "@/pages/what-we-do/services/DigitalTransformationPage";

export const Route = createFileRoute("/what-we-do/services/digital-transformation")({
  head: () => ({
    meta: [
      { title: "Digital Transformation | Alpha IT Managed Services" },
      {
        name: "description",
        content:
          "Alpha ITMS Digital Transformation: Strategic planning, IoT solutions, business process automation, and customer experience enhancement. Propel your organization into the future with comprehensive digital transformation services.",
      },
    ],
    links: [{ rel: "canonical", href: "/what-we-do/services/digital-transformation" }],
  }),
  component: DigitalTransformationPage,
});
