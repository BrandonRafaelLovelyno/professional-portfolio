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
import Reveal from "@/components/animation/reveal";
import { CLIENT_EXP } from "@/data/client/client-data";
import Image from "next/image";

const ClientPage: React.FC = () => {
  const clients = CLIENT_EXP;
  const { pushPage } = useContext(PageTransitionContext);
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
            isShow={true}
            onClick={() => pushPage("/")}
          />
        </div>
        <Hierarchy>
          <HiearchyLine isStart={true} />
          <HierarchySection>
            <HierarchyIconLine>
              <IoMdPerson size={30} />
            </HierarchyIconLine>
            <Reveal>
              <div className={twMerge("flex flex-col gap-y-5")}>
                <div className={twMerge("flex flex-col gap-y-3")}>
                  <h3 className="font-bold text-xl text-gray-300">
                    Who is my clients?
                  </h3>
                  <h2 className="font-bold text-3xl">
                    Mostly they are
                    <span className="text-purple-400"> startups</span>. The rest
                    are
                    <span className="text-purple-400"> college events</span>
                  </h2>
                </div>
                {clients.map((client, index) => (
                  <Image
                    key={index}
                    alt={client.client.name}
                    src={client.logoUrl}
                    width={100}
                    height={100}
                  />
                ))}
              </div>
            </Reveal>
          </HierarchySection>
        </Hierarchy>
      </section>
    </>
  );
};

export default ClientPage;
