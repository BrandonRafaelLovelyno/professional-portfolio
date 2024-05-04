import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

const WorkExpHeading = () => {
  return (
    <div className={twMerge("w-full", "pt-14")}>
      <div className={twMerge("flex flex-row gap-x-10 items-center", "px-6")}>
        <div
          className={twMerge(
            "flex-1",
            "flex flex-row justify-end items-center"
          )}
        >
          <p className="text-5xl text-end text-extrabold">
            I take video for education{" "}
          </p>
        </div>
        <div className={twMerge("flex-1 flex flex-row justify-start")}>
          <Image
            src={"/image/work-exp/video-production/heading.png"}
            width={300}
            height={300}
            alt="video-production"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkExpHeading;
