"use client";

import { motion } from "framer-motion";
import React, { useEffect, useMemo, useState } from "react";
import Reveal from "../../animation/reveal";
import { HEROTITLE } from "@/data/home-section-data";
import { twMerge } from "tailwind-merge";

interface HeroProps {
  hide: boolean;
}

const Hero: React.FC<HeroProps> = ({ hide }) => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    if (index == HEROTITLE.length - 1) {
      setTimeout(() => setIndex(0), 1500);
    } else {
      setTimeout(() => setIndex(index + 1), 1500);
    }
  }, [index]);

  const title = useMemo(() => {
    return HEROTITLE[index];
  }, [index]);

  return (
    <>
      <Reveal
        hide={hide}
        childrenDir="up"
        isBlock={true}
        blockColor="bg-secondary"
        blockDir="right"
      >
        <p
          className={twMerge(
            "lg:text-7xl lg:text-left font-semibold italic",
            "text-6xl text-center"
          )}
        >
          Brandon Rafael Lovelyno
        </p>
      </Reveal>
      <div className={twMerge("lg:h-5", "h-8")} />
      <Reveal
        hide={hide}
        childrenDir="up"
        isBlock={true}
        blockColor="bg-secondary"
        blockDir="right"
      >
        <motion.p
          key={title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={twMerge(
            "text-secondary text-2xl lg:text-left",
            "text-center"
          )}
        >
          {title}
        </motion.p>
      </Reveal>
    </>
  );
};

export default Hero;
