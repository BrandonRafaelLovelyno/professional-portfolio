import Image from "next/image";
import React, { useContext, useState } from "react";
import { twMerge } from "tailwind-merge";
import { IoIosArrowDown } from "react-icons/io";
import { Variants, motion } from "framer-motion";
import { Event, Experience } from "@/data/experience/org-exp-data";
import { ExperienceAndEventContext } from "@/components/provider/experience-and-event-provider";

const arrowDivVariants: Variants = {
  unrotated: {
    rotate: 0,
  },
  rotated: {
    rotate: 180,
  },
};

interface EventDropdownOptionProps {
  experience: Experience;
  event: Event;
  isRotated?: boolean;
  setIsRotated?: (isRotated: boolean) => void;
  showArrow?: boolean;
}

const EventDropdownOption: React.FC<EventDropdownOptionProps> = ({
  isRotated,
  setIsRotated,
  showArrow,
  experience,
  event,
}) => {
  const { eventIndex } = useContext(ExperienceAndEventContext);
  return (
    <div
      className={twMerge(
        "w-full h-fit",
        "px-3",
        "flex flex-row gap-x-5 items-center"
      )}
    >
      <div
        className={twMerge(
          "h-[30px] w-[30px]",
          "relative",
          "rounded-md overflow-hidden"
        )}
      >
        <Image
          fill
          objectFit="cover"
          src={"/image/work-exp/video-production/assets/dart.png"}
          alt="test"
        />
      </div>
      <div
        className={twMerge(
          "flex flex-col items-start",
          "text-black",
          "gap-y-1"
        )}
      >
        <p className="text-sm font-bold tracking-wider">{event.position}</p>
        <p className="text-xs font-bold tracking-wider opacity-70">
          {experience.position}
        </p>
      </div>
      {showArrow && (
        <motion.div
          className={twMerge("ml-auto text-black")}
          animate={isRotated ? "rotated" : "unrotated"}
          variants={arrowDivVariants}
          initial={isRotated ? "rotated" : "unrotated"}
        >
          <IoIosArrowDown size={20} />
        </motion.div>
      )}
    </div>
  );
};

export default EventDropdownOption;
