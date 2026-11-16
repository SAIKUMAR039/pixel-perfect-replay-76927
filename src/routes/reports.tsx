import { createFileRoute } from "@tanstack/react-router";
import { Reports } from "@/components/supply-modules";
export const Route = createFileRoute("/reports")({
  head: () => ({
    meta: [
      { title: "Reports | Supply Chain IQ" },
      {
        name: "description",
        content:
          "Reports for Supply Chain IQ: evidence-based supply chain risk analysis and decision support.",
      },
      { property: "og:title", content: "Reports | Supply Chain IQ" },
      {
        property: "og:description",
        content:
          "Reports for Supply Chain IQ: evidence-based supply chain risk analysis and decision support.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Reports,
});
