import { createFileRoute } from "@tanstack/react-router";
import { ForecastingToolPage } from "@/pages/what-we-do/products/ForecastingToolPage";

export const Route = createFileRoute("/what-we-do/products/forecasting-tool")({
  head: () => ({
    meta: [
      { title: "Forecasting Tool | Alpha IT Managed Services" },
      {
        name: "description",
        content:
          "Alpha ITMS Forecasting Tool: AI-powered predictive planning with automated machine learning, scenario modeling, explainable predictions, and ERP/EPM integration for finance and operations.",
      },
    ],
    links: [{ rel: "canonical", href: "/what-we-do/products/forecasting-tool" }],
  }),
  component: ForecastingToolPage,
});
