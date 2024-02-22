import { Feature } from "@/data/coding-project-detail-data";
import React, { useState } from "react";
import SingleFeature from "./single-feature";

interface FeatureSectionProps {
  features: Feature[];
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ features }) => {
  const [index, setIndex] = useState(1);
  return (
    <div className="flex flex-row w-[80%] h-full items-center">
      <div className="w-[90%] h-full  flex flex-col overflow-hidden relative">
        {features.map((feat, featIndex) => (
          <SingleFeature
            feature={feat}
            currentIndex={index}
            featureIndex={featIndex + 1}
            key={featIndex}
          />
        ))}
      </div>
      <div className="flex-1 bg-background flex flex-col overflow-auto h-[450px] justify-start items-center gap-y-5">
        {features.map((feat, featIndex) => (
          <button
            key={featIndex}
            className="p-6 border-2 rounded-full border-secondary hover:border-primary hover:bg-primary hover:text-background transition-all duration-300 font-semibold flex justify-center items-center"
            onClick={() => {
              setIndex(featIndex + 1);
            }}
          >
            <div className="w-0 h-0 relative">
              <span className="absolute -translate-x-1/2 -translate-y-1/2">
                {featIndex + 1}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
