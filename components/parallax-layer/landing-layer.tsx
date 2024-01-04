import { ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import About from "../display/about";
import Reveal from "../animation/reveal";
import MouseScrollDown from "../display/mouse-scroll-down";
import Hero from "../display/hero";

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
      <ParallaxLayer offset={0} speed={0.7} className="relative z-10">
        <>
          {isAbout && <About onClose={() => setIsAbout(false)} />}
          <p
            className="rotate-90 absolute transform origin-bottom-left left-4 top-[55%] text-secondary text-xs font-bold cursor-pointer hover:text-primary duration-300"
            onClick={() => setIsAbout(!isAbout)}
          >
            About
          </p>
          <div className="flex flex-col h-full w-full px-44 pt-20 pb-28 justify-center">
            <div className="mt-auto relative flex flex-row gap-x-20 items-end">
              <Reveal
                hide={isAbout || isRouting}
                childrenDir="up"
                width="w-fit"
              >
                <p className="hover:underline transition-all duration-400 hover:text-primary text-secondary cursor-pointer">
                  Download my resume
                </p>
              </Reveal>

              <Reveal
                hide={isAbout || isRouting}
                childrenDir="up"
                width="w-fit"
              >
                <p className="hover:underline duration-400 transition-all  hover:text-primary text-secondary cursor-pointer">
                  contact me
                </p>
              </Reveal>
              <div className="ms-auto pb-8">
                <MouseScrollDown />
              </div>
            </div>
          </div>
        </>
      </ParallaxLayer>
      <ParallaxLayer speed={0.3}>
        <div className="flex flex-col h-full w-full px-44 pt-20 pb-28 justify-center">
          <Hero hide={isAbout || isRouting} />
        </div>
      </ParallaxLayer>
    </>
  );
};

export default LandingLayer;
