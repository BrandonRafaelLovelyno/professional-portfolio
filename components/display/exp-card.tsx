import React from "react";
import { twMerge } from "tailwind-merge";

interface ExpCardProps {
  exp: string[];
}

const ExpCard: React.FC<ExpCardProps> = ({ exp }) => {
  return (
    <div className="w-full h-fit p-3 flex flex-row flex-wrap">
      {exp.map((e) => (
        <div
          className={twMerge(
            "px-3 py-2 border-2 border-secondary rounded-full transition-all duration-300 hover:bg-primary"
          )}
        >
          <p className="text-primary">{e}</p>
        </div>
      ))}
    </div>
  );
};

export default ExpCard;
