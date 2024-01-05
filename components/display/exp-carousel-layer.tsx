import { ParallaxLayer } from "@react-spring/parallax";
import React from "react";

interface ExpCarouselLayerProps {
  speed: number;
  offset: number;
}

const ExpCarouselLayer: React.FC<ExpCarouselLayerProps> = ({
  speed,
  offset,
}) => {
  return (
    <>
      {/* main image */}
      <ParallaxLayer offset={offset} speed={speed}></ParallaxLayer>
      {/* title */}
      <ParallaxLayer offset={offset} speed={speed}></ParallaxLayer>
      {/* description*/}
      <ParallaxLayer offset={offset} speed={speed}></ParallaxLayer>
      {/* read more*/}
      <ParallaxLayer offset={offset} speed={speed}></ParallaxLayer>
      {/* carousel navigator */}
      <ParallaxLayer offset={offset} speed={speed}></ParallaxLayer>
    </>
  );
};

export default ExpCarouselLayer;
