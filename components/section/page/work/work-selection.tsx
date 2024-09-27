"use client";

import { useContext } from "react";
import SelectionSection from "../../wrapper/selection-section";
import { ProjectContext } from "@/components/provider/project-provider";
import { twMerge } from "tailwind-merge";
import BackArrow from "@/components/trigger/button/back-arrow";
import { PageTransitionContext } from "@/components/provider/page-transition-provider";
import Hierarchy from "@/components/trigger/container/hierarchy";
import HiearchyLine from "@/components/trigger/display/hierarchy-line";
import HierarchySection from "@/components/trigger/container/hierarchy-section";
import WorkIntroduction from "@/components/sub-section/page/work/hierarchy/work-introduction";
import WorkReasoning from "@/components/sub-section/page/work/hierarchy/work-reasoning";
import WorkShowcase from "@/components/sub-section/page/work/hierarchy/work-showcase";
import { ExperienceContext } from "@/components/provider/experience-provider";

const WorkSelection = () => {
  const { pushPage } = useContext(PageTransitionContext);
  const { isSelectingExperience } = useContext(ExperienceContext);

  return (
    <SelectionSection isShow={isSelectingExperience}>
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
            <WorkIntroduction />
          </HierarchySection>
          <HierarchySection>
            <WorkReasoning />
          </HierarchySection>
          <HierarchySection>
            <WorkShowcase />
          </HierarchySection>
        </Hierarchy>
      </section>
    </SelectionSection>
  );
};

export default WorkSelection;
