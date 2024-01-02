import React from "react";
import { FaSearch } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

const KnowMore = () => {
  return (
    <button
      className={twMerge(
        "flex flex-row items-center",
        "rounded-full px-5 border-2 py-2 bg-background border-secondary gap-x-5",
        "hover:bg-primary hover:text-background hover:bg-opacity-80",
        "transition duration-300",
        "font-semibold"
      )}
    >
      <span>know more</span>
      <FaSearch size={20} />
    </button>
  );
};

export default KnowMore;
