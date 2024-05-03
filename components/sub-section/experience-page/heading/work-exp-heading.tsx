import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

const WorkExpHeading = () => {
  return (
    <div
      className={twMerge(
        "w-full h-full pt-20",
        "flex flex-row gap-y-5 items-start",
        "px-6"
      )}
    >
      <div
        className={twMerge(
          "flex-1 w-fit",
          "flex flex-row justify-end items-center"
        )}
      >
        <p className="text-3xl text-extrabold">I take video for education </p>
      </div>
      <div
        className={twMerge("flex-1 flex flex-row justify-start items-center")}
      ></div>
    </div>
  );
};

export default WorkExpHeading;
