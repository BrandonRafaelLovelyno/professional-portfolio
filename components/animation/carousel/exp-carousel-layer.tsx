"use client";

import { ParallaxLayer } from "@react-spring/parallax";
import React, { useState } from "react";
import Reveal from "../reveal";
import { motion } from "framer-motion";
import CarouselImgDescLayer from "./carousel-asset-desc-layer";
import { Experience } from "@/data/org-exp-section-data";
import { twMerge } from "tailwind-merge";

interface ExpCarouselLayerProps {
  speed: number;
  offset: number;
  experience: Experience;
}

const ExpCarouselLayer: React.FC<ExpCarouselLayerProps> = ({
  speed,
  offset,
  experience,
}) => {
  const [index, setIndex] = useState(0);

  return (
    <>
      {/* img and desc carousel */}
      <CarouselImgDescLayer
        currentIndex={index}
        events={experience.events}
        offset={offset}
        speed={speed - 0.4}
      />
      {/* title */}
      <ParallaxLayer
        offset={offset}
        speed={speed}
        className={twMerge(
          "lg:pl-8 lg:pt-8",
          "px-8 max-lg:flex max-lg:justify-center max-lg:items-start pt-28"
        )}
      >
        <Reveal
          childrenDir="up"
          isBlock={true}
          blockColor="bg-secondary"
          blockDir="right"
        >
          <p className="lg:text-6xl text-5xl text-center font-semibold lg:mr-10">
            {experience.position}
          </p>
        </Reveal>
      </ParallaxLayer>
      {/* and read more*/}
      <ParallaxLayer
        offset={offset}
        speed={speed}
        className="flex flex-col justify-end items-end"
      >
        {/* setIndex div for main img */}
        <motion.div
          className={twMerge(
            "lg:w-[55%] lg:h-[60%] absolute top-1/2 left-1/2",
            "w-full h-[30%]"
          )}
          onClick={() => {
            const nextIndex =
              index == experience.events.length - 1 ? 0 : index + 1;
            setIndex(nextIndex);
          }}
          initial={{ x: "-50%", y: "-50%" }}
        />
        <motion.div
          className={twMerge(
            "lg:mb-20 mb-20 lg:mr-20 mx-auto",
            "flex lg:flex-col flex-row gap-x-5 lg:items-end lg:gap-y-4",
            "lg:justify-end justify-center"
          )}
        ></motion.div>
      </ParallaxLayer>
    </>
  );
};

export default ExpCarouselLayer;
