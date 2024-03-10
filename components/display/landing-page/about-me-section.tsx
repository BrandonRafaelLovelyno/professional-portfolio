import { ABOUT_ME_DESCTIPRION } from "@/data/about-me-section-data";
import { ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

const AboutMeSection = () => {
  return (
    <>
      <ParallaxLayer offset={1} speed={0.9}>
        <div
          className={twMerge(
            "w-full h-full flex  justify-around items-center",
            "flex-col lg:flex-row"
          )}
        >
          <div
            className={twMerge(
              "w-32 h-32 rounded-full relative bg-white overflow-hidden",
              "lg:h-52 lg:w-52"
            )}
          >
            <Image
              fill
              objectFit="cover"
              layout="fill"
              src={"/client experience/nopfp.svg"}
              alt={"Brandon photo"}
            />
          </div>
          <div />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.4}>
        <div
          className={twMerge(
            "w-full h-full flex  justify-around items-center",
            "flex-col lg:flex-row"
          )}
        >
          <div />
          <div className={twMerge("", "w-[80%] lg:w-[40%]")}>
            <p>{ABOUT_ME_DESCTIPRION}</p>
          </div>
        </div>
      </ParallaxLayer>
    </>
  );
};

export default AboutMeSection;
