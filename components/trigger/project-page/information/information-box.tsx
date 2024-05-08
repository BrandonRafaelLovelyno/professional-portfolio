import { TechStack } from "@/data/project/coding/coding-project-data";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

interface InformationBoxProps {
  Icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  identifier: string;
}

const InformationBox: React.FC<InformationBoxProps> = ({
  Icon,
  title,
  children,
  identifier,
}) => {
  return (
    <div
      className={twMerge(
        identifier,
        "h-full",
        "flex flex-col gap-y-5",
        "py-5 px-5",
        "border-[1px] border-white",
        "rounded-lg",
        "bg-gradient-to-br from-neutral-400 to-neutral-100"
      )}
    >
      <div
        className={twMerge(
          "w-fit",
          "flex justify-center items-center p-2 rounded-full",
          "bg-neutral-800"
        )}
      >
        {Icon}
      </div>
      <h1 className={twMerge("text-lg font-bold text-black")}>{title}</h1>
      {children}
    </div>
  );
};

export default InformationBox;
