import Image from "next/image";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { ExperienceAndEventContext } from "@/components/provider/experience-and-event-provider";
import { isNotFoundError } from "next/dist/client/components/not-found";

interface ExperiencePageBackgroundProps {
  images: string[];
}

const determineBackgroundVariants = (fromSelectingEvent: boolean) => {
  const ExperienceBackgroundVariant: Variants = {
    onLower: {
      opacity: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 2,
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

const ExperiencePageBackground: React.FC<ExperiencePageBackgroundProps> = ({
  images,
}) => {
  const { experienceIndex, isSelectingExperience } = useContext(
    ExperienceAndEventContext
  );
  const [isFromSelectingEvent, setIsFromSelectingEvent] = useState(false);

  useEffect(() => {
    if (!isSelectingExperience) {
      setIsFromSelectingEvent(true);
    }
    if (isSelectingExperience) {
      const timeout = setTimeout(() => {
        setIsFromSelectingEvent(false);
      }, 100);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isSelectingExperience]);

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
              isSelectingExperience
                ? experienceIndex > index
                  ? "onLower"
                  : experienceIndex < index
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

export default ExperiencePageBackground;
