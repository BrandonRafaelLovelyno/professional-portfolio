import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

interface InformationBoxProps {
  Icon: React.ReactNode;
  title: {
    position?: "left" | "right";
    text: string;
    className?: string;
  };
  children: React.ReactNode;
  identifier: string;
  padding?: string;
  image?: React.ReactNode;
  backgroundColor?: string;
}

const InformationBox: React.FC<InformationBoxProps> = ({
  Icon,
  title,
  children,
  identifier,
  padding = "px-5 py-5",
  image,
  backgroundColor,
}) => {
  return (
    <div
      className={twMerge(
        "relative",
        identifier,
        "h-full",
        "flex flex-col gap-y-3",
        padding,
        "rounded-lg",
        backgroundColor
      )}
    >
      <div
        className={twMerge(
          "w-fit",
          "flex justify-center items-center p-2 rounded-full",
          "bg-neutral-800",
          title.position === "right" && "ml-auto"
        )}
      >
        {Icon}
      </div>
      <h1
        className={twMerge(
          "text-lg font-bold text-black",
          title.position === "right" && "ml-auto",
          title.className
        )}
      >
        {title.text}
      </h1>
      {children}
      {image && image}
    </div>
  );
};

export default InformationBox;
