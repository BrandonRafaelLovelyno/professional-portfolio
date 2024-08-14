"use client";

import { PageTransitionContext } from "@/components/provider/page-transition-provider";
import BackArrow from "@/components/trigger/button/back-arrow";
import { useContext } from "react";
import { ExperienceContext } from "@/components/provider/experience-provider";
import { twMerge } from "tailwind-merge";

const ClientPage: React.FC = () => {
  const { pushPage } = useContext(PageTransitionContext);
  const { isSelectingExperience, setIsSelectingExperience } =
    useContext(ExperienceContext);

  return (
    <section
      className={twMerge(
        "relative",
        "w-full h-full",
        isSelectingExperience ? "overflow-hidden" : "overflow-auto"
      )}
    >
      <BackArrow caption={"Home"} isShow={true} onClick={() => pushPage("/")} />
    </section>
  );
};

export default ClientPage;
