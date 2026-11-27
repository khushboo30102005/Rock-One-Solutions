import type { Metadata } from "next";
import RockOnePillarPage from "@/components/RockOnePillarPage";
import { pillarPages } from "@/app/rock-one-pillars-data";
import "../rock-one-pillars.css";

const page = pillarPages["rock-one-agents-ai-consultation"];

export const metadata: Metadata = {
  title: "AI Consultation & Voice Agent Strategy | Rock One Solutions",
  description:
    "Book an AI consultation with Rock One to find where AI agents and AI voice agents can automate workflows and sales tasks in your business.",
  alternates: { canonical: "/rock-one-agents-ai-consultation/" },
  openGraph: {
    title: "AI Consultation & Voice Agent Strategy | Rock One Solutions",
    description:
      "Book an AI consultation with Rock One to find where AI agents and AI voice agents can automate workflows and sales tasks in your business.",
    url: "/rock-one-agents-ai-consultation/",
    type: "website",
  },
};

export default function RockOneAgentsAiConsultationPage() {
  return <RockOnePillarPage page={page} />;
}
