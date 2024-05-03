import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

const WorkExpHeading = () => {
  return (
    <div
      className={twMerge(
        "w-full h-full pt-20",
        "flex flex-row gap-x-5 items-start",
        "px-6"
      )}
    >
      <div
        className={twMerge("flex-1", "flex flex-row justify-end items-center")}
      >
        <p className="text-3xl text-extrabold">I take video for education </p>
      </div>
      <div className={twMerge("flex-1 flex flex-row justify-start")}>
        <Image
          src={"/image/work-exp/video-production/heading.jpg"}
          width={100}
          height={100}
          alt="video-production"
        />
      </div>
    </div>
  );
};

export default WorkExpHeading;
