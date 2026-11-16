import { createFileRoute } from "@tanstack/react-router";
import { Comparison } from "@/components/supply-modules";
export const Route = createFileRoute("/comparison")({
  head: () => ({
    meta: [
      { title: "Comparative analysis | Supply Chain IQ" },
      {
        name: "description",
        content:
          "Comparative analysis for Supply Chain IQ: evidence-based supply chain risk analysis and decision support.",
      },
      { property: "og:title", content: "Comparative analysis | Supply Chain IQ" },
      {
        property: "og:description",
        content:
          "Comparative analysis for Supply Chain IQ: evidence-based supply chain risk analysis and decision support.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Comparison,
});
