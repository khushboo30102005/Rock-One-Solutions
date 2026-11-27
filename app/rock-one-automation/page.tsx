import type { Metadata } from "next";
import RockOnePillarPage from "@/components/RockOnePillarPage";
import { pillarPages } from "@/app/rock-one-pillars-data";
import "../rock-one-pillars.css";

const page = pillarPages["rock-one-automation"];

export const metadata: Metadata = {
  title: "Business Workflow & CRM Automation | Rock One Solutions",
  description:
    "Connect website forms, CRM routing, instant alerts and automated follow-ups with CRM workflow automation to reduce manual tasks.",
  alternates: { canonical: "/rock-one-automation/" },
  openGraph: {
    title: "Business Workflow & CRM Automation | Rock One Solutions",
    description:
      "Connect website forms, CRM routing, instant alerts and automated follow-ups with CRM workflow automation to reduce manual tasks.",
    url: "/rock-one-automation/",
    type: "website",
  },
};

export default function RockOneAutomationPage() {
  return <RockOnePillarPage page={page} />;
}
