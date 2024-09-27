"use client";

import { motion } from "framer-motion";
import React, { useCallback, useMemo, useState } from "react";
import { HEROTITLE } from "@/data/landing-page-data";
import { twMerge } from "tailwind-merge";
import TitleTyping from "./title-typing";
import Reveal from "../../reveal";

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
      <div className={twMerge("lg:h-5", "h-8")} />
      <Reveal childrenDir="up">
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
