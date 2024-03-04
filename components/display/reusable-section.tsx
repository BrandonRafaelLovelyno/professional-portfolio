import { ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import { twMerge } from "tailwind-merge";
import Reveal from "../animation/reveal";
import KnowMore from "../trigger/know-more";
import ExpCard from "./landing-page/exp-card";
import Image from "next/image";
import ParallaxIcon from "../animation/parralax-icon";

interface ReusableLayerProps {
  isEven: boolean;
  firstWord: string;
  secondWord: string;
  offset: number;
  description: string;
  position: string[];
  firstIcon: string;
  secondIcon: string;
  thirdIcon: string;
  fourthIcon: string;
  link: string;
  isRouting: boolean;
  isAbout: boolean;
  setIsRouting: (isRouting: boolean) => void;
}

const ReusableLayer: React.FC<ReusableLayerProps> = ({
  isEven,
  firstWord,
  secondWord,
  offset,
  description,
  position,
  firstIcon,
  secondIcon,
  thirdIcon,
  fourthIcon,
  isRouting,
  setIsRouting,
  isAbout,
  link,
}) => {
  if (isAbout) {
    return <></>;
  }
  return (
    <>
      {/* work exp */}
      <ParallaxLayer offset={offset} speed={0.3}>
        <Reveal childrenDir="up" customDelay={0.25} hide={isRouting}>
          <div
            className={twMerge(
              "flex flex-col h-full w-full px-44 pt-20 pb-28 justify-center",
              isEven ? "items-end" : "items-start"
            )}
          >
            <div className="mb-44 text-6xl font-semibold flex flex-col gap-y-5">
              <p>{firstWord}</p>
              <p className={twMerge(isEven ? "me-7 text-end" : "ms-7")}>
                {secondWord}
              </p>
            </div>
          </div>
        </Reveal>
      </ParallaxLayer>
      {/* sub title */}
      <ParallaxLayer
        offset={offset}
        speed={0.7}
        className={twMerge(
          "flex flex-row ",
          "px-44 pt-20 pb-28 items-center",
          isEven ? "justify-start" : "justify-end"
        )}
      >
        <div
          className={twMerge(
            isEven ? "me-72" : "ms-72",
            "mb-32",
            "w-1/2 h-1/2",
            "flex flex-col justify-center"
          )}
        >
          <Reveal childrenDir="down" hide={isRouting}>
            <p className="trunecate line-clamp-[8] text-primary text-lg">
              {description}
            </p>
          </Reveal>
        </div>
      </ParallaxLayer>

      <ParallaxIcon
        offset={offset}
        speed={Math.random() * -1 + 1.5}
        dir="left"
        layerClassname="flex flex-row h-full w-full px-20 py-10 relative"
        divClassname="absolute top-0 left-0"
      >
        <Image src={firstIcon} width={200} height={200} alt="" />
      </ParallaxIcon>
      <ParallaxIcon
        offset={offset}
        speed={Math.random() * -1 + 1.5}
        dir="right"
        layerClassname="flex flex-row h-full w-full px-20 py-10 relative"
        divClassname="absolute top-0 right-0"
      >
        <Image src={secondIcon} width={200} height={200} alt="" />
      </ParallaxIcon>
      <ParallaxIcon
        offset={offset}
        speed={Math.random() * -1 + 1.5}
        dir="right"
        layerClassname="flex flex-row h-full w-full px-20 py-10 relative"
        divClassname="absolute bottom-0 right-0"
      >
        <Image src={thirdIcon} width={200} height={200} alt="" />
      </ParallaxIcon>
      <ParallaxIcon
        offset={offset}
        speed={Math.random() * -1 + 1.5}
        dir="left"
        layerClassname="flex flex-row h-full w-full px-20 py-10 relative"
        divClassname="absolute bottom-0 left-0"
      >
        <Image src={fourthIcon} width={200} height={200} alt="" />
      </ParallaxIcon>

      {/* know more */}
      <ParallaxLayer
        offset={offset}
        speed={1.2}
        className={twMerge(
          "flex items-end relative justify-between",
          " px-44 pt-20 pb-20",
          isEven ? "flex-row-reverse" : "flex-row"
        )}
      >
        <ExpCard exp={position} />
        <KnowMore setIsRouting={setIsRouting} link={link} />
      </ParallaxLayer>
      {/* parralax icon */}
    </>
  );
};

export default ReusableLayer;
