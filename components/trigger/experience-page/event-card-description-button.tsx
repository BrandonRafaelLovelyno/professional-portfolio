import React from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

interface EventCardDescriptionButtonProps {
  setIsShowCardDescription: (isShowCardDescription: boolean) => void;
  isShowCardDescription: boolean;
}

const variants = {
  isShowCardDescription: { y: "300px" },
  isNotShowCardDescription: { y: 0 },
};

const EventCardDescriptionButton: React.FC<EventCardDescriptionButtonProps> = ({
  setIsShowCardDescription,
  isShowCardDescription,
}) => {
  return (
    <motion.button
      className={twMerge(
        "p-2 rounded-full bg-white absolute right-5 top-5",
        "transition-all duration-300 ease-in-out"
      )}
      onClick={() => {
        setIsShowCardDescription(!isShowCardDescription);
      }}
      animate={
        isShowCardDescription
          ? "isShowCardDescription"
          : "isNotShowCardDescription"
      }
      variants={variants}
    >
      p
    </motion.button>
  );
};

export default EventCardDescriptionButton;
