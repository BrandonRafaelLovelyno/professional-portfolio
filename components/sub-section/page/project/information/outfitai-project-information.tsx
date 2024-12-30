import { MdTipsAndUpdates } from "react-icons/md";
import CODING_PRO, { TechStack } from "@/data/project/project-data";
import Image from "next/image";
import React, { useContext } from "react";
import { twMerge } from "tailwind-merge";
import { FaCodeBranch } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa";
import { ProjectContext } from "@/components/provider/project-provider";
import { PageTransitionContext } from "@/components/provider/page-transition-provider";
import InformationBox from "@/components/trigger/display/information-box";

const OutfitAIProjectInformation = () => {
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
          "px-5 py-5",
          width > 480 ? "pr-[150px]" : "pr-[80px]",
          "to-[#03346E4D] from-[#5B209A] bg-gradient-to-br",
          "rounded-lg"
        )}
      >
        <p className="text-left text-lg font-bold text-white">
          Computer Vision
        </p>
        <p className="text-left text-3xl font-bold text-white">
          An Image object classifier for clothing
        </p>
        <Image
          width={width > 480 ? 150 : 100}
          height={width > 480 ? 150 : 100}
          src={
            "https://res.cloudinary.com/dohewcyes/image/upload/v1735539986/image/page/project/experience/outfitai/information/uawb219uqghcwaoyaqxk.png"
          }
          alt="overall"
          className="absolute right-[40px] -top-[100px] z-[1]"
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
        {CODING_PRO[3].techStack.map((tech: TechStack, index: number) => (
          <div key={index} className={twMerge("flex flex-row gap-x-5")}>
            <div className={twMerge("relative", "w-8 h-8")}>
              <Image
                src={tech.image}
                alt={tech.name}
                fill={true}
                objectFit="fill"
              />
            </div>
            <div className={twMerge("flex flex-col gap-y-1")}>
              <h2 className="text-xs font-bold text-black">{tech.name}</h2>
              <p className="text-[10px] font-bold text-black">
                {tech.description}
              </p>
            </div>
          </div>
        ))}
      </InformationBox>
      <InformationBox
        identifier="development"
        Icon={<MdTipsAndUpdates size={20} className="text-white" />}
        title={{
          text: "More features to come",
          position: "right",
          className: "text-black",
        }}
        backgroundColor="bg-gradient-to-br from-amber-400 to-amber-600"
        padding="px-5 pt-5 pb-12"
        image={
          <Image
            src={
              "https://res.cloudinary.com/dohewcyes/image/upload/v1735558684/image/page/project/experience/outfitai/information/dwhm7ktoiwsxnggxkwss.png"
            }
            className="absolute  -top-[200px] z-[1]"
            alt="development"
            width={width > 480 ? 200 : 150}
            height={width > 480 ? 200 : 150}
          />
        }
      >
        <p className="text-black text-right text-sm">
          I am planning to integrate
          <span className="font-bold text-black"> fashion matching style </span>
          to help users find the perfect outfit
        </p>
      </InformationBox>
      <InformationBox
        identifier="why"
        Icon={<FaQuestion size={20} className="text-white" />}
        title={{
          text: "How it works",
          position: "right",
          className: "text-white",
        }}
        backgroundColor="bg-gradient-to-bl from-emerald-800 to-emerald-400"
      >
        <p className="text-white text-right text-sm">
          The model detect and classify clothing into
          <span className="font-bold"> 13 classes</span> and draw
          <span className="font-bold"> bounding boxes</span>
        </p>
      </InformationBox>
      <div
        className={twMerge(
          "relative",
          "how",
          "flex flex-col gap-y-3",
          "px-10 py-8",
          "bg-gradient-to-br from-blue-400 to-blue-800",
          "rounded-lg"
        )}
      >
        <h2 className="text-center text-5xl font-bold text-white">
          Just pull the docker image and run the app
        </h2>
      </div>
    </div>
  );
};
export default OutfitAIProjectInformation;
