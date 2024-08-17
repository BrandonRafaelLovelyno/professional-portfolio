"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { twMerge } from "tailwind-merge";

type direction = "right" | "left" | "up" | "down";

interface RevealProps {
  childrenDir?: direction;
  children: React.ReactNode;
}

const childHidden: Record<direction, any> = {
  right: { opacity: 0, x: -20 },
  left: { opacity: 0, x: 20 },
  up: { opacity: 0, y: 20 },
  down: { opacity: 0, y: -20 },
};

const childVisible: Record<direction, any> = {
  right: { opacity: 1, x: 0 },
  left: { opacity: 1, x: 0 },
  up: { opacity: 1, y: 0 },
  down: { opacity: 1, y: 0 },
};

const Reveal: React.FC<RevealProps> = ({ childrenDir = "up", children }) => {
  const ref = useRef(null);
  const [hasViewed, setHasViewed] = useState<boolean>(false);
  const mainControl = useAnimation();
  const slideControl = useAnimation();
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (!hasViewed) {
      slideControl.start("visible");
    }
    if (isInView) {
      mainControl.start("visible");
      setHasViewed(true);
    } else {
      mainControl.start("hidden");
    }
  }, [isInView, hasViewed, mainControl, slideControl]);

  return (
    <div
      className={twMerge("w-fit overflow-hidden", "relative", "h-fit", "pb-2")}
    >
      <motion.div
        variants={{
          hidden: childHidden[childrenDir],
          visible: childVisible[childrenDir],
        }}
        transition={{
          duration: 0.3,
          ease: "easeIn",
        }}
        animate={mainControl}
        initial="hidden"
        ref={ref}
        className="w-fit flex justify-center"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
