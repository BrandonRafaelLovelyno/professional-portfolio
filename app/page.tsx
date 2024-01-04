"use client";

import React, { useEffect, useState } from "react";
import { Parallax } from "@react-spring/parallax";
import LandingLayer from "@/components/parallax-layer/landing-layer";
import ReusableLayer from "@/components/parallax-layer/reusable-layer";
import homeSectionData from "@/data/home-section-data";
import { twMerge } from "tailwind-merge";

const Home = () => {
  const [isAbout, setIsAbout] = useState(false);
  const [isRouting, setIsRouting] = useState(false);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (isRouting) {
      setTimeout(() => setIsFading(true), 500);
    }
  }, [isRouting]);

  return (
    <Parallax
      pages={6}
      className={twMerge(
        "transition-opacity duration-[700ms]",
        isFading ? "opacity-0" : "opacity-100"
      )}
    >
      <LandingLayer
        isRouting={isRouting}
        isAbout={isAbout}
        setIsAbout={setIsAbout}
      />
      {homeSectionData.map((section, index) => (
        <ReusableLayer
          isAbout={isAbout}
          isRouting={isRouting}
          setIsRouting={setIsRouting}
          description={section.description}
          firstIcon={section.firstIcon}
          firstWord={section.firstWord}
          fourthIcon={section.fourthIcon}
          isEven={(index + 1) % 2 == 0}
          offset={index + 1}
          position={section.position}
          secondIcon={section.secondIcon}
          thirdIcon={section.thirdIcon}
          secondWord={section.secondWord}
          link={section.link}
          key={section.link}
        />
      ))}
    </Parallax>
  );
};

export default Home;
