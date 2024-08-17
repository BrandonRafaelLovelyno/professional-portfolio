import { Children } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
}

const HierarchyIconLine: React.FC<Props> = ({ children }) => {
  return (
    <div className={twMerge("w-8 h-full", "flex flex-col items-center")}>
      {children}
      <div className={twMerge("w-[2px] flex-1 bg-white")} />
    </div>
  );
};

export default HierarchyIconLine;
