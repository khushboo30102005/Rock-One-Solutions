import type { Metadata } from "next";
import RockOnePillarPage from "@/components/RockOnePillarPage";
import { pillarPages } from "@/app/rock-one-pillars-data";
import "../rock-one-pillars.css";

const page = pillarPages["rock-one-automation"];

export const metadata: Metadata = {
  title: "Business Workflow & CRM Automation | Rock One Solutions",
  description:
    "Eliminate manual tasks with custom workflow automation by Rock One Solutions. Seamlessly connect website forms, CRM routing, instant alerts, and automated follow-ups.",
  alternates: { canonical: "/rock-one-automation/" },
  openGraph: {
    title: "Business Workflow & CRM Automation | Rock One Solutions",
    description:
      "Eliminate manual tasks with custom workflow automation by Rock One Solutions. Seamlessly connect website forms, CRM routing, instant alerts, and automated follow-ups.",
    url: "/rock-one-automation/",
    type: "website",
  },
};

export default function RockOneAutomationPage() {
  return <RockOnePillarPage page={page} />;
}
