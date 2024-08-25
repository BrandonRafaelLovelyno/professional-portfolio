import LandingHero from "@/components/animation/page/landing-page/landing-hero";
import Reveal from "@/components/animation/reveal";
import { ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

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
          src="/image/page/home/hero/background.jpg"
          alt="Mountain"
          layout="fill"
          objectFit="cover"
        />
      </ParallaxLayer>
      <ParallaxLayer
        offset={0}
        className={twMerge(
          "w-full h-full flex flex-col justify-center",
          "px-10 md:px-32"
        )}
        speed={0.2}
      >
        <Reveal>
          <div
            className={twMerge("flex flex-col gap-y-2", "text-black font-bold")}
          >
            <p>Hi, my name is</p>
            <h1 className={twMerge("text-6xl font-bold")}>
              Brandon Rafael Lovelyno
            </h1>
            <h2 className="text-4xl font-bold text-gray-800">
              I build things with code
            </h2>
          </div>
        </Reveal>
      </ParallaxLayer>
    </>
  );
};

export default LandingParallax;
