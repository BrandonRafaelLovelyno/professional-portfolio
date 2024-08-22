import { PageTransitionContext } from "@/components/provider/page-transition-provider";
import IconBox from "@/components/trigger/box/icon-box";
import TextBox from "@/components/trigger/box/text-box";
import KnowMoreButton from "@/components/trigger/button/know-more-button";
import LogoBox from "@/components/trigger/page/client/logo-box";
import TeamBox from "@/components/trigger/page/client/team-box";
import TechStackBox from "@/components/trigger/page/client/tech-stack-box";
import UsageBox from "@/components/trigger/page/client/usage-box";
import { CLIENT_EXP } from "@/data/client/client-data";
import Image from "next/image";
import { useContext } from "react";
import { twMerge } from "tailwind-merge";

const key = 0;

export const BOTTOM_DASHBOARD_CLASSNAME = {
  normal:
    "h-fit w-[280px] md:w-[320px] pt-5 py-8 px-4 rounded-lg shadow-lg bg-black",
  team: "h-fit w-[360px] md:w-[420px] pt-5 py-8 px-4 rounded-lg shadow-lg bg-black",
  techStack: "h-fit w-[320px] pt-5 py-8 px-4 rounded-lg shadow-lg bg-black",
};

const EzParentingDashboard: React.FC = () => {
  const client = CLIENT_EXP[0];

  return [
    <LogoBox client={client} key={key} />,
    <UsageBox client={client} key={key + 1} />,
    <TeamBox client={client} key={key + 2} />,
    <TechStackBox key={key + 3} client={client} />,
  ];
};

export default EzParentingDashboard;
