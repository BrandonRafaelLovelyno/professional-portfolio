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
    img: "https://images.unsplash.com/photo-1682687220795-796d3f6f7000?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    position: "Staff",
    event: "Find IT! UGM 2023",
  },
  {
    date: "30 June 2023",
    img: "https://unsplash.com/photos/a-couple-of-people-that-are-looking-at-each-other-aXgYJtVA3A8",
    position: "Coordinator",
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
            isDisable={index < 2}
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
