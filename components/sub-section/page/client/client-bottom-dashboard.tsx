import LinkedInBox from "@/components/trigger/page/client/linkedIn-box";
import LogoBox from "@/components/trigger/page/client/logo-box";
import TeamBox from "@/components/trigger/page/client/team-box";
import TechStackBox from "@/components/trigger/page/client/tech-stack-box";
import UsageBox from "@/components/trigger/page/client/usage-box";
import { Client } from "@/data/client/client-data";

interface Props {
  client: Client;
}

const key = 0;

export const BOTTOM_DASHBOARD_CLASSNAME = {
  normal:
    "h-fit w-[280px] md:w-[320px] pt-5 py-8 px-4 rounded-lg shadow-lg bg-black",
  team: "h-fit w-[360px] md:w-[420px] pt-5 py-8 px-4 rounded-lg shadow-lg bg-black",
  techStack: "h-fit w-[380px] pt-5 py-8 px-4 rounded-lg shadow-lg bg-black",
};

const ClientBottomDashboard: React.FC<Props> = ({ client }) => {
  return [
    <LogoBox client={client} key={key} />,
    <UsageBox client={client} key={key + 1} />,
    <TeamBox client={client} key={key + 2} imageUrl={client.team.logoImage} />,
    <TechStackBox key={key + 3} client={client} />,
  ];
};

export default ClientBottomDashboard;
