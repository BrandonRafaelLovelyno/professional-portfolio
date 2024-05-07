import { PageTransitionContext } from "@/components/provider/page-transition-provider";
import KnowMoreButton from "@/components/trigger/all-page/know-more-button";
import { LandingPageSection } from "@/data/display/landing-page-data";
import { useRouter } from "next/navigation";
import React from "react";
import { twMerge } from "tailwind-merge";

interface LandingPageSectionTitleProps {
  section: LandingPageSection;
}

const LandingPageSectionTitle: React.FC<LandingPageSectionTitleProps> = ({
  section,
}) => {
  const router = useRouter();
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
  const divClassname =
    "flex-1 flex flex-col justify-center font-bold text-5xl tracking-widest gap-y-4";
  const { setIsFading } = React.useContext(PageTransitionContext);
  return (
    <>
      <div
        className={twMerge(
          divClassname,
          width <= 1024 && "hidden",
          "items-start"
        )}
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
        <div
          className={twMerge(
            section.titlePosition == "right" && "hidden",
            "mt-5"
          )}
        >
          <KnowMoreButton
            text="know more"
            onClick={() => {
              setTimeout(() => {
                router.push(section.link);
              }, 1000);
              setIsFading(true);
            }}
            key={`${section.firstWord} button`}
          />
        </div>
      </div>
      <div
        className={twMerge(
          divClassname,
          width <= 1024 && "hidden",
          section.titlePosition == "right" && "text-right",
          "items-end"
        )}
      >
        <p className={twMerge(section.titlePosition == "left" && "hidden")}>
          {section.firstWord}
        </p>
        <p className={twMerge(section.titlePosition == "left" && "hidden")}>
          {section.secondWord}
        </p>
        <div
          className={twMerge(
            section.titlePosition == "left" && "hidden",
            "mt-5"
          )}
        >
          <KnowMoreButton
            text="know more"
            onClick={() => {
              setTimeout(() => {
                router.push(section.link);
              }, 1000);
              setIsFading(true);
            }}
            key={`${section.firstWord} button`}
          />
        </div>
      </div>
      <div
        className={twMerge(
          divClassname,
          "items-center justify-center text-center",
          width > 1024 && "hidden"
        )}
      >
        <p>{section.firstWord}</p>
        <p>{section.secondWord}</p>
        <KnowMoreButton
          text="know more"
          onClick={() => {
            setTimeout(() => {
              router.push(section.link);
            }, 1000);
            setIsFading(true);
          }}
          key={`${section.firstWord} button`}
        />
      </div>
    </>
  );
};

export default LandingPageSectionTitle;
