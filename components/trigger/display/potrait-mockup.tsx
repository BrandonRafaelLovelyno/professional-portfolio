import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

interface PotraitMockupProps {
  source: string;
}

const PotraitMockup: React.FC<PotraitMockupProps> = ({ source }) => {
  return (
    <div className={twMerge("relative w-full h-full")}>
      <Image
        fill
        objectFit="contain"
        src={
          "https://res.cloudinary.com/dohewcyes/image/upload/v1724934239/image/page/work/experience/video-production/assets/r0sucv3fawlwrnrfu8m8.png"
        }
        alt="mockup"
        className={"absolute scale-y-[105%] scale-x-[118%]"}
      />
      <video
        autoPlay
        muted
        loop
        className={twMerge("w-full h-full", "overflow-hidden rounded-3xl")}
      >
        <source src={source} type="video/mp4" />
      </video>
    </div>
  );
};

export default PotraitMockup;
