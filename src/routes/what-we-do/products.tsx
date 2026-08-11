import { createFileRoute } from "@tanstack/react-router";
import { ProductsPage } from "@/pages/what-we-do/ProductsPage";

export const Route = createFileRoute("/what-we-do/products")({
  head: () => ({
    meta: [
      { title: "Products & Platforms | Alpha IT Managed Services" },
      {
        name: "description",
        content:
          "Explore Alpha ITMS products and platforms including Password Reset Tool and Forecasting Tool designed to streamline operations and drive efficiency.",
      },
    ],
    links: [{ rel: "canonical", href: "/what-we-do/products" }],
  }),
  component: ProductsPage,
});
