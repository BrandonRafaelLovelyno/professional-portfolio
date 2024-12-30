import React from "react";
import { FaSearch } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { twMerge } from "tailwind-merge";

interface KnowMoreButtonProps {
  text: string;
  onClick: () => void;
  Icon?: IconType
}

const KnowMoreButton: React.FC<KnowMoreButtonProps> = ({
  onClick,
  text,
  Icon = FaSearch
}) => {
  return (
    <button
      className={twMerge(
        "flex flex-row gap-x-5 px-5 py-2 rounded-full items-center justify-center text-lg border-2 relative",
        "font-bold",
        "overflow-hidden",
        "group"
      )}
      onClick={onClick}
    >
      <div
        className={twMerge(
          "absolute w-[120%] h-[120%]",
          "bg-white top-full",
          "group-hover:-translate-y-full",
          "rounded-t-full",
          "transition-transform duration-500 ease-in-out"
        )}
      ></div>
      <span
        className={twMerge(
          "z-10",
          "text-white group-hover:text-black",
          "duration-500"
        )}
      >
        {text}
      </span>
      <div
        className={twMerge(
          "z-10",
          "text-white group-hover:text-black",
          "duration-500"
        )}
      >
        <Icon size={20} />
      </div>
    </button>
  );
};

export default KnowMoreButton;
