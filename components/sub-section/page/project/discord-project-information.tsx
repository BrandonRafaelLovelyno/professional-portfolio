import { MdTipsAndUpdates } from "react-icons/md";
import CODING_PRO, { TechStack } from "@/data/project/project-data";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { FaCodeBranch } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa";
import { ProjectContext } from "@/components/provider/project-provider";
import { PageTransitionContext } from "@/components/provider/page-transition-provider";
import InformationBox from "@/components/trigger/display/information-box";

const DiscordProjectInformation = () => {
  const { isSelectingProject } = useContext(ProjectContext);
  const { width } = useContext(PageTransitionContext);
  return (
    <div
      className={twMerge(
        "discord-information-container",
        isSelectingProject ? "z-10" : "z-20"
      )}
    >
      <div
        className={twMerge(
          "relative",
          "overall",
          "flex flex-col gap-y-3",
          "pl-5 py-5",
          width > 480 ? "pr-[150px]" : "pr-[80px]",
          "from-[#9656CE] to-[#5B209A] bg-gradient-to-br",
          "rounded-lg"
        )}
      >
        <p className="text-left text-lg font-bold text-white">
          Web application
        </p>
        <p className="text-left text-3xl font-bold text-white">
          Community platform through voice calls, video calls, text messaging,
          and media
        </p>
        <Image
          width={width > 480 ? 400 : 300}
          height={width > 480 ? 400 : 300}
          src={"/image/page/project/discord-clone/information/overall.png"}
          alt="overall"
          className="absolute -right-[120px] -top-[120px] z-[1]"
        />
      </div>
      <InformationBox
        Icon={<FaCodeBranch size={20} className="text-white" />}
        identifier="tech-stack"
        title={{
          position: "left",
          text: "Tech stack",
        }}
        backgroundColor="bg-gradient-to-br from-neutral-400 to-neutral-100"
      >
        {CODING_PRO[1].Heading.techStack.map(
          (tech: TechStack, index: number) => (
            <div key={index} className={twMerge("flex flex-row gap-x-5")}>
              <Image src={tech.image} alt={tech.name} width={30} height={30} />
              <div className={twMerge("flex flex-col gap-y-1")}>
                <h2 className="text-xs font-bold text-black">{tech.name}</h2>
                <p className="text-[10px] font-bold text-black">
                  {tech.description}
                </p>
              </div>
            </div>
          )
        )}
      </InformationBox>
      <InformationBox
        identifier="development"
        Icon={<MdTipsAndUpdates size={20} className="text-white" />}
        title={{
          text: "More features to come",
          position: "right",
          className: "text-black",
        }}
        backgroundColor="bg-gradient-to-br from-[#E0E0E0] to-[#3A3A3A]"
        padding="px-5 pt-5 pb-12"
        image={
          <Image
            src={
              "/image/page/project/discord-clone/information/development.png"
            }
            className="absolute -left-[50px] -top-[80px] z-[1]"
            alt="development"
            width={width > 480 ? 200 : 150}
            height={width > 480 ? 200 : 150}
          />
        }
      >
        <p className="text-black text-right text-sm">
          I am planning to integrate
          <span className="font-bold text-black"> onboarding features</span> and
          <span className="font-bold text-black"> voting mechanism</span>
        </p>
      </InformationBox>
      <InformationBox
        identifier="why"
        Icon={<FaQuestion size={20} className="text-white" />}
        title={{
          text: "Why I made this",
          position: "right",
        }}
        backgroundColor="bg-gradient-to-br from-[#F2A07E] to-[#CFB095]"
      >
        <p className="text-black text-right text-sm">
          I value peoples
          <span className="font-bold"> space of belonging</span> and
          <span className="font-bold"> communities</span>
        </p>
      </InformationBox>
      <div
        className={twMerge(
          "relative",
          "how",
          "flex flex-col gap-y-3",
          "px-10 py-8",
          "from-[#CAB2FB] bg-gradient-to-b to-[#7E61AB] bg-opacity-20",
          "rounded-lg"
        )}
      >
        <h2 className="text-center text-5xl font-bold text-white">
          Just register and find your community
        </h2>
      </div>
    </div>
  );
};
export default DiscordProjectInformation;
