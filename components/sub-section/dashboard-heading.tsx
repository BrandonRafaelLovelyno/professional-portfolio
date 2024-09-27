import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

interface DashboardHeadingProps {
  title: string;
  imageUrl: string;
}

const DashboardHeading: React.FC<DashboardHeadingProps> = ({
  title,
  imageUrl,
}) => {
  return (
    <div className={twMerge("w-full", "pt-14")}>
      <div
        className={twMerge(
          "flex flex-col md:flex-row gap-x-10 items-center",
          "px-14"
        )}
      >
        <div
          className={twMerge(
            "flex-1",
            "flex flex-col justify-end items-center"
          )}
        >
          <p className="text-3xl lg:text-5xl text-center md:text-end text-extrabold">
            {title}
          </p>
        </div>
        <div
          className={twMerge(
            "w-[150px] h-[150px] md:w-[300px]  md:h-[300px] flex flex-row justify-start relative"
          )}
        >
          <Image src={imageUrl} alt={title} fill className="absolute" />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeading;
