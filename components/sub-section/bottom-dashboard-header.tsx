import Image from "next/image";
import { useContext } from "react";
import { twMerge } from "tailwind-merge";
import { ExperienceContext } from "../provider/experience-provider";

interface Props {
  title: string;
  imageUrl: string;
}

const BottomDashboardHeader: React.FC<Props> = ({ title, imageUrl }) => {
  const { setIsSelectingExperience } = useContext(ExperienceContext);
  return (
    <div className={twMerge("flex flex-row")}>
      <div
        className={twMerge(
          "w-fit",
          "flex flex-row items-center gap-x-3",
          "pt-2 px-5",
          "bg-[#1C1C1C]",
          "rounded-t-lg"
        )}
      >
        <p className="font-bold text-sm text-orange-500">EZParenting</p>
        <Image src={imageUrl} alt={title} height={40} width={40} />
      </div>
      <div onClick={() => setIsSelectingExperience(true)} />
    </div>
  );
};

export default BottomDashboardHeader;
