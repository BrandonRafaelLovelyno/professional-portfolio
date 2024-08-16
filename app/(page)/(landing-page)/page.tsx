"use client";

import React from "react";
import { Parallax } from "@react-spring/parallax";
import { LANDINGPAGESECTIONDATA } from "@/data/landing-page-data";
import LandingParallax from "@/components/section/display/welcome-parallax";
import HomeParallax from "@/components/section/display/home-parallax";

const Home = () => {
  return (
    <>
      <Parallax
        pages={(LANDINGPAGESECTIONDATA.length + 1) * 1.2}
        className="w-full h-full no-scrollbar"
      >
        <LandingParallax />
        {LANDINGPAGESECTIONDATA.map((section, index) => (
          <HomeParallax key={index} sectionIndex={index} section={section} />
        ))}
      </Parallax>
    </>
  );
};

export default Home;
