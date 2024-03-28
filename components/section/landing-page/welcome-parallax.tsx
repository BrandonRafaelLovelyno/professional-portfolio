import { ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import React from "react";
import LandingHero from "../../animation/landing-page/landing-hero";

const WelcomeParallax: React.FC = () => {
  return (
    <>
      <ParallaxLayer
        className="w-full h-full relative"
        offset={0}
        speed={0}
        factor={1.2}
      >
        <Image
          src="/landing-page/hero-section/background.jpg"
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

export default WelcomeParallax;
