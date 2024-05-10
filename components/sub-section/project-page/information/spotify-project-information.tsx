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

const SpotifyProjectInformation = () => {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { isSelectingProject } = useContext(ProjectContext);
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
          screenWidth > 480 ? "pr-[150px]" : "pr-[80px]",
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
          width={screenWidth > 480 ? 210 : 150}
          height={screenWidth > 480 ? 210 : 150}
          src={"/image/coding-pro/spotify-clone/information/overall.png"}
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
            src={"/image/coding-pro/spotify-clone/information/tech.png"}
            alt=""
            width={screenWidth > 480 ? 150 : 110}
            height={screenWidth > 480 ? 150 : 110}
            className="absolute -right-[5%] z-[1] -bottom-[10%]"
          />
        }
      >
        {CODING_PRO[0].heading.techStack.map(
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
        }}
        backgroundColor="bg-gradient-to-br from-yellow-400 to-amber-500"
        image={
          <Image
            src={"/image/coding-pro/spotify-clone/information/development.png"}
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
