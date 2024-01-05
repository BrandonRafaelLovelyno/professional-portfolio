import { ParallaxLayer } from "@react-spring/parallax";
import React, { useState } from "react";
import Reveal from "../animation/reveal";
import CarouselDescription from "./caousel-description";
import { twMerge } from "tailwind-merge";

interface ExpCarouselLayerProps {
  speed: number;
  offset: number;
  isRouting: boolean;
}

const ExpCarouselLayer: React.FC<ExpCarouselLayerProps> = ({
  speed,
  offset,
  isRouting,
}) => {
  const [isReadMore, setIsReadMore] = useState(false);
  return (
    <>
      {/* main image */}
      <ParallaxLayer
        offset={offset}
        speed={speed}
        className="flex px-64 py-32 items-center justify-center"
      >
        <div className="w-full h-full bg-red-500" />
      </ParallaxLayer>
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
      {/* description*/}
      <ParallaxLayer
        offset={offset}
        speed={speed + 0.3}
        className={twMerge("flex flex-col justify-end", "pb-24 pl-16")}
      >
        <Reveal childrenDir="down" hide={isRouting || isReadMore} width="w-fit">
          <div className="flex flex-col w-fit h-fit italic">
            <p className="text-3xl font-semibold">Find IT! UGM 2023</p>
            <div className="flex flex-row gap-x-7">
              <span>22 January 2023</span>
              <span>Yogyakarta, Indonesia</span>
            </div>
          </div>
        </Reveal>
      </ParallaxLayer>
      {/* read more*/}
      <ParallaxLayer offset={offset} speed={speed}></ParallaxLayer>
      {/* carousel navigator */}
      <ParallaxLayer offset={offset} speed={speed}></ParallaxLayer>
    </>
  );
};

export default ExpCarouselLayer;
