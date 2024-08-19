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
import ProductSelection from "@/components/sub-section/page/client/hierarchy/product-selection";

const ClientPage: React.FC = () => {
  const { pushPage } = useContext(PageTransitionContext);
  const { isSelectingExperience } = useContext(ExperienceContext);
  return (
    <>
      <section
        className={twMerge(
          "flex flex-col",
          "w-full h-full",
          "overflow-y-scroll",
          "py-16"
        )}
      >
        <div className={twMerge("ml-[7%]")}>
          <BackArrow
            caption="Home"
            isShow={isSelectingExperience}
            onClick={() => pushPage("/")}
          />
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
            <ProductSelection />
          </HierarchySection>
        </Hierarchy>
      </section>
    </>
  );
};

export default ClientPage;
