import React from "react";
import { FaBook } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

interface ReadMoreProps {
  setIsReadMore: (isRead: boolean) => void;
}

const ReadMore: React.FC<ReadMoreProps> = ({ setIsReadMore }) => {
  return (
    <button
      className={twMerge(
        "flex flex-row items-center w-fit",
        "rounded-full px-5 border-2 py-2 bg-background border-secondary gap-x-5",
        "hover:bg-primary hover:text-background hover:bg-opacity-80",
        "transition duration-300",
        "font-semibold",
        "mb-20 mr-20"
      )}
      onClick={() => {
        setIsReadMore(true);
      }}
    >
      <span>read more</span>
      <FaBook size={20} />
    </button>
  );
};

export default ReadMore;
