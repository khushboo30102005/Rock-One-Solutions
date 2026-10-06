import type { Metadata } from "next";
import RockOnePillarPage from "@/components/RockOnePillarPage";
import { pillarPages } from "@/app/rock-one-pillars-data";
import "../rock-one-pillars.css";

const page = pillarPages["rock-one-build"];

export const metadata: Metadata = {
  title: "Rock One Build | Websites, Apps and CRM",
  description:
    "Rock One Build explains how we develop websites, apps, and CRM systems together as one connected digital foundation.",
  alternates: { canonical: "/rock-one-build/" },
  openGraph: {
    title: "Rock One Build | Websites, Apps and CRM",
    description:
      "How Rock One Solutions develops websites, apps, and CRM systems as one connected digital foundation.",
    url: "/rock-one-build/",
    type: "website",
  },
};

export default function RockOneBuildPage() {
  return <RockOnePillarPage page={page} />;
}
