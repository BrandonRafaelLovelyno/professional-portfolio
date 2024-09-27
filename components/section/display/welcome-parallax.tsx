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
    imageUrl:
      "https://res.cloudinary.com/dohewcyes/image/upload/v1724934231/image/page/home/hero/j0cz3lgoacrxjdbxpazb.jpg",
    speed: -0.3,
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dohewcyes/image/upload/v1724934232/image/page/home/hero/w5nbucqryycnnr9uhyfe.png",
    speed: -0.6,
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dohewcyes/image/upload/v1724934232/image/page/home/hero/ipqxndhqqyxidgw0bqug.png",
    speed: -0.4,
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dohewcyes/image/upload/v1724934233/image/page/home/hero/zdivin9noa6qwlt3a7if.png",
    speed: -0.3,
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dohewcyes/image/upload/v1724934233/image/page/home/hero/fyifbrnwpqcvhx3pcbd8.png",
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
            priority={true}
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
