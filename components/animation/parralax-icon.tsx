"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { ParallaxLayer } from "@react-spring/parallax";

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
    console.log(isInView);
    if (isInView) {
      mainControl.start("visible");
    } else {
      mainControl.start("hidden");
    }
  }, [isInView]);

  return (
    <ParallaxLayer offset={offset} speed={speed} className={layerClassname}>
      <motion.div
        variants={{
          hidden: { x: dir == "left" ? -40 : 40, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        }}
        transition={{ duration: 0.5, ease: "easeIn" }}
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
