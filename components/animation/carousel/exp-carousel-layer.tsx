"use client";

import { ParallaxLayer } from "@react-spring/parallax";
import React, { useState } from "react";
import Reveal from "../reveal";
import { motion } from "framer-motion";
import ReadMore from "../../trigger/read-more";
import CarouselImgDescLayer from "./carousel-image-desc-layer";
import ExpDetail from "@/components/display/non-coding-project-page/exp-detail";
import { Experience } from "@/data/org-exp-section-data";
import { usePathname } from "next/navigation";
import LearnFeature from "@/components/trigger/learn-feature";

interface ExpCarouselLayerProps {
  speed: number;
  offset: number;
  isRouting: boolean;
  experience: Experience;
  setIsRouting: (isRouting: boolean) => void;
}

const ExpCarouselLayer: React.FC<ExpCarouselLayerProps> = ({
  speed,
  offset,
  isRouting,
  experience,
  setIsRouting,
}) => {
  const [isReadMore, setIsReadMore] = useState(false);
  const [index, setIndex] = useState(0);
  const pathname = usePathname();

  return (
    <>
      {/* img and desc carousel */}
      <CarouselImgDescLayer
        currentIndex={index}
        events={experience.events}
        isReadMore={isReadMore}
        isRouting={isRouting}
        offset={offset}
        speed={speed - 0.4}
      />
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
          <p className="text-6xl font-semibold mr-10">{experience.position}</p>
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
          className="w-[55%] h-[60%] absolute  z-20 top-1/2 left-1/2"
          onClick={() => {
            const nextIndex =
              index == experience.events.length - 1 ? 0 : index + 1;
            setIndex(nextIndex);
          }}
          initial={{ x: "-50%", y: "-50%" }}
        />
        {pathname == "/coding-pro" ? (
          <LearnFeature
            setIsRouting={setIsRouting}
            link={experience.events[index].link!}
          />
        ) : (
          <ReadMore setIsReadMore={setIsReadMore} />
        )}

        {isReadMore && (
          <ParallaxLayer offset={offset}>
            <ExpDetail
              event={experience.events[experience.events.length - 1 - index]}
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
