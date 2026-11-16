import { createFileRoute } from "@tanstack/react-router";
import { Intelligence } from "@/components/supply-modules";
export const Route = createFileRoute("/intelligence")({
  head: () => ({
    meta: [
      { title: "AI intelligence | Supply Chain IQ" },
      {
        name: "description",
        content:
          "AI intelligence for Supply Chain IQ: evidence-based supply chain risk analysis and decision support.",
      },
      { property: "og:title", content: "AI intelligence | Supply Chain IQ" },
      {
        property: "og:description",
        content:
          "AI intelligence for Supply Chain IQ: evidence-based supply chain risk analysis and decision support.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Intelligence,
});
