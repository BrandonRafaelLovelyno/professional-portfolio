"use client";

import { motion } from "framer-motion";
import React, { useCallback, useMemo, useState } from "react";
import Reveal from "../../animation/reveal";
import { HEROTITLE } from "@/data/display/landing-page-data";
import { twMerge } from "tailwind-merge";
import TitleTyping from "./title-typing";

const LandingHero: React.FC = () => {
  const [index, setIndex] = useState<number>(0);

  const setNextTitle = useCallback(() => {
    if (index < HEROTITLE.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }, [index]);

  const title = useMemo(() => {
    return HEROTITLE[index];
  }, [index]);

  return (
    <>
      <Reveal
        childrenDir="up"
        isBlock={true}
        blockColor="bg-secondary"
        blockDir="right"
      >
        <p
          className={twMerge(
            "lg:text-7xl lg:text-left font-bold text-black",
            "text-6xl text-center"
          )}
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Brandon Rafael Lovelyno
        </p>
      </Reveal>
      <div className={twMerge("lg:h-5", "h-8")} />
      <Reveal
        childrenDir="up"
        isBlock={true}
        blockColor="bg-secondary"
        blockDir="right"
      >
        <motion.div
          key={title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={twMerge(
            "text-secondary text-2xl lg:text-left",
            "text-center"
          )}
        >
          <TitleTyping title={title} setNextTitle={setNextTitle} />
        </motion.div>
      </Reveal>
    </>
  );
};

export default LandingHero;
