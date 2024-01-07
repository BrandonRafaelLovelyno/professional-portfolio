"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { ParallaxLayer } from "@react-spring/parallax";
import { twMerge } from "tailwind-merge";

interface ParallaxIconProps {
  dir: "left" | "right";
  children: React.ReactNode;
  divClassname: string;
  offset: number;
  speed: number;
  layerClassname: string;
}

const ParallaxIcon: React.FC<ParallaxIconProps> = ({
  dir,
  children,
  divClassname,
  offset,
  speed,
  layerClassname,
}) => {
  const ref = useRef(null);
  const mainControl = useAnimation();
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (isInView) {
      mainControl.start("visible");
    } else {
      mainControl.start("hidden");
    }
  }, [isInView]);

  return (
    <ParallaxLayer
      offset={offset}
      speed={speed}
      className={twMerge(layerClassname)}
    >
      <motion.div
        variants={{
          hidden: { x: dir == "left" ? -40 : 40, opacity: 0, scale: 0 },
          visible: { x: 0, opacity: 1, scale: 1 },
        }}
        transition={{ type: "spring", stiffness: 100 }}
        animate={mainControl}
        initial="hidden"
        ref={ref}
        className={divClassname}
      >
        {children}
      </motion.div>
    </ParallaxLayer>
  );
};

export default ParallaxIcon;
