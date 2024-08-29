import Reveal from "@/components/animation/reveal";
import { PageTransitionContext } from "@/components/provider/page-transition-provider";
import HierarchyIconLine from "@/components/trigger/container/hierarchy-icon-line";
import Image from "next/image";
import { useContext } from "react";
import { IoMdPerson } from "react-icons/io";
import { twMerge } from "tailwind-merge";

const REASON: { imageUrl: string; title: string }[] = [
  {
    imageUrl:
      "https://res.cloudinary.com/dohewcyes/image/upload/v1724934238/image/page/work/assets/wdpwmpc7pmod2syq5juc.png",
    title: "Enhance professionality",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dohewcyes/image/upload/v1724934238/image/page/work/assets/thhhkhad8wgic0ggtcsh.png",
    title: "Enhance social skill",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dohewcyes/image/upload/v1724934238/image/page/work/assets/bcom9at2c0gfzmjkjyz7.png",
    title: "Earn extra money",
  },
];

const getImageSize = (width: number) => {
  if (width > 1024) {
    return 100;
  }
  return 75;
};

const WorkReasoning: React.FC = () => {
  const { width } = useContext(PageTransitionContext);

  const imageSize = getImageSize(width);

  return (
    <>
      <HierarchyIconLine lineColor={{ from: "yellow", to: "red" }}>
        <IoMdPerson size={30} />
      </HierarchyIconLine>
      <Reveal>
        <div className={twMerge("flex flex-col gap-y-5", "md:pb-32 pb-20")}>
          <div className={twMerge("flex flex-col gap-y-3")}>
            <h3 className="font-bold text-xl text-gray-300">
              What is the reason?
            </h3>
            <h2 className="font-bold md:text-5xl text-4xl">
              I believe I have to{" "}
              <span className="text-yellow-400">master softskills</span> to
              enter the market
            </h2>
          </div>
          <div
            className={twMerge(
              "w-full h-fit",
              "flex-wrap",
              "md:flex md:flex-row md:gap-x-5",
              "flex flex-col gap-y-5"
            )}
          >
            {REASON.map((reason, index) => (
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
                  src={reason.imageUrl}
                  alt={reason.title}
                />
                <h3 className="text-center font-bold">{reason.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </>
  );
};
export default WorkReasoning;
