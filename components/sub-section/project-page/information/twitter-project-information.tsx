import { MdTipsAndUpdates } from "react-icons/md";
import CODING_PRO, {
  TechStack,
} from "@/data/project/coding/coding-project-data";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { FaCodeBranch } from "react-icons/fa";
import InformationBox from "@/components/trigger/project-page/information/information-box";
import { FaQuestion } from "react-icons/fa";
import { ProjectContext } from "@/components/provider/project-provider";
import { PageTransitionContext } from "@/components/provider/page-transition-provider";

const TwitterProjectInformation = () => {
  const { isSelectingProject } = useContext(ProjectContext);
  const { width } = useContext(PageTransitionContext);
  return (
    <div
      className={twMerge(
        "twitter-information-container",
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
          "from-blue-400 to-blue-800 bg-gradient-to-br",
          "rounded-lg"
        )}
      >
        <p className="text-left text-lg font-bold text-white">
          Web application
        </p>
        <p className="text-left text-3xl font-bold text-white">
          Social media application to share their opinion
        </p>
        <Image
          width={width > 480 ? 210 : 150}
          height={width > 480 ? 210 : 150}
          src={"/image/coding-pro/twitter-clone/information/overall.png"}
          alt="overall"
          className="absolute -right-[70px] -top-[0px] z-[1]"
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
        image={
          <Image
            src={"/image/coding-pro/twitter-clone/information/tech-stack.png"}
            alt=""
            width={width > 480 ? 200 : 150}
            height={width > 480 ? 200 : 150}
            className="absolute -right-10 z-[1] -bottom-0"
          />
        }
      >
        {CODING_PRO[0].Heading.techStack.map(
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
          className: "text-white",
        }}
        backgroundColor="bg-gradient-to-br from-[#D2042D] to-[#E40A3F]"
        padding="px-5 pt-5 pb-12"
      >
        <p className="text-white text-right text-sm">
          I am planning to integrate
          <span className="font-bold text-white"> people interest</span> and
          <span className="font-bold text-white"> video sharing</span>
        </p>
      </InformationBox>
      <InformationBox
        identifier="why"
        Icon={<FaQuestion size={20} className="text-white" />}
        title={{
          text: "Why I made this",
          position: "right",
        }}
        backgroundColor="bg-gradient-to-br from-[#EDC9AF] to-[#CFB095]"
      >
        <p className="text-black text-right text-sm">
          I value the richness of
          <span className="font-bold"> people perspectives</span> and
          <span className="font-bold"> positive discussion</span>
        </p>
      </InformationBox>
      <div
        className={twMerge(
          "relative",
          "how",
          "flex flex-col gap-y-3",
          "px-10 py-8",
          "from-blue-400 bg-gradient-to-br to-blue-600 bg-opacity-20",
          "rounded-lg"
        )}
      >
        <h2 className="text-center text-5xl font-bold text-white">
          Just sign in and share your opinion
        </h2>
      </div>
    </div>
  );
};
export default TwitterProjectInformation;
