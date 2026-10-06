import type { Metadata } from "next";
import RockOnePillarPage from "@/components/RockOnePillarPage";
import { pillarPages } from "@/app/rock-one-pillars-data";
import "../rock-one-pillars.css";

const page = pillarPages["rock-one-automation"];

export const metadata: Metadata = {
  title: "Rock One Automation | Workflow and Handoff Automation",
  description:
    "Rock One Automation connects website forms, CRM routing, follow-up, alerts, and reporting into one clean workflow.",
  alternates: { canonical: "/rock-one-automation/" },
  openGraph: {
    title: "Rock One Automation | Workflow and Handoff Automation",
    description:
      "Connect website forms, CRM routing, follow-up, alerts, and reporting into one clean workflow.",
    url: "/rock-one-automation/",
    type: "website",
  },
};

export default function RockOneAutomationPage() {
  return <RockOnePillarPage page={page} />;
}
