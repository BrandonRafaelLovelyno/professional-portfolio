import LandingHero from "@/components/animation/page/landing-page/landing-hero";
import Reveal from "@/components/animation/reveal";
import { ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

const HERO_PARALLAX: {
  imageUrl: string;
  speed: number;
}[] = [
  {
    imageUrl: "/image/page/home/hero/hero1.jpg",
    speed: -0.3,
  },
  {
    imageUrl: "/image/page/home/hero/hero2.png",
    speed: -0.6,
  },
  {
    imageUrl: "/image/page/home/hero/hero3.png",
    speed: -0.4,
  },
  {
    imageUrl: "/image/page/home/hero/hero4.png",
    speed: -0.3,
  },
  {
    imageUrl: "/image/page/home/hero/hero5.png",
    speed: 0.0,
  },
];

const LandingParallax: React.FC = () => {
  return (
    <>
      {HERO_PARALLAX.map((hero, index) => (
        <ParallaxLayer
          key={index}
          className={twMerge("w-full h-full relative")}
          offset={0}
          speed={hero.speed}
          factor={1.2}
        >
          <Image
            src={hero.imageUrl}
            alt="Mountain"
            layout="fill"
            objectFit="cover"
          />
        </ParallaxLayer>
      ))}

      <ParallaxLayer
        offset={0}
        className={twMerge(
          "w-full h-full flex flex-col justify-center",
          "px-10 md:px-32"
        )}
        speed={0.4}
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
