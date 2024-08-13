import { ExperienceContext } from "@/components/provider/experience-provider";
import { useContext } from "react";
import { twMerge } from "tailwind-merge";

const ClientDetailSection = () => {
  const { isSelectingExperience } = useContext(ExperienceContext);
  return (
    <div
      className={twMerge(
        "absolute w-full h-full top-0 bg-yellow-500",
        isSelectingExperience
          ? "translate-y-10 opacity-0 z-50"
          : "translate-y-0 opacity-100 z-0",
        "transition-all duration-500 delay-200"
      )}
    ></div>
  );
};

export default ClientDetailSection;
