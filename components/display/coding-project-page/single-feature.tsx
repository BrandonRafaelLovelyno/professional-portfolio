import React from "react";
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
  return (
    <motion.div
      className={twMerge(
        "w-full h-full absolute",

        "flex flex-col py-9 pl-9"
      )}
      variants={{
        onPrev: { y: "100%" },
        onView: { y: 0 },
        onNext: { y: "-100%" },
      }}
      transition={{ type: "spring", stiffness: 60 }}
      initial={findVariant(currentIndex, featureIndex)}
      animate={findVariant(currentIndex, featureIndex)}
    >
      <div className="flex flex-row gap-x-5 items-center">
        <div className="p-8 border-4 border-white rounded-full flex justify-center items-center">
          <div className="w-0 h-0 relative">
            <span className="-translate-x-1/2 text-5xl font-bold -translate-y-1/2 absolute">
              {featureIndex}
            </span>
          </div>
        </div>
        <span className="text-5xl font-bold">{feature.title}</span>
      </div>
      <div className="mt-3 text-gray-400 font-semibold">{feature.desc}</div>
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
