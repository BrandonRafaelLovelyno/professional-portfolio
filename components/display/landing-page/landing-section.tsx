import { ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import Reveal from "../../animation/reveal";
import MouseScrollDown from "../../trigger/mouse-scroll-down";
import Hero from "./hero-section";
import { twMerge } from "tailwind-merge";

interface LandingLayerProps {
  isRouting: boolean;
  isAbout: boolean;
  setIsAbout: (isAbout: boolean) => void;
}

const LandingLayer: React.FC<LandingLayerProps> = ({
  isAbout,
  setIsAbout,
  isRouting,
}) => {
  return (
    <>
      <ParallaxLayer
        offset={0}
        speed={0.7}
        className={twMerge(
          "z-10 relative w-full",
          "flex flex-col  lg:px-44 lg:pt-20 pb-28  justify-center",
          "px-5 items-center"
        )}
      >
        <div
          className={twMerge(
            "mt-auto relative flex lg:flex-row lg:gap-x-20 flex-col gap-y-5 lg:items-end items-start lg:text-lg font-bold justify-start lg:justify-center w-full",
            "text-xl items-center"
          )}
        >
          <Reveal hide={isRouting || isAbout} childrenDir="up">
            <p className="hover:underline transition-all duration-400 hover:text-primary text-secondary cursor-pointer">
              Download my resume
            </p>
          </Reveal>

          <Reveal hide={isRouting || isAbout} childrenDir="up">
            <p
              className="hover:underline duration-400 transition-all  hover:text-primary text-secondary cursor-pointer"
              onClick={() => setIsAbout(!isAbout)}
            >
              About
            </p>
          </Reveal>
          <div className="ms-auto pb-8 max-lg:hidden">
            <MouseScrollDown />
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        speed={0.2}
        className={twMerge(
          "flex flex-col",
          "lg:px-44 pt-20 pb-28 justify-center lg:items-start",
          "px-5 items-center"
        )}
      >
        <Hero hide={isRouting || isAbout} />
      </ParallaxLayer>
    </>
  );
};

export default LandingLayer;
