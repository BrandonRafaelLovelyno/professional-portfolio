import { LandingPageSection } from "@/data/landing-page-section-data";
import React from "react";
import { twMerge } from "tailwind-merge";

interface LandingPageSectionTitleProps {
  sectionIndex: number;
  section: LandingPageSection;
}

const LandingPageSectionTitle: React.FC<LandingPageSectionTitleProps> = ({
  section,
  sectionIndex,
}) => {
  const [width, setWidth] = React.useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  React.useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div
        className={twMerge(
          "flex-1 flex flex-col justify-center items-center",
          width <= 1024 && "hidden"
        )}
      >
        <p className={twMerge(sectionIndex % 2 == 0 && "hidden")}>
          {section.firstWord}
        </p>
        <p className={twMerge(sectionIndex % 2 == 0 && "hidden")}>
          {section.secondWord}
        </p>
      </div>
      <div
        className={twMerge(
          "flex-1 flex flex-col justify-center items-center",
          width <= 1024 && "hidden"
        )}
      >
        <p className={twMerge(sectionIndex % 2 != 0 && "hidden")}>
          {section.firstWord}
        </p>
        <p className={twMerge(sectionIndex % 2 != 0 && "hidden")}>
          {section.secondWord}
        </p>
      </div>
      <div
        className={twMerge(
          "flex-1 flex flex-col justify-center items-center",
          width > 1024 && "hidden"
        )}
      >
        <p>{section.firstWord}</p>
        <p>{section.secondWord}</p>
      </div>
    </>
  );
};

export default LandingPageSectionTitle;
