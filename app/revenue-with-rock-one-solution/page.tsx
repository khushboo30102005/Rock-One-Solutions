import type { Metadata } from "next";
import RockOnePillarPage from "@/components/RockOnePillarPage";
import { pillarPages } from "@/app/rock-one-pillars-data";
import "../rock-one-pillars.css";

const page = pillarPages["revenue-with-rock-one-solution"];

export const metadata: Metadata = {
  title: "Revenue with Rock One Solution",
  description:
    "Revenue with Rock One Solution explains how we analyze lead, follow-up, campaign, and performance data to generate better revenue outcomes.",
  alternates: { canonical: "/revenue-with-rock-one-solution/" },
  openGraph: {
    title: "Revenue with Rock One Solution",
    description:
      "How Rock One Solutions uses lead, follow-up, campaign, and performance data to improve revenue outcomes.",
    url: "/revenue-with-rock-one-solution/",
    type: "website",
  },
};

export default function RevenueWithRockOneSolutionPage() {
  return <RockOnePillarPage page={page} />;
}
