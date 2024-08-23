"use client";

import { twMerge } from "tailwind-merge";
import BackArrow from "@/components/trigger/button/back-arrow";
import { useContext } from "react";
import { PageTransitionContext } from "@/components/provider/page-transition-provider";
import HiearchyLine from "@/components/trigger/display/hierarchy-line";
import HierarchySection from "@/components/trigger/container/hierarchy-section";
import Hierarchy from "@/components/trigger/container/hierarchy";
import ClientIntroduction from "@/components/sub-section/page/client/hierarchy/client-introduction";
import { ExperienceContext } from "@/components/provider/experience-provider";
import ProductIntroduction from "@/components/sub-section/page/client/hierarchy/product-introduction";
import ProductShowcase from "@/components/sub-section/page/client/hierarchy/product-showcase";

const ClientSelection: React.FC = () => {
  const { pushPage } = useContext(PageTransitionContext);
  const { setIsSelectingExperience, isSelectingExperience } =
    useContext(ExperienceContext);
  return (
    <div
      className={twMerge(
        "flex flex-col",
        "w-full h-full",
        "overflow-y-scroll",
        "py-16",
        !isSelectingExperience && "opacity-50",
        "transition-opacity duration-300"
      )}
      onClick={() => setIsSelectingExperience(true)}
    >
      <div className={twMerge("ml-[7%]")}>
        <BackArrow caption="Home" isShow={true} onClick={() => pushPage("/")} />
      </div>
      <Hierarchy>
        <HiearchyLine isStart={true} />
        <HierarchySection>
          <ClientIntroduction />
        </HierarchySection>
        <HierarchySection>
          <ProductIntroduction />
        </HierarchySection>
        <HierarchySection>
          <ProductShowcase />
        </HierarchySection>
      </Hierarchy>
    </div>
  );
};

export default ClientSelection;
