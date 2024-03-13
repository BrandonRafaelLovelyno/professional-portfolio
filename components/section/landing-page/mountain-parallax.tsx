import { ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import React from "react";
import LandingHero from "../../animation/landing-page/landing-hero";
import ParallaxIcon from "@/components/animation/parralax-icon";

const MountainParallax: React.FC = () => {
  return (
    <>
      <ParallaxLayer className="w-full h-full relative" offset={0} speed={0.4}>
        <Image
          src="/landing parallax/night-sky.jpg"
          alt="Mountain"
          layout="fill"
          objectFit="cover"
          style={{ filter: "brightness(0.9)" }}
        />
      </ParallaxLayer>
      <ParallaxLayer className="w-full h-full relative" offset={0} speed={0.1}>
        <Image
          src="/landing parallax/background.png"
          alt="Mountain"
          layout="fill"
          objectFit="cover"
          style={{ filter: "brightness(0.7)" }}
        />
      </ParallaxLayer>
      <ParallaxLayer className="w-full h-full relative" offset={0} speed={0.3}>
        <Image
          src="/landing parallax/bottom-mountains.png"
          alt="Mountain"
          layout="fill"
          objectFit="cover"
          style={{ filter: "brightness(0.7)" }}
        />
      </ParallaxLayer>
      <ParallaxLayer className="w-full h-full flex flex-col items-center justify-center">
        <LandingHero />
      </ParallaxLayer>
      <ParallaxLayer className="w-full h-full relative" offset={0} speed={0.4}>
        <Image
          src="/landing parallax/dark-right-mountains.png"
          alt="Mountain"
          layout="fill"
          objectFit="cover"
        />
      </ParallaxLayer>
      <ParallaxLayer className="w-full h-full relative" offset={0} speed={0.2}>
        <Image
          src="/landing parallax/dark-left-mountains.png"
          alt="Mountain"
          layout="fill"
          objectFit="cover"
          style={{ filter: "brightness(0.4)" }}
        />
      </ParallaxLayer>
    </>
  );
};

export default MountainParallax;
