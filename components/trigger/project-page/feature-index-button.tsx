import { Feature } from "@/data/project/coding-project-detail-data";
import React from "react";
import { twMerge } from "tailwind-merge";

interface FeatureIndexButtonProps {
  setIndex: (index: number) => void;
  features: Feature[];
}

const FeatureIndexButton: React.FC<FeatureIndexButtonProps> = ({
  setIndex,
  features,
}) => {
  return (
    <div
      className={twMerge(
        "bg-background flex overflow-auto items-center lg:gap-y-5 max-lg:gap-x-5",
        "lg:flex-col flex-row justify-center w-full h-full",
        features.length >= 6 ? "justify-start" : "justify-center"
      )}
    >
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
  );
};

export default FeatureIndexButton;
