import Reveal from "@/components/animation/reveal";
import { ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import { twMerge } from "tailwind-merge";
import CarouselImg from "./carousel-image";
import { Event, Experience } from "@/data/org-exp-section-data";

interface CarouselImgDescLayerProps {
  events: Event[];
  offset: number;
  speed: number;
  currentIndex: number;
  isRouting: boolean;
  isReadMore: boolean;
}

const CarouselImgDescLayer: React.FC<CarouselImgDescLayerProps> = ({
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
            img={ev.img}
            currentIndex={currentIndex}
            evIndex={events.length - 1 - idx}
          />
        ))}
      </ParallaxLayer>
      {/* description*/}
      <ParallaxLayer
        offset={offset}
        speed={speed + 0.3}
        className={twMerge("flex flex-col justify-end", "pb-24 pl-16")}
      >
        <Reveal
          childrenDir="up"
          hide={isRouting || isReadMore}
          width="w-fit"
          key={currentIndex}
        >
          <div className="flex flex-col w-fit h-fit italic">
            <p className="text-3xl font-semibold">
              {events[events.length - currentIndex - 1].name}
            </p>
            <div className="flex flex-row gap-x-7">
              <span>{events[events.length - currentIndex - 1].date}</span>
              <span>{events[events.length - currentIndex - 1].position}</span>
            </div>
          </div>
        </Reveal>
      </ParallaxLayer>
    </>
  );
};

export default CarouselImgDescLayer;
