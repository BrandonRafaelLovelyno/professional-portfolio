import { ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import { twMerge } from "tailwind-merge";
import Reveal from "../animation/reveal";

interface ReusableLayerProps {
  isEven: boolean;
  firstWord: string;
  secondWord: string;
  offset: number;
  speed: number;
}

const ReusableLayer: React.FC<ReusableLayerProps> = ({
  isEven,
  firstWord,
  secondWord,
  offset,
  speed,
}) => {
  return (
    <>
      {/* work exp */}
      <ParallaxLayer offset={offset} speed={speed}>
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
      </ParallaxLayer>
      {/* sub title */}
      <ParallaxLayer offset={offset} speed={speed}>
        <div
          className={twMerge(
            "flex flex-row h-full w-full px-44 pt-20 pb-28 items-center",
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
            <p className="trunecate line-clamp-[8] text-secondary font-semibold text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </ParallaxLayer>
      {/* know more */}
      <ParallaxLayer offset={offset} speed={speed} className="z-10">
        <div
          className={twMerge(
            "flex flex-row h-full w-full px-44 pt-20 pb-28 items-end",
            isEven ? "justify-start" : "justify-end"
          )}
        >
          know more
        </div>
      </ParallaxLayer>
    </>
  );
};

export default ReusableLayer;
