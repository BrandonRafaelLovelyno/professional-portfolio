import SectionTitle from "@/components/sub-section/page/section-title";
import { LandingPageSection } from "@/data/display/landing-page-data";
import { ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

interface HomeParallaxProps {
  section: LandingPageSection;
  sectionIndex: number;
}

const HomeParallax: React.FC<HomeParallaxProps> = ({
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
        <SectionTitle section={section} />
      </ParallaxLayer>
    </>
  );
};

export default HomeParallax;
