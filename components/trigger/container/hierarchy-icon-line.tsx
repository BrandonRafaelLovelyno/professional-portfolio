import { Children } from "react";
import { twMerge } from "tailwind-merge";
import HiearchyLine from "../display/hierarchy-line";

interface Props {
  children: React.ReactNode;
  lineColor: {
    from: "purple" | "blue" | "green" | "yellow" | "red" | "gray";

    to: "purple" | "blue" | "green" | "yellow" | "red" | "gray";
  };
}

const HierarchyIconLine: React.FC<Props> = ({ children, lineColor }) => {
  return (
    <div className={twMerge("w-12 h-full", "flex flex-col items-center")}>
      <div
        className={twMerge(
          "bg-gradient-to-br from-gray-800 to-gray-900 rounded-full p-2"
        )}
      >
        {children}
      </div>
      <HiearchyLine color={lineColor} />
    </div>
  );
};

export default HierarchyIconLine;
