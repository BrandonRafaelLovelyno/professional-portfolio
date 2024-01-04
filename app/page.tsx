"use client";

import React, { useState } from "react";
import { Parallax } from "@react-spring/parallax";
import LandingLayer from "@/components/parallax-layer/landing-layer";
import ReusableLayer from "@/components/parallax-layer/reusable-layer";
import homeSectionData from "@/data/home-section-data";

const Home = () => {
  const [isAbout, setIsAbout] = useState(false);

  return (
    <Parallax pages={6}>
      <LandingLayer isAbout={isAbout} setIsAbout={setIsAbout} />
      {homeSectionData.map((section, index) => (
        <ReusableLayer
          description={section.description}
          firstIcon={section.firstIcon}
          firstWord={section.firstWord}
          fourthIcon={section.fourthIcon}
          isEven={index % 2 == 0}
          offset={index + 1}
          position={section.position}
          secondIcon={section.secondIcon}
          thirdIcon={section.thirdIcon}
          secondWord={section.secondWord}
        />
      ))}
    </Parallax>
  );
};

export default Home;
