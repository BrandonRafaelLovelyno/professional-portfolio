import { Feature } from "@/data/coding-project-detail-data";
import React from "react";

interface FeatureSectionProps {
  features: Feature[];
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ features }) => {
  return (
    <div className="flex flex-row w-[80%] h-full">
      <div className="w-[80%] h-full bg-red-500" />
      <div className="flex-1 bg-primary" />
    </div>
  );
};

export default FeatureSection;
