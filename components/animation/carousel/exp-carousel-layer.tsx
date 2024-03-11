"use client";

import { ParallaxLayer } from "@react-spring/parallax";
import React, { useState } from "react";
import Reveal from "../reveal";
import { motion } from "framer-motion";
import ReadMore from "../../trigger/read-more";
import CarouselImgDescLayer from "./carousel-asset-desc-layer";
import { Event, Experience } from "@/data/org-exp-section-data";
import { usePathname } from "next/navigation";
import TeamButton from "@/components/trigger/team-button";
import { twMerge } from "tailwind-merge";
import EllipsisButton from "@/components/trigger/ellipsis-link-button";
import { MdFeaturedPlayList } from "react-icons/md";

interface ExpCarouselLayerProps {
  speed: number;
  offset: number;
  isRouting: boolean;
  experience: Experience;
  setIsRouting: (isRouting: boolean) => void;
  isReadMore: boolean;
  setIsReadMore: (isReadMore: boolean) => void;
  setSelectedEvent: (event: Event) => void;
  setIsTeam: (isTeam: boolean) => void;
}

const ExpCarouselLayer: React.FC<ExpCarouselLayerProps> = ({
  speed,
  offset,
  isRouting,
  experience,
  setIsRouting,
  isReadMore,
  setIsReadMore,
  setSelectedEvent,
  setIsTeam,
}) => {
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
          hide={isRouting || isReadMore}
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
        >
          {pathname == "/coding-pro" ? (
            <EllipsisButton
              setIsRouting={setIsRouting}
              link={
                experience.events[experience.events.length - index - 1].link!
              }
              text="Learn Feature"
            >
              <MdFeaturedPlayList size={20} />
            </EllipsisButton>
          ) : (
            <ReadMore
              event={experience.events[experience.events.length - index - 1]}
              setSelectedEvent={setSelectedEvent}
              setIsReadMore={setIsReadMore}
            />
          )}
          {experience.events[index].team && (
            <TeamButton
              event={experience.events[experience.events.length - index - 1]}
              setSelectedEvent={setSelectedEvent}
              setIsTeam={setIsTeam}
            />
          )}
        </motion.div>
      </ParallaxLayer>
    </>
  );
};

export default ExpCarouselLayer;
