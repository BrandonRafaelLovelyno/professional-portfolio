import Reveal from "@/components/animation/reveal";
import { PageTransitionContext } from "@/components/provider/page-transition-provider";
import HierarchyIconLine from "@/components/trigger/container/hierarchy-icon-line";
import Image from "next/image";
import { useContext } from "react";
import { IoMdPerson } from "react-icons/io";
import { twMerge } from "tailwind-merge";

const PROJECT_TYPE: { title: string; imageUrl: string }[] = [
  {
    title: "Website clones",
    imageUrl:
      "/image/page/project/experience/spotify-clone/heading/top-right.png",
  },
  {
    title: "Artificial Intelligence",
    imageUrl: "/image/page/project/assets/robot.png",
  },
];

const getImageSize = (width: number) => {
  if (width > 1024) {
    return 100;
  }
  return 75;
};

const ProjectIntroduction: React.FC = () => {
  const { width } = useContext(PageTransitionContext);
  const imageSize = getImageSize(width);
  return (
    <>
      <HierarchyIconLine lineColor={{ from: "green", to: "purple" }}>
        <IoMdPerson size={30} />
      </HierarchyIconLine>
      <Reveal>
        <div className={twMerge("flex flex-col gap-y-5", "md:pb-32 pb-20")}>
          <div className={twMerge("flex flex-col gap-y-3")}>
            <h3 className="font-bold text-xl text-gray-300">
              Who are my projects?
            </h3>
            <h2 className="font-bold md:text-5xl text-4xl">
              Most of the times I build
              <span className="text-green-400"> custom websites. </span> The
              rest are <span className="text-green-400">AI</span>
            </h2>
            <h3 className="font-bold text-gray-200">I have built</h3>
          </div>
          <div
            className={twMerge(
              "w-full h-fit",
              "flex-wrap",
              "md:flex md:flex-row md:gap-x-5",
              "flex flex-col gap-y-5"
            )}
          >
            {PROJECT_TYPE.map((project, index) => (
              <div
                key={index}
                className={twMerge(
                  "md:w-[240px] md:h-fit",
                  "w-full h-fit",
                  "md:flex md:flex-col md:items-center md:gap-y-4",
                  "flex flex-row gap-x-3 items-center",
                  "px-3 py-3",
                  "bg-zinc-800 bg-opacity-65",
                  "rounded-lg"
                )}
              >
                <Image
                  height={imageSize}
                  width={imageSize}
                  src={project.imageUrl}
                  alt={project.title}
                />
                <h3 className="text-center font-bold">{project.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </>
  );
};

export default ProjectIntroduction;
