"use client";

import React, { useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Hero from "@/components/display/hero";
import MouseScrollDown from "@/components/display/mouse-scroll-down";
import { motion } from "framer-motion";
import About from "@/components/display/about";
import Reveal from "@/components/animation/reveal";

const Home = () => {
  const [isAbout, setIsAbout] = useState(false);
  return (
    <div>
      <Parallax pages={3}>
        <ParallaxLayer offset={0} speed={0.5} className="relative">
          <>
            {isAbout && <About onClose={() => setIsAbout(false)} />}
            <div className="relative w-full h-full">
              <p
                className="rotate-90 absolute transform origin-bottom-left left-4 top-[55%] text-secondary text-xs font-bold cursor-pointer hover:text-primary duration-300"
                onClick={() => setIsAbout(!isAbout)}
              >
                About
              </p>
              <div className="flex flex-col h-full w-full px-44 pt-20 pb-28 justify-center">
                <div className="mt-auto relative">
                  <ParallaxLayer speed={0.25} className="absolute">
                    <Hero isAbout={isAbout} />
                  </ParallaxLayer>
                </div>
                <div className="mt-auto relative flex flex-row gap-x-20 items-end">
                  <Reveal isAbout={false} childrenDir="up" width="w-fit">
                    <p className="hover:underline transition-all duration-400 hover:text-primary text-secondary cursor-pointer">
                      Download my resume
                    </p>
                  </Reveal>

                  <Reveal isAbout={false} childrenDir="up" width="w-fit">
                    <p className="hover:underline duration-400 transition-all  hover:text-primary text-secondary cursor-pointer">
                      contact me
                    </p>
                  </Reveal>
                  <div className="ms-auto pb-8">
                    <MouseScrollDown />
                  </div>
                </div>
              </div>
            </div>
          </>
        </ParallaxLayer>
        <ParallaxLayer offset={1} className="bg-red-500">
          <p>ya</p>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1.25} className="bg-background">
          <p>hei</p>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Home;
