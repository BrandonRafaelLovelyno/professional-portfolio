"use client";

import React, { useEffect, useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import LandingLayer from "@/components/display/landing-page/landing-section";
import ReusableLayer from "@/components/display/reusable-section";
import { twMerge } from "tailwind-merge";
import Section from "@/components/display/navigation-section";
import About from "@/components/display/landing-page/about-me-section";
import SectionButton from "@/components/trigger/section-button";
import { HOMESECTIONDATA } from "@/data/home-section-data";
import AboutMeSection from "@/components/display/landing-page/about-me-section";

const Home = () => {
  const [isRouting, setIsRouting] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [isSection, setIsSection] = useState(false);

  useEffect(() => {
    if (isRouting) {
      setTimeout(() => setIsFading(true), 500);
    }
  }, [isRouting]);

  return (
    <>
      {isSection && (
        <Section
          setIsRouting={setIsRouting}
          onClose={() => setIsSection(false)}
        />
      )}
      <Parallax
        pages={HOMESECTIONDATA.length + 2}
        className={twMerge(
          "transition-opacity duration-500",
          isFading ? "opacity-0" : "opacity-100"
        )}
      >
        <LandingLayer isRouting={isRouting} />
        <AboutMeSection />
        {HOMESECTIONDATA.map((section, index) => (
          <ReusableLayer
            isRouting={isRouting || isSection}
            setIsRouting={setIsRouting}
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
      <SectionButton isRouting={isRouting} setIsSection={setIsSection} />
    </>
  );
};

export default Home;
