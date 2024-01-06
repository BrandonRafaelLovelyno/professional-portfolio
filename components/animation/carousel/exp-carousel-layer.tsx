"use client";

import { ParallaxLayer } from "@react-spring/parallax";
import React, { useEffect, useState } from "react";
import Reveal from "../reveal";
import { motion } from "framer-motion";
import ReadMore from "../../display/read-more";
import CarouselImgDescLayer, { Experience } from "./carousel-image-desc-layer";
import ExpDetail from "@/components/display/exp-detail";

interface ExpCarouselLayerProps {
  speed: number;
  offset: number;
  isRouting: boolean;
  experiences: Experience[];
}

const ExpCarouselLayer: React.FC<ExpCarouselLayerProps> = ({
  speed,
  offset,
  isRouting,
  experiences,
}) => {
  const [isReadMore, setIsReadMore] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
      {/* title */}
      <ParallaxLayer offset={offset} speed={speed} className="pl-8 pt-8">
        <Reveal
          childrenDir="up"
          hide={isRouting || isReadMore}
          width="w-fit"
          isBlock={true}
          blockColor="bg-secondary"
          blockDir="right"
        >
          <p className="text-6xl font-semibold mr-10">Laison Officer</p>
        </Reveal>
      </ParallaxLayer>
      {/* img and desc carousel */}
      <CarouselImgDescLayer
        currentIndex={index}
        experiences={experiences}
        isReadMore={isReadMore}
        isRouting={isRouting}
        offset={offset}
        speed={speed - 0.2}
      />
      {/* and read more*/}
      <ParallaxLayer
        offset={offset}
        speed={speed}
        className="flex flex-col justify-end items-end"
      >
        {/* setIndex div for main img */}
        <motion.div
          className="w-[55%] h-[60%] absolute  z-20 top-1/2 left-1/2"
          onClick={() => {
            const nextIndex = index == experiences.length - 1 ? 0 : index + 1;
            setIndex(nextIndex);
          }}
          initial={{ x: "-50%", y: "-50%" }}
        />
        <ReadMore setIsReadMore={setIsReadMore} />
        {isReadMore && (
          <ParallaxLayer offset={offset}>
            <ExpDetail
              onClose={() => {
                setIsReadMore(false);
              }}
            />
          </ParallaxLayer>
        )}
      </ParallaxLayer>
    </>
  );
};

export default ExpCarouselLayer;
