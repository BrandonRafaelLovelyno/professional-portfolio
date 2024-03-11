"use client";

import dynamic from "next/dynamic";
import React from "react";
import { twMerge } from "tailwind-merge";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

interface DesktopMockupInterface {
  video: string;
  currentIndex: number;
  featureIndex: number;
}

const DesktopMockup: React.FC<DesktopMockupInterface> = ({
  video,
  currentIndex,
  featureIndex,
}) => {
  return (
    <div
      className={twMerge(
        "w-[576px] h-[374px] bg-neutral-800  rounded-t-lg rounded-b-lg  relative wrapper",
        "border-white border-[5px]",
        "max-lg:w-full max-lg:border-0"
      )}
    >
      <ReactPlayer
        url={video}
        controls={true}
        loop={true}
        playing={currentIndex === featureIndex}
        width={"100%"}
        height={"100%"}
      />
    </div>
  );
};

export default DesktopMockup;
