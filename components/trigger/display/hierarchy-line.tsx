import { twMerge } from "tailwind-merge";

interface Props {
  color?: {
    from: "purple" | "blue" | "green" | "yellow" | "red" | "gray";

    to: "purple" | "blue" | "green" | "yellow" | "red" | "gray";
  };
  isStart?: boolean;
  height?: string;
}

const COLORS = {
  purple: "#a855f7",
  blue: "#3b82f6",
  green: "#22c55e",
  yellow: "#eab308",
  red: "#ef4444",
  gray: "#6b7280",
};

const getGradient = (color: Props["color"]) => {
  if (!color) return { background: "linear-gradient(to bottom, black, white)" };
  return {
    background: `linear-gradient(to bottom, ${COLORS[color.from]}, ${
      COLORS[color.to]
    })`,
  };
};

const getHeight = (isStart: boolean) => {
  return isStart ? "h-5" : "h-full";
};

const HiearchyLine: React.FC<Props> = ({
  color,
  isStart = false,
  height = "flex-1",
}) => {
  const gradient = getGradient(color);

  return (
    <div className={twMerge(`w-12 ${height}`, "flex flex-col items-center")}>
      <div
        className={twMerge(`w-[4px] ${getHeight(isStart)}`, "rounded-xl")}
        style={gradient}
      />
    </div>
  );
};

export default HiearchyLine;
