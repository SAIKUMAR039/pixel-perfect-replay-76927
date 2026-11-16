import { createFileRoute } from "@tanstack/react-router";
import { DataManagement } from "@/components/supply-modules";
export const Route = createFileRoute("/data")({
  head: () => ({
    meta: [
      { title: "Data management | Supply Chain IQ" },
      {
        name: "description",
        content:
          "Data management for Supply Chain IQ: evidence-based supply chain risk analysis and decision support.",
      },
      { property: "og:title", content: "Data management | Supply Chain IQ" },
      {
        property: "og:description",
        content:
          "Data management for Supply Chain IQ: evidence-based supply chain risk analysis and decision support.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DataManagement,
});
