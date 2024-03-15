import { LandingPageSection } from "@/data/landing-page-section-data";
import React from "react";
import { twMerge } from "tailwind-merge";

interface LandingPageSectionTitleProps {
  section: LandingPageSection;
}

const LandingPageSectionTitle: React.FC<LandingPageSectionTitleProps> = ({
  section,
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
          "flex-1 flex flex-col justify-center items-center font-bold text-5xl tracking-widest",
          width <= 1024 && "hidden"
        )}
        style={{ fontFamily: "Roboto Slab" }}
      >
        <p
          className={twMerge(
            section.titlePosition == "right" && "hidden",
            "text-left"
          )}
        >
          {section.firstWord}
        </p>
        <p
          className={twMerge(
            section.titlePosition == "right" && "hidden",
            "text-left"
          )}
        >
          {section.secondWord}
        </p>
      </div>
      <div
        className={twMerge(
          "flex-1 flex flex-col justify-center items-center",
          width <= 1024 && "hidden",
          section.titlePosition == "right" && "text-right"
        )}
        style={{ fontFamily: "Roboto Slab" }}
      >
        <p className={twMerge(section.titlePosition == "left" && "hidden")}>
          {section.firstWord}
        </p>
        <p className={twMerge(section.titlePosition == "left" && "hidden")}>
          {section.secondWord}
        </p>
      </div>
      <div
        className={twMerge(
          "flex-1 flex flex-col justify-center items-center",
          width > 1024 && "hidden"
        )}
      >
        <p style={{ fontFamily: "Roboto Slab" }}>{section.firstWord}</p>
        <p style={{ fontFamily: "Roboto Slab" }}>{section.secondWord}</p>
      </div>
    </>
  );
};

export default LandingPageSectionTitle;
