import { PageTransitionContext } from "@/components/provider/page-transition-provider";
import { ProjectContext } from "@/components/provider/project-provider";
import ProductShowcase from "@/components/sub-section/page/project/hierarchy/product-showcase";
import ProjectIntroduction from "@/components/sub-section/page/project/hierarchy/project-introduction";
import BackArrow from "@/components/trigger/button/back-arrow";
import Hierarchy from "@/components/trigger/container/hierarchy";
import HierarchySection from "@/components/trigger/container/hierarchy-section";
import HiearchyLine from "@/components/trigger/display/hierarchy-line";
import { useContext } from "react";
import { twMerge } from "tailwind-merge";
import SelectionSection from "../../wrapper/selection-section";

const ProjectSelection = () => {
  const { isSelectingProject } = useContext(ProjectContext);
  const { pushPage } = useContext(PageTransitionContext);

  return (
    <SelectionSection isShow={isSelectingProject}>
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
            isShow={isSelectingProject}
            onClick={() => pushPage("/")}
          />
        </div>
        <Hierarchy>
          <HiearchyLine isStart={true} />
          <HierarchySection>
            <ProjectIntroduction />
          </HierarchySection>
          <HierarchySection>
            <ProductShowcase />
          </HierarchySection>
        </Hierarchy>
      </section>
    </SelectionSection>
  );
};

export default ProjectSelection;
