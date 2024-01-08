import { Feature } from "@/data/coding-project-detail-data";
import React, { useState } from "react";

interface FeatureSectionProps {
  features: Feature[];
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ features }) => {
  const [featIndex, setFeatIndex] = useState(0);
  return (
    <div className="flex flex-row w-[80%] h-full">
      <div className="w-[90%] h-full bg-red-500">{featIndex}</div>
      <div className="flex-1 bg-background flex flex-col justify-center items-center">
        {features.map((feat, index) => (
          <button
            className="p-4 border-2 rounded-full border-secondary hover:border-primary hover:bg-primary hover:text-background transition-all duration-300 font-semibold relative"
            onClick={() => {
              setFeatIndex(index);
            }}
          >
            p
            <span className="absolute top-1/2 left-1/2 -translate-y-1/2">
              {index}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
