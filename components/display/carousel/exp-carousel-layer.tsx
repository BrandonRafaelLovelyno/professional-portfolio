import { ParallaxLayer } from "@react-spring/parallax";
import React, { useState } from "react";
import Reveal from "../../animation/reveal";
import { twMerge } from "tailwind-merge";
import ReadMore from "./read-more";
import CarouselNavigator from "./carousel-navigator";
import CarouselImgDescLayer, { Experience } from "./carousel-image-desc-layer";

interface ExpCarouselLayerProps {
  speed: number;
  offset: number;
  isRouting: boolean;
}

const expTemp: Experience[] = [
  {
    date: "22 January 2023",
    img: "https://plus.unsplash.com/premium_photo-1670044020170-5ba458728767?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    position: "Staff",
    event: "Find IT! UGM 2023",
  },
  {
    date: "30 June 2023",
    img: "https://plus.unsplash.com/premium_photo-1669749352287-3a7e249059cb?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    position: "Coordinator",
    event: "NESCO UGM 2023",
  },
  {
    date: "20 June 2023",
    img: "https://plus.unsplash.com/premium_photo-1669349127566-9be644ceac6e?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    position: "staf",
    event: "NESCO UGM 2023",
  },
];

const ExpCarouselLayer: React.FC<ExpCarouselLayerProps> = ({
  speed,
  offset,
  isRouting,
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
        experiences={expTemp}
        isReadMore={isReadMore}
        isRouting={isRouting}
        offset={offset}
        speed={speed - 0.2}
      />
      {/* carousel navigator and read more*/}
      <ParallaxLayer
        offset={offset}
        speed={speed}
        className="flex flex-col pt-[25%] pb-20 px-11 justify-between"
      >
        <div className="flex flex-row w-full justify-between">
          <CarouselNavigator
            isDisable={index < 1}
            currentIndex={index}
            isNext={false}
            onSetIndex={setIndex}
          />
          <CarouselNavigator
            isDisable={index > 0}
            currentIndex={index}
            isNext={true}
            onSetIndex={setIndex}
          />
        </div>
        <div className="ml-auto">
          <ReadMore setIsReadMore={setIsReadMore} />
        </div>
      </ParallaxLayer>
    </>
  );
};

export default ExpCarouselLayer;
