import { createFileRoute } from "@tanstack/react-router";
import { Laboratory } from "@/components/supply-modules";
export const Route = createFileRoute("/laboratory")({
  head: () => ({
    meta: [
      { title: "ML laboratory | Supply Chain IQ" },
      {
        name: "description",
        content:
          "ML laboratory for Supply Chain IQ: evidence-based supply chain risk analysis and decision support.",
      },
      { property: "og:title", content: "ML laboratory | Supply Chain IQ" },
      {
        property: "og:description",
        content:
          "ML laboratory for Supply Chain IQ: evidence-based supply chain risk analysis and decision support.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Laboratory,
});
