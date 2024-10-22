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

const SpotifyProjectInformation = () => {
  const { isSelectingProject } = useContext(ProjectContext);
  const { width } = useContext(PageTransitionContext);
  return (
    <div
      className={twMerge(
        "spotify-information-container",
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
          "from-green-400 to-green-800 bg-gradient-to-br",
          "rounded-lg"
        )}
      >
        <p className="text-left text-lg font-bold text-black">
          Web application
        </p>
        <p className="text-left text-3xl font-bold text-black">
          Music application to share songs and listen seamlesly
        </p>
        <Image
          width={width > 480 ? 210 : 150}
          height={width > 480 ? 210 : 150}
          src={
            "https://res.cloudinary.com/dohewcyes/image/upload/v1724934236/image/page/project/experience/spotify-clone/information/ud4dxxpooaohrl7ios84.png"
          }
          alt="overall"
          className="absolute right-[10px] -top-[70px] z-[1]"
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
            src={
              "https://res.cloudinary.com/dohewcyes/image/upload/v1724934237/image/page/project/experience/spotify-clone/information/p8b4x5rhnduvthfqmadj.png"
            }
            alt=""
            width={width > 480 ? 150 : 110}
            height={width > 480 ? 150 : 110}
            className="absolute -right-[5%] z-[1] -bottom-[10%]"
          />
        }
      >
        {CODING_PRO[0].techStack.map((tech: TechStack, index: number) => (
          <div key={index} className={twMerge("flex flex-row gap-x-5")}>
            <Image
              src={tech.image}
              alt={tech.name}
              width={30}
              height={30}
              objectFit="contain"
            />
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
        }}
        backgroundColor="bg-gradient-to-br from-yellow-400 to-amber-500"
        image={
          <Image
            src={
              "https://res.cloudinary.com/dohewcyes/image/upload/v1724934245/image/page/project/experience/spotify-clone/information/rekhsgffytou9dyq8lju.png"
            }
            alt="development"
            width={130}
            height={130}
            className="absolute z-[1] bottom-0 translate-y-[30%] translate-x-[10%] right-0"
          />
        }
        padding="px-5 pt-5 pb-12"
      >
        <p className="text-black text-left text-sm">
          I am planning to integrate
          <span className="font-bold"> playlist features</span> and
          <span className="font-bold"> friend social features</span>
        </p>
      </InformationBox>
      <InformationBox
        identifier="why"
        Icon={<FaQuestion size={20} className="text-white" />}
        title={{
          text: "Why I made this",
          position: "right",
          className: "text-white",
        }}
        backgroundColor="bg-gradient-to-br from-blue-400 to-blue-800"
      >
        <p className="text-white text-right text-sm">
          I am planning to integrate
          <span className="font-bold"> playlist features</span> and
          <span className="font-bold"> friend social features</span>
        </p>
      </InformationBox>
      <div
        className={twMerge(
          "relative",
          "how",
          "flex flex-col gap-y-3",
          "px-10 py-8",
          "from-green-600 bg-gradient-to-b to-green-800 bg-opacity-20",
          "rounded-lg"
        )}
      >
        <h2 className="text-center text-5xl font-bold text-neutral-900">
          Just create an account and start sharing your favorite songs
        </h2>
      </div>
    </div>
  );
};
export default SpotifyProjectInformation;
