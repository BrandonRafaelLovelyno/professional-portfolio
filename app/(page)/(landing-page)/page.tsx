"use client";

import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { LANDINGPAGESECTIONDATA } from "@/data/display/landing-page-data";
import LandingPageSectionParallax from "@/components/section/landing-page/landing-page-section-parallax";
import LandingHero from "@/components/animation/landing-page/landing-hero";
import WelcomeParallax from "@/components/section/landing-page/welcome-parallax";

const Home = () => {
  return (
    <>
      <Parallax
        pages={LANDINGPAGESECTIONDATA.length + 1}
        className="w-full h-full"
      >
        <WelcomeParallax />
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
