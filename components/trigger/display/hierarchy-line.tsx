import { twMerge } from "tailwind-merge";

interface Props {
  color?: {
    from: "purple" | "blue" | "green" | "yellow" | "red" | "gray";

    to: "purple" | "blue" | "green" | "yellow" | "red" | "gray";
  };
  isStart?: boolean;
}

const COLORS = {
  purple: "purple-500",
  blue: "blue-500",
  green: "green-500",
  yellow: "yellow-500",
  red: "red-500",
  gray: "gray-500",
};

const getGradient = (color: Props["color"]) => {
  if (!color) return "from-black to-white";
  return `from-${COLORS[color.from]} to-${COLORS[color.to]}`;
};

const getHeight = (isStart: boolean) => {
  return isStart ? "h-5" : "h-full";
};

const HiearchyLine: React.FC<Props> = ({ color, isStart = false }) => {
  return (
    <div className={twMerge("w-12 flex-1", "flex flex-col items-center")}>
      <div
        className={twMerge(
          `w-[4px] ${getHeight(isStart)}`,
          `bg-gradient-to-b ${getGradient(color)}`,
          "rounded-xl"
        )}
      />
    </div>
  );
};

export default HiearchyLine;
