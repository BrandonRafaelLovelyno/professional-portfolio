import LandingPageSectionTitle from "@/components/sub-section/landing-page/landing-page-section-title";
import { LandingPageSection } from "@/data/landing-page-section-data";
import { ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

interface LandingPageSectionParallaxProps {
  sectionIndex: number;
  section: LandingPageSection;
}

const LandingPageSectionParallax: React.FC<LandingPageSectionParallaxProps> = ({
  sectionIndex,
  section,
}) => {
  return (
    <>
      {section.parallaxImage.map((image, index) => (
        <ParallaxLayer
          key={`${section.firstWord}`}
          offset={sectionIndex + 1}
          speed={section.parallaxSpeed[index]}
          className="w-full h-full relative overflow-auto"
          factor={1.15}
        >
          <Image
            src={image}
            alt={`${index} image`}
            key={image}
            layout="fill"
            objectFit="cover"
          />
        </ParallaxLayer>
      ))}
      <ParallaxLayer
        offset={sectionIndex + 1}
        className={twMerge(
          "w-full h-full",
          "flex flex-row justify-center items-center",
          "lg:px-20"
        )}
        key={`${section.firstWord} ${section.secondWord}`}
        speed={0.2}
      >
        <LandingPageSectionTitle section={section} />
      </ParallaxLayer>
    </>
  );
};

export default LandingPageSectionParallax;
