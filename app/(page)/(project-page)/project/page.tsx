"use client";

import { twMerge } from "tailwind-merge";
import BackArrow from "@/components/trigger/button/back-arrow";
import { useContext } from "react";
import { PageTransitionContext } from "@/components/provider/page-transition-provider";
import HiearchyLine from "@/components/trigger/display/hierarchy-line";
import HierarchySection from "@/components/trigger/container/hierarchy-section";
import Hierarchy from "@/components/trigger/container/hierarchy";
import { ProjectContext } from "@/components/provider/project-provider";

const ClientPage: React.FC = () => {
  const { pushPage } = useContext(PageTransitionContext);
  const { isSelectingProject } = useContext(ProjectContext);

  return (
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
      </Hierarchy>
    </section>
  );
};

export default ClientPage;
