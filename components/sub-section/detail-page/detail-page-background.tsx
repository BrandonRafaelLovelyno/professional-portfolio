import Image from "next/image";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { ExperienceContext } from "@/components/provider/experience-provider";

interface DetailPageBackgroundProps {
  images: string[];
  isSelecting: boolean;
  currentIndex: number;
}

const determineBackgroundVariants = (fromSelectingEvent: boolean) => {
  const ExperienceBackgroundVariant: Variants = {
    onLower: {
      opacity: 0,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
    onView: {
      opacity: 1,
      scale: 1.1,
      transition: {
        duration: 0.5,
        delay: fromSelectingEvent ? 1.2 : 0,
      },
    },
    onUpper: {
      opacity: 0,
      scale: 1.2,
      transition: {
        duration: 0.5,
      },
    },
    isNotSelectingExperience: {
      opacity: 0,
      scale: 1.2,
      transition: {
        duration: 0.5,
      },
    },
  };
  return ExperienceBackgroundVariant;
};

const DetailPageBackground: React.FC<DetailPageBackgroundProps> = ({
  images,
  isSelecting,

  currentIndex,
}) => {
  const [isFromSelectingEvent, setIsFromSelectingEvent] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (!isSelecting) {
      timeout = setTimeout(() => {
        setIsFromSelectingEvent(true);
      }, 200);
    }
    if (isSelecting) {
      timeout = setTimeout(() => {
        setIsFromSelectingEvent(false);
      }, 10);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [isSelecting]);

  const BackgroundVariants = useMemo(
    () => determineBackgroundVariants(isFromSelectingEvent),
    [isFromSelectingEvent]
  );
  return (
    <>
      {images.map((image, index) => (
        <div
          className={twMerge("absolute overflow-hidden", "w-full h-full z-[1]")}
          key={index}
        >
          <motion.div
            className={twMerge("h-full w-full", "relative")}
            key={index}
            variants={BackgroundVariants}
            animate={
              isSelecting
                ? currentIndex > index
                  ? "onLower"
                  : currentIndex < index
                  ? "onUpper"
                  : "onView"
                : "isNotSelectingExperience"
            }
          >
            <Image src={image} fill objectFit="cover" alt={`${index}`} />
          </motion.div>
        </div>
      ))}
    </>
  );
};

export default DetailPageBackground;