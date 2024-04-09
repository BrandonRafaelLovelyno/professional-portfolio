import LandingPageSectionTitle from "@/components/sub-section/landing-page/landing-page-section-title";
import { LandingPageSection } from "@/data/display/landing-page-data";
import { ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

interface LandingPageSectionParallaxProps {
  section: LandingPageSection;
  sectionIndex: number;
}

const LandingPageSectionParallax: React.FC<LandingPageSectionParallaxProps> = ({
  section,
  sectionIndex,
}) => {
  return (
    <>
      {section.parallaxImage.map((image, imageIndex) => (
        <ParallaxLayer
          key={`${section.firstWord}`}
          offset={1.2 * (sectionIndex + 1)}
          speed={section.parallaxSpeed[imageIndex]}
          className="w-full h-full relative overflow-auto"
          factor={1.2}
        >
          <Image
            src={image}
            alt={`${imageIndex} image`}
            key={image}
            layout="fill"
            objectFit="cover"
          />
        </ParallaxLayer>
      ))}
      <ParallaxLayer
        offset={1.2 * (sectionIndex + 1)}
        className={twMerge(
          "w-full h-full",
          "flex flex-row justify-center items-center",
          "lg:px-20"
        )}
        key={`${section.firstWord} ${section.secondWord}`}
        speed={0.1}
        factor={1.2}
      >
        <LandingPageSectionTitle section={section} />
      </ParallaxLayer>
    </>
  );
};

export default LandingPageSectionParallax;
