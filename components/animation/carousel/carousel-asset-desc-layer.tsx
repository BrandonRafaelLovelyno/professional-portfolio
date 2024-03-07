import Reveal from "@/components/animation/reveal";
import { ParallaxLayer } from "@react-spring/parallax";
import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import CarouselImg from "./carousel-asset";
import { Event } from "@/data/org-exp-section-data";

interface CarouselAssetDescLayerProps {
  events: Event[];
  offset: number;
  speed: number;
  currentIndex: number;
  isRouting: boolean;
  isReadMore: boolean;
}

const CarouselAssetDescLayer: React.FC<CarouselAssetDescLayerProps> = ({
  events,
  offset,
  speed,
  currentIndex,
  isRouting,
  isReadMore,
}) => {
  return (
    <>
      {/* main image */}
      <ParallaxLayer
        offset={offset}
        speed={speed}
        className="relative overflow-visible"
      >
        {/* map the exp image */}
        {events.map((ev, idx) => (
          <CarouselImg
            key={idx}
            img={ev.img}
            video={ev.video}
            currentIndex={currentIndex}
            evIndex={events.length - 1 - idx}
          />
        ))}
      </ParallaxLayer>
      {/* description*/}
      <ParallaxLayer
        offset={offset}
        speed={speed + 0.3}
        className={twMerge(
          "flex flex-col justify-end max-lg:items-center",
          "lg:pb-20 pb-40 lg:pl-16 px-8"
        )}
      >
        <Reveal
          childrenDir="up"
          hide={isRouting || isReadMore}
          key={currentIndex}
        >
          <div className="flex flex-col w-fit h-fit max-lg:w-full max-lg:items-center gap-y-2">
            <p className="lg:text-3xl text-4xl font-semibold text-neutral-300 lg:text-left text-center">
              {events[events.length - currentIndex - 1].name}
            </p>
            <div className="flex lg:flex-row flex-col lg:gap-x-7 text-neutral-500 italic max-lg:text-center gap-y-3 text-sm  font-semibold">
              <span>{events[events.length - currentIndex - 1].date}</span>
              <span>{events[events.length - currentIndex - 1].position}</span>
            </div>
          </div>
        </Reveal>
      </ParallaxLayer>
    </>
  );
};

export default CarouselAssetDescLayer;
