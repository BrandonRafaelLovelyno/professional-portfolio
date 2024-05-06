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
        src={"/image/work-exp/video-production/assets/smartphone-mockup.png"}
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
