import LandingHero from "@/components/animation/page/landing-page/landing-hero";
import { ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import React from "react";

const LandingParallax: React.FC = () => {
  return (
    <>
      <ParallaxLayer
        className="w-full h-full relative"
        offset={0}
        speed={0}
        factor={1.2}
      >
        <Image
          src="/image/page/home/hero-section/background.jpg"
          alt="Mountain"
          layout="fill"
          objectFit="cover"
        />
      </ParallaxLayer>
      <ParallaxLayer
        offset={0}
        className="w-full h-full flex flex-col items-center justify-center"
      >
        <LandingHero />
      </ParallaxLayer>
    </>
  );
};

export default LandingParallax;
