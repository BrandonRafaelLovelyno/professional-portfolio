"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { Feature } from "@/data/coding-project-detail-data";
import DesktopMockup from "./desktop-mockup";

interface SingleFeatureProps {
  currentIndex: number;
  featureIndex: number;
  feature: Feature;
}

function findVariant(currentIndex: number, featureIndex: number): string {
  if (currentIndex == featureIndex) {
    return "onView";
  }
  if (currentIndex > featureIndex) {
    return "onNext";
  }
  return "onPrev";
}

const SingleFeature: React.FC<SingleFeatureProps> = ({
  currentIndex,
  featureIndex,
  feature,
}) => {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  useEffect(() => {
    const handleResize = () => {
      setWidth(typeof window !== "undefined" ? window.innerWidth : 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <motion.div
      className={twMerge(
        "w-full h-full absolute",
        "flex flex-col",
        "max-lg:justify-center"
      )}
      variants={{
        onPrev: width >= 1024 ? { y: "100%" } : { x: "100%" },
        onView: { y: 0, x: 0 },
        onNext: width >= 1024 ? { y: "-100%" } : { x: "-100%" },
      }}
      transition={{ type: "spring", stiffness: 60 }}
      initial={findVariant(currentIndex, featureIndex)}
      animate={findVariant(currentIndex, featureIndex)}
    >
      <div
        className={twMerge(
          "flex flex-row gap-x-5 items-center max-lg:justify-center"
        )}
      >
        <div
          className={twMerge(
            "border-4 border-white rounded-full flex justify-center items-center",
            "lg:p-8 p-6"
          )}
        >
          <div className="w-0 h-0 relative">
            <span
              className={twMerge(
                "-translate-x-1/2 font-bold -translate-y-1/2 absolute lg:text-5xl text-4xl"
              )}
            >
              {featureIndex}
            </span>
          </div>
        </div>
        <span className={twMerge("font-bold text-5xl")}>{feature.title}</span>
      </div>
      <div className="lg:mt-3 mt-5 text-gray-400 font-semibold px-4 max-lg:text-center">
        {feature.desc}
      </div>
      <div className="mt-10 flex flex-row w-full justify-center gap-x-10 items-center">
        <DesktopMockup
          currentIndex={currentIndex}
          featureIndex={featureIndex}
          video={feature.pcVideo}
        />
      </div>
    </motion.div>
  );
};

export default SingleFeature;
