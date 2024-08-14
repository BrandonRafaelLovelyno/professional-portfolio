"use client";

import { PageTransitionContext } from "@/components/provider/page-transition-provider";
import BackArrow from "@/components/trigger/button/back-arrow";
import { useContext } from "react";
import { ExperienceContext } from "@/components/provider/experience-provider";
import { twMerge } from "tailwind-merge";
import SelectionSection from "@/components/section/wrapper/selection-section";
import BookShelfSelection from "@/components/section/selection/book-shelf-selection";
import { CLIENT_EXP } from "@/data/client/client-exp-data";
import DetailSection from "@/components/section/wrapper/detail-section";
import DoubleBackArrow from "@/components/trigger/button/double-back-arrow";

const ClientPage: React.FC = () => {
  const { pushPage } = useContext(PageTransitionContext);
  const { isSelectingExperience, setIsSelectingExperience } =
    useContext(ExperienceContext);

  return (
    <section
      className={twMerge(
        "relative",
        "w-full h-full",
        isSelectingExperience ? "overflow-hidden" : "overflow-y-scroll",
        "no-scrollbar"
      )}
    >
      <DoubleBackArrow
        detail={{
          caption: "Client",
          isShow: !isSelectingExperience,
          onClick: () => setIsSelectingExperience(true),
        }}
        selection={{
          caption: "Home",
          isShow: isSelectingExperience,
          onClick: () => pushPage("/"),
        }}
      />
      <SelectionSection isShow={isSelectingExperience}>
        <BookShelfSelection clientExp={CLIENT_EXP} />
      </SelectionSection>
      <DetailSection isShow={!isSelectingExperience}>
        <div className="w-full h-[200vh] bg-red-500 overflow-y-auto flex justify-end items-end">
          <p>tes</p>
        </div>
      </DetailSection>
    </section>
  );
};

export default ClientPage;
