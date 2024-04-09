import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

interface PotraitMockupProps {
  source: string;
}

const PotraitMockup: React.FC<PotraitMockupProps> = ({ source }) => {
  return (
    <div className={twMerge("relative w-full h-full", "pt-3 px-3 pb-2")}>
      <Image
        fill
        objectFit="contain"
        src={"/image/work-exp/video-production/assets/smartphone-mockup.png"}
        alt="mockup"
      />
      <video
        autoPlay
        muted
        loop
        className={twMerge("object-cover w-full h-full")}
      >
        <source src={source} type="video/mp4" />
      </video>
    </div>
  );
};

export default PotraitMockup;
