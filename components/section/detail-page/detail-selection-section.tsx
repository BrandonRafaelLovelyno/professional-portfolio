import DetailSelectionScrollPath from "@/components/trigger/detail-page/selection/detail-selection-scroll-path";
import ExperienceInformation from "@/components/trigger/detail-page/selection/detail-information";
import React from "react";
import { twMerge } from "tailwind-merge";
import { Variants, motion } from "framer-motion";
import DetailCardDeck from "@/components/sub-section/detail-page/detail-card-deck";

interface DetailSelectionSectionProps {
  isSelecting: boolean;
  setIsSelecting: (isSelecting: boolean) => void;
  setIndex: (index: number) => void;
  currentIndex: number;
  cardImages: string[];
  titles: string[];
}

const experienceInformationVariants: Variants = {
  isSelecting: {
    x: 0,
    scale: 1,
    transition: { delay: 0.9, duration: 1, ease: [0.6, 0.05, -0.01, 0.9] },
  },
  isNotSelecting: { x: "-230%", scale: 2.3, transition: { duration: 1.2 } },
};

const experienceCardDeckVariants: Variants = {
  isSelecting: {
    x: 0,
    scale: 1,
    transition: { delay: 0.8, duration: 0.9, ease: [0.6, 0.05, -0.01, 0.9] },
  },
  isNotSelecting: { x: "230%", scale: 2.3 },
};

const DetailSelectionSection: React.FC<DetailSelectionSectionProps> = ({
  isSelecting,
  setIndex,
  currentIndex,
  cardImages,
  titles,
  setIsSelecting,
}) => {
  return (
    <div
      className={twMerge(
        "w-full h-full",
        "flex flex-row",
        "absolute",
        isSelecting ? "z-20" : "z-10"
      )}
    >
      <motion.div
        className={twMerge(
          "flex flex-row gap-x-32 h-full w-[52%] items-center",
          "pl-20 pr-10"
        )}
        initial={{
          x: 0,
        }}
        animate={isSelecting ? "isSelecting" : "isNotSelecting"}
        variants={experienceInformationVariants}
      >
        <DetailSelectionScrollPath
          array={titles}
          setIndex={setIndex}
          currentIndex={currentIndex}
        />

        <ExperienceInformation
          currentIndex={currentIndex}
          setIsSelecting={setIsSelecting}
          titles={titles}
        />
      </motion.div>
      <motion.div
        variants={experienceCardDeckVariants}
        className={twMerge(
          "flex-1 h-full",
          "flex flex-col gap-y-5 justify-center items-start"
        )}
        initial={{
          x: 0,
        }}
        animate={isSelecting ? "isSelecting" : "isNotSelecting"}
        transition={{ duration: 1.2, ease: [0.6, 0.05, -0.01, 0.9] }}
      >
        <DetailCardDeck
          currentIndex={currentIndex}
          setIndex={setIndex}
          images={cardImages}
          titles={titles}
        />
      </motion.div>
    </div>
  );
};

export default DetailSelectionSection;
