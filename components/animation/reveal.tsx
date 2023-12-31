"use client";

import React, { useEffect, useRef, useState } from "react";
import { Variants, motion, useAnimation, useInView } from "framer-motion";
import { twMerge } from "tailwind-merge";

type direction = "right" | "left" | "up" | "down";

interface RevealProps {
  isBlock: boolean;
  blockDir: direction | undefined;
  children: React.ReactNode;
  blockColor: string | undefined;
  childrenDir: direction;
  width: "w-full" | "w-fit";
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

const blockVisible: Record<direction, any> = {
  right: { left: "100%" },
  left: { right: "100%" },
  up: { bottom: "100%" },
  down: { top: "100%" },
};

const Reveal: React.FC<RevealProps> = ({
  isBlock,
  blockColor,
  blockDir,
  children,
  childrenDir,
  width,
}) => {
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
  }, [isInView, hasViewed]);

  return (
    <div className={twMerge(width, "overflow-hidden", "relative", "h-fit")}>
      <motion.div
        variants={{
          hidden: childHidden[childrenDir],
          visible: childVisible[childrenDir],
        }}
        transition={{
          duration: 0.5,
          ease: "easeIn",
          delay: isBlock ? 0.25 : 0,
        }}
        animate={mainControl}
        initial="hidden"
        ref={ref}
      >
        {children}
      </motion.div>
      {isBlock && (
        <motion.div
          animate={slideControl}
          className={twMerge(
            width,
            "absolute z-10 top-0 left-0 right-0",
            "w-full h-full",
            blockColor
          )}
          variants={{
            hidden: { left: 0 },
            visible: blockVisible[blockDir!],
          }}
          initial="hidden"
          transition={{ duration: 0.5, ease: "easeIn" }}
        />
      )}
    </div>
  );
};

export default Reveal;
