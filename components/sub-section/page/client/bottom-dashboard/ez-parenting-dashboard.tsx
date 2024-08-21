import { PageTransitionContext } from "@/components/provider/page-transition-provider";
import IconBox from "@/components/trigger/box/icon-box";
import TextBox from "@/components/trigger/box/text-box";
import KnowMoreButton from "@/components/trigger/button/know-more-button";
import TeamBox from "@/components/trigger/page/client/team-box";
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
  const { pushPage } = useContext(PageTransitionContext);
  const client = CLIENT_EXP[0];

  return [
    <div
      key={key}
      className={twMerge(
        BOTTOM_DASHBOARD_CLASSNAME.normal,
        "bg-gradient-to-br from-orange-400 to-orange-700"
      )}
    >
      <IconBox
        Icon={
          <Image
            src={CLIENT_EXP[0].images.logo}
            alt={CLIENT_EXP[0].client.name}
            height={100}
            width={100}
          />
        }
        Value={<p className="text-center">{client.client.desc}</p>}
        title={CLIENT_EXP[0].client.name}
        titleColor="text-white"
      />
    </div>,
    <div className={twMerge(BOTTOM_DASHBOARD_CLASSNAME.normal)} key={key + 1}>
      <TextBox
        title="Usage"
        color="white"
        Icon={
          <Image
            src={"/image/page/work/assets/how.png"}
            alt="how"
            width={20}
            height={20}
          />
        }
      >
        <div className={twMerge("flex flex-col items-center gap-y-8")}>
          <p>{client.usage}</p>
          <KnowMoreButton
            text="Visit Website"
            onClick={() => {
              pushPage(client.deployment);
            }}
          />
        </div>
      </TextBox>
    </div>,
    <div className={twMerge(BOTTOM_DASHBOARD_CLASSNAME.team)} key={key + 2}>
      <TextBox
        title="My Team"
        color="white"
        Icon={
          <Image
            src={"/image/page/client/assets/arachnova.png"}
            alt="my team  "
            width={40}
            height={40}
          />
        }
      >
        <TeamBox team={client.team} />
      </TextBox>
    </div>,
    <div
      className={twMerge(BOTTOM_DASHBOARD_CLASSNAME.techStack)}
      key={key + 3}
    >
      <TextBox
        title="Tech Stack"
        color="white"
        Icon={
          <Image
            src={"/image/page/work/assets/how.png"}
            alt="how"
            width={20}
            height={20}
          />
        }
      >
        <div className={twMerge("grid grid-cols-2 gap-x-9 gap-y-5 w-full")}>
          {client.techStack.map((tech, index) => (
            <div
              key={index}
              className={twMerge(
                "flex flex-row items-center justify-between gap-x-3"
              )}
            >
              <p className="font-bold">{tech.name}</p>
              <div className="relative w-[20px] h-[20px]">
                <Image
                  src={tech.image}
                  alt={tech.name}
                  fill
                  objectFit="contain"
                />
              </div>
            </div>
          ))}
        </div>
      </TextBox>
    </div>,
  ];
};

export default EzParentingDashboard;
