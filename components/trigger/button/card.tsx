import { Experience } from "@/data/experience/org-exp/org-exp-data";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import { Variants, motion } from "framer-motion";

interface CardProps {
  currentIndex: number;
  selfIndex: number;
  onClick: () => void;
  title: string;
  image: string;
}

const Card: React.FC<CardProps> = ({
  title,
  selfIndex,
  onClick,
  currentIndex,
  image,
}) => {
  const CardVariants: Variants = {
    onLeft: {
      x: "-100%",
      scale: 0.8,
    },
    onView: {
      x: 0,
    },
    onRight: {
      x: ((selfIndex - currentIndex) * 100).toString() + "%",
      scale: 0.9,
    },
  };
  return (
    <motion.div
      className={twMerge("w-[220px] h-[360px]", "absolute", "cursor-pointer")}
      initial={
        currentIndex > selfIndex
          ? "onLeft"
          : currentIndex < selfIndex
          ? "onRight"
          : "onView"
      }
      animate={
        currentIndex > selfIndex
          ? "onLeft"
          : currentIndex < selfIndex
          ? "onRight"
          : "onView"
      }
      variants={CardVariants}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      onClick={onClick}
    >
      <div className="relative w-full h-full">
        <Image src={image} alt={title} fill objectFit="cover" />
        <div
          className={twMerge(
            "absolute left-3 bottom-3",
            "flex flex-col gap-y-1"
          )}
        >
          <p className="font-extrabold text-sm">{title}</p>
          <p className="font-thin text-xs">lorem ipsum</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
