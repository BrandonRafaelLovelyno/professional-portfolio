import React from "react";
import { FaSearch } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

interface KnowMoreButtonProps {
  text: string;
  onClick: () => void;
}

const KnowMoreButton: React.FC<KnowMoreButtonProps> = ({
  onClick,

  text,
}) => {
  return (
    <button
      className={twMerge(
        "flex flex-row gap-x-5 px-5 py-2 rounded-full items-center justify-center text-lg border-2 relative",
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
        <FaSearch size={20} />
      </div>
    </button>
  );
};

export default KnowMoreButton;
