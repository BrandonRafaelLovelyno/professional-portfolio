import { twMerge } from "tailwind-merge";

const HiearchyLine = () => {
  return (
    <div className={twMerge("w-8 h-5", "flex flex-col items-center")}>
      <div className={twMerge("w-[2px] h-full bg-white")} />
    </div>
  );
};

export default HiearchyLine;
