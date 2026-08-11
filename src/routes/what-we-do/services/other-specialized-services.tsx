import { createFileRoute } from "@tanstack/react-router";
import { OtherSpecializedServicesPage } from "@/pages/what-we-do/services/OtherSpecializedServicesPage";

export const Route = createFileRoute("/what-we-do/services/other-specialized-services")({
  head: () => ({
    meta: [
      { title: "Other Specialized Services | Alpha IT Managed Services" },
      {
        name: "description",
        content:
          "Alpha ITMS Other Specialized Services: End-User Training, Staff Augmentation, Knowledge Management, and Audio Visual Services. Tailored solutions for unique organizational needs.",
      },
    ],
    links: [{ rel: "canonical", href: "/what-we-do/services/other-specialized-services" }],
  }),
  component: OtherSpecializedServicesPage,
});
