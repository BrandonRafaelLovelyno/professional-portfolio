import { Children } from "react";
import { twMerge } from "tailwind-merge";
import HiearchyLine from "../display/hierarchy-line";

interface Props {
  children: React.ReactNode;
}

const HierarchyIconLine: React.FC<Props> = ({ children }) => {
  return (
    <div className={twMerge("w-8 h-full", "flex flex-col items-center")}>
      {children}
      <HiearchyLine color={{ from: "purple", to: "green" }} />
    </div>
  );
};

export default HierarchyIconLine;
