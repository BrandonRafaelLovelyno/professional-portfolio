import TechStackInformation from "@/components/trigger/project-page/information/information-box";
import CODING_PRO, {
  TechStack,
} from "@/data/project/coding/coding-project-data";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import { FaCodeBranch } from "react-icons/fa";
import InformationBox from "@/components/trigger/project-page/information/information-box";

const index = 0;

const SpotifyProjectInformation = () => {
  return (
    <div className="spotify-information-container">
      <div
        className={twMerge(
          "relative",
          "overall",
          "flex flex-col gap-y-3",
          "pl-5 pr-[150px] py-5",
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
          width={210}
          height={210}
          src={"/image/coding-pro/spotify-clone/information/overall.png"}
          alt="overall"
          className="absolute right-[10px] -top-[70px]"
        />
      </div>
      <InformationBox
        Icon={<FaCodeBranch size={20} className="text-white" />}
        identifier="tech-stack"
        title="I made it with"
      >
        {CODING_PRO[0].heading.techStack.map(
          (tech: TechStack, index: number) => (
            <div key={index} className={twMerge("flex flex-row gap-x-5")}>
              <Image src={tech.image} alt={tech.name} width={30} height={30} />
              <div className={twMerge("flex flex-col gap-y-1")}>
                <h2 className="text-xs font-bold text-black">{tech.name}</h2>
                <p className="text-xs text-black">lorem ipsum</p>
              </div>
            </div>
          )
        )}
      </InformationBox>
      <div className={twMerge("development")}>
        <h1>haii</h1>
      </div>
      <div className={twMerge("why")} />
      <div className={twMerge("how")} />
    </div>
  );
};
export default SpotifyProjectInformation;
