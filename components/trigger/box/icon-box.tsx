import React from "react";
import { twMerge } from "tailwind-merge";

interface IconBoxProps {
  Icon: React.ReactNode;
  title: string;
  titleColor: string;
  Value: React.ReactNode;
}

const IconBox: React.FC<IconBoxProps> = ({
  Icon,
  title,
  titleColor,
  Value,
}) => {
  return (
    <div
      className={twMerge(
        "flex flex-col",
        "w-full h-fit",
        "gap-y-5 items-center justify-center"
      )}
    >
      <div className={twMerge("flex flex-col items-center", "gap-y-3")}>
        {Icon}
        <p
          className={twMerge(
            "text-sm tracking-wider  font-semibold",
            titleColor
          )}
        >
          {title}
        </p>
      </div>
      {Value}
    </div>
  );
};

export default IconBox;
