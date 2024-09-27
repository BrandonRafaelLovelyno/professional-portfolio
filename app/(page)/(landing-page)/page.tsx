"use client";

import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { LANDINGPAGESECTIONDATA } from "@/data/landing-page-data";
import LandingParallax from "@/components/section/display/welcome-parallax";
import HomeParallax from "@/components/section/display/home-parallax";
import { twMerge } from "tailwind-merge";
import IntroductionParallax from "@/components/section/display/introduction-parallax";

const Home = () => {
  return (
    <>
      <Parallax
        pages={(LANDINGPAGESECTIONDATA.length + 2) * 1.2}
        className="w-full h-full no-scrollbar"
      >
        <LandingParallax />
        <IntroductionParallax />
        {LANDINGPAGESECTIONDATA.map((section, index) => (
          <HomeParallax key={index} sectionIndex={index} section={section} />
        ))}
      </Parallax>
    </>
  );
};

export default Home;
