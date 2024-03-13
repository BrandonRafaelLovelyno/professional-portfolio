"use client";

import React from "react";
import { Parallax } from "@react-spring/parallax";
import { HOMESECTIONDATA } from "@/data/home-section-data";
import HomeSection from "@/components/section/landing-page/home-section";
import MountainParallax from "@/components/section/landing-page/mountain-parallax";

const Home = () => {
  return (
    <>
      <Parallax pages={HOMESECTIONDATA.length + 2} className="w-full h-full">
        <MountainParallax />
        {HOMESECTIONDATA.map((section, index) => (
          <HomeSection
            description={section.description}
            firstIcon={section.firstIcon}
            firstWord={section.firstWord}
            fourthIcon={section.fourthIcon}
            isEven={(index + 2) % 2 == 0}
            offset={index + 2}
            position={section.position}
            secondIcon={section.secondIcon}
            thirdIcon={section.thirdIcon}
            secondWord={section.secondWord}
            link={section.link}
            key={section.link}
          />
        ))}
      </Parallax>
    </>
  );
};

export default Home;
