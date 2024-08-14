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
      <div className={twMerge("flex flex-row gap-x-10 items-center", "px-14")}>
        <div
          className={twMerge(
            "flex-1",
            "flex flex-row justify-end items-center"
          )}
        >
          <p className="text-5xl text-end text-extrabold">{title}</p>
        </div>
        <div className={twMerge("flex-1 flex flex-row justify-start")}>
          <Image src={imageUrl} width={300} height={300} alt={title} />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeading;
