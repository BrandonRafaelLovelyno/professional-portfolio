import React from "react";
import { twMerge } from "tailwind-merge";

interface TextBoxProps {
  title: string;
  Icon: React.ReactNode;
  color: string;
  children: React.ReactNode;
  noChildrenPadding?: boolean;
}

const TextBox: React.FC<TextBoxProps> = ({
  title,
  Icon,
  color,
  children,
  noChildrenPadding,
}) => {
  const textColor = `text-${color}`;
  const bgColor = `bg-${color}`;
  return (
    <div
      className={twMerge(
        "w-full h-full",
        "flex flex-col justify-center items-center",
        !noChildrenPadding && "gap-y-8"
      )}
    >
      <div className={twMerge("flex flex-col w-full self-start", "gap-y-2")}>
        <div className={twMerge("flex flex-row items-center", "gap-x-3")}>
          <p className={twMerge(textColor, "font-bold text-lg")}>{title}</p>
          {Icon}
        </div>
        <div className={twMerge("w-full h-[2px]", bgColor)} />
      </div>
      {children}
    </div>
  );
};

export default TextBox;
