import type { Metadata } from "next";
import RockOnePillarPage from "@/components/RockOnePillarPage";
import { pillarPages } from "@/app/rock-one-pillars-data";
import "../rock-one-pillars.css";

const page = pillarPages["rock-one-agents-ai-consultation"];

export const metadata: Metadata = {
  title: "Rock One Agents & AI Consultation",
  description:
    "Rock One Agents and AI Consultation explains practical AI agents, AI workflow planning, and future-ready voice agent strategy.",
  alternates: { canonical: "/rock-one-agents-ai-consultation/" },
  openGraph: {
    title: "Rock One Agents & AI Consultation",
    description:
      "Practical AI agents, workflow planning, and future-ready voice agent strategy for business operations.",
    url: "/rock-one-agents-ai-consultation/",
    type: "website",
  },
};

export default function RockOneAgentsAiConsultationPage() {
  return <RockOnePillarPage page={page} />;
}
