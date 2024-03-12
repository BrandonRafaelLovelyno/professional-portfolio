import { ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import Reveal from "../../animation/reveal";
import MouseScrollDown from "../../trigger/mouse-scroll-down";
import Hero from "./hero-section";
import { twMerge } from "tailwind-merge";

interface LandingLayerProps {
  isRouting: boolean;
}

const LandingLayer: React.FC<LandingLayerProps> = ({ isRouting }) => {
  return (
    <>
      <ParallaxLayer
        offset={0}
        speed={0.5}
        className={twMerge(
          "z-10 relative w-full",
          "flex flex-col  lg:px-44 lg:pt-20 pb-28  justify-center",
          "px-5 items-center"
        )}
      >
        <div
          className={twMerge(
            "mt-auto relative flex flex-row lg:gap-x-20 gap-y-5 justify-center",
            "text-xl items-center text-white font-bold"
          )}
        >
          <MouseScrollDown />
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        speed={0.2}
        className={twMerge(
          "flex flex-col",
          "lg:px-44 pt-15 pb-28 justify-center",
          "px-5 items-center"
        )}
      >
        <Hero hide={isRouting} />
      </ParallaxLayer>
    </>
  );
};

export default LandingLayer;
