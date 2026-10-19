import type { Metadata } from "next";
import RockOnePillarPage from "@/components/RockOnePillarPage";
import { pillarPages } from "@/app/rock-one-pillars-data";
import "../rock-one-pillars.css";

const page = pillarPages["rock-one-agents-ai-consultation"];

export const metadata: Metadata = {
  title: "AI Consultation & Voice Agent Strategy | Rock One Solutions",
  description:
    "Transform your business with practical AI agents and AI Voice Agent strategies. Book an AI consultation with Rock One Solutions to automate workflows and sales.",
  alternates: { canonical: "/rock-one-agents-ai-consultation/" },
  openGraph: {
    title: "AI Consultation & Voice Agent Strategy | Rock One Solutions",
    description:
      "Transform your business with practical AI agents and AI Voice Agent strategies. Book an AI consultation with Rock One Solutions to automate workflows and sales.",
    url: "/rock-one-agents-ai-consultation/",
    type: "website",
  },
};

export default function RockOneAgentsAiConsultationPage() {
  return <RockOnePillarPage page={page} />;
}
