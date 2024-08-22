import Image from "next/image";
import { useContext } from "react";
import { twMerge } from "tailwind-merge";
import { ExperienceContext } from "../provider/experience-provider";

interface Props {
  title: string;
  imageUrl: string;
  titleColor: string;
}

const BottomDashboardHeader: React.FC<Props> = ({
  title,
  imageUrl,
  titleColor,
}) => {
  const { setIsSelectingExperience } = useContext(ExperienceContext);
  return (
    <div
      className={twMerge(" w-full h-fit", "flex flex-row items-start")}
      onClick={() => setIsSelectingExperience(true)}
    >
      <div
        className={twMerge(
          "flex flex-row items-center gap-x-3",
          "pt-2 px-5",
          "bg-[#1C1C1C]",
          "rounded-t-lg"
        )}
        onClick={(e) => {
          e.stopPropagation();
          setIsSelectingExperience(false);
        }}
      >
        <p className="font-bold text-sm" style={{ color: titleColor }}>
          {title}
        </p>
        <div className="w-[40px] h-[40px] relative">
          <Image src={imageUrl} alt={title} fill />
        </div>
      </div>
    </div>
  );
};

export default BottomDashboardHeader;
