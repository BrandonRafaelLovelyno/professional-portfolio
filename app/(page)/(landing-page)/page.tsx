"use client";

import React from "react";
import { Parallax } from "@react-spring/parallax";
import { LANDINGPAGESECTIONDATA } from "@/data/landing-page-section-data";
import HomeSection from "@/components/section/landing-page/home-section";
import MountainParallax from "@/components/section/landing-page/mountain-parallax";
import LandingPageSectionParallax from "@/components/section/landing-page/landing-page-section-parallax";

const Home = () => {
  return (
    <>
      <Parallax
        pages={LANDINGPAGESECTIONDATA.length + 2}
        className="w-full h-full"
      >
        <MountainParallax />
        {LANDINGPAGESECTIONDATA.map((section, index) => (
          <LandingPageSectionParallax
            key={index}
            sectionIndex={index}
            section={section}
          />
        ))}
      </Parallax>
    </>
  );
};

export default Home;
