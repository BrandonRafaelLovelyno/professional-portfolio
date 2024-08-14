import React from "react";
import { twMerge } from "tailwind-merge";
import KnowMoreButton from "../button/know-more-button";
import { Variants, motion } from "framer-motion";

interface CardInformationProps {
  titles: string[];
  currentIndex: number;
  setIsSelecting: (isSelecting: boolean) => void;
}

const titleVariants: Variants = {
  onUpper: {
    y: "-150%",
    transition: {
      duration: 0.5,
      type: "spring",
      damping: 15,
      stiffness: 100,
    },
  },
  onView: {
    y: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      damping: 15,
      stiffness: 100,
    },
  },
  onLower: {
    y: "150%",
    transition: {
      duration: 0.5,
      type: "spring",
      damping: 15,
      stiffness: 100,
    },
  },
};

const descriptionVariants = {
  onUpper: {
    y: "-150%",
    transition: {
      duration: 0.4,
      delay: 0.3,
    },
  },
  onView: {
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0.3,
    },
  },
  onLower: {
    y: "150%",
    transition: {
      duration: 0.4,
      delay: 0.3,
    },
  },
};

const CardInformation: React.FC<CardInformationProps> = ({
  titles,
  currentIndex,
  setIsSelecting,
}) => {
  console.log(titles);
  return (
    <div className={twMerge("flex flex-col gap-y-10 w-full")}>
      <div className={twMerge("flex flex-col gap-y-5")}>
        <div
          className={twMerge(
            "h-[50px] w-full flex items-center",
            "relative overflow-hidden"
          )}
        >
          {titles.map((title, index) => (
            <>
              <motion.h3
                className={twMerge(
                  "text-4xl font-bold text-white",
                  "absolute top-0 left-0 w-full h-full"
                )}
                variants={titleVariants}
                animate={
                  currentIndex > index
                    ? "onUpper"
                    : currentIndex === index
                    ? "onView"
                    : "onLower"
                }
                initial={
                  currentIndex > index
                    ? "onUpper"
                    : currentIndex === index
                    ? "onView"
                    : "onLower"
                }
              >
                {title}
              </motion.h3>
            </>
          ))}
        </div>
        <div
          className={twMerge(
            "h-[100px] w-full",
            "relative overflow-hidden flex items-center text-clip"
          )}
        >
          {titles.map((title, index) => (
            <>
              <motion.p
                className={twMerge(
                  "text-sm text-white",
                  "absolute top-0 left-0 w-full h-full"
                )}
                variants={descriptionVariants}
                animate={
                  currentIndex > index
                    ? "onUpper"
                    : currentIndex === index
                    ? "onView"
                    : "onLower"
                }
                initial={
                  currentIndex > index
                    ? "onUpper"
                    : currentIndex === index
                    ? "onView"
                    : "onLower"
                }
              >
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </motion.p>
            </>
          ))}
        </div>
      </div>
      <div className={twMerge("w-[80%]")}>
        <KnowMoreButton
          text="see events"
          onClick={() => {
            setIsSelecting(false);
          }}
          tailwindColor="bg-white"
          tailwindHoverColor="bg-white"
        />
      </div>
    </div>
  );
};

export default CardInformation;
