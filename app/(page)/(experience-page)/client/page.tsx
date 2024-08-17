"use client";

import { twMerge } from "tailwind-merge";
import BackArrow from "@/components/trigger/button/back-arrow";
import { useContext } from "react";
import { PageTransitionContext } from "@/components/provider/page-transition-provider";
import { IoMdPerson } from "react-icons/io";
import HiearchyLine from "@/components/trigger/display/hierarchy-line";
import HierarchyIconLine from "@/components/trigger/container/hierarchy-icon-line";
import HierarchySection from "@/components/trigger/container/hierarchy-section";
import Hierarchy from "@/components/trigger/container/hierarchy";

const ClientPage: React.FC = () => {
  const { pushPage } = useContext(PageTransitionContext);
  return (
    <>
      <section className={twMerge("flex flex-col", "w-full h-full", "pt-16")}>
        <div className={twMerge("ml-[7%]")}>
          <BackArrow
            caption="Home"
            isShow={true}
            onClick={() => pushPage("/")}
          />
        </div>
        <Hierarchy>
          <HiearchyLine />
          <HierarchySection>
            <HierarchyIconLine>
              <IoMdPerson size={24} />
            </HierarchyIconLine>
            <div className={twMerge("flex flex-col gap-y-5")}>
              <h1>
                aoisdfhasodifhaofdjiaosdfjasdlkfansdoifcjaoinfsoifjhwrckutfgnwejdnakucfhsur
              </h1>
              <h1>
                aoisdfhasodifhaofdjiaosdfjasdlkfansdoifcjaoinfsoifjhwrckutfgnwejdnakucfhsur
              </h1>
            </div>
          </HierarchySection>
        </Hierarchy>
      </section>
    </>
  );
};

export default ClientPage;
