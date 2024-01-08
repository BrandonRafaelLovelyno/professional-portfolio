import React from "react";
import { twMerge } from "tailwind-merge";
import Reveal from "../../animation/reveal";

interface ExpCardProps {
  exp: string[];
}

const ExpCard: React.FC<ExpCardProps> = ({ exp }) => {
  return (
    <div className="w-[60%] h-fit p-3 flex flex-row flex-wrap gap-x-3 gap-y-2">
      {exp.map((e) => (
        <div
          className={twMerge(
            "px-4 py-3 border-2 border-secondary rounded-full transition-all duration-300 cursor-pointer ",
            "bg-primary",
            "hover:bg-secondary",
            "italic text-sm",
            "shadow-2xl"
          )}
        >
          <Reveal childrenDir="up" hide={false} width="w-fit">
            <p className={twMerge("text-background", "font-semibold")}>{e}</p>
          </Reveal>
        </div>
      ))}
    </div>
  );
};

export default ExpCard;
