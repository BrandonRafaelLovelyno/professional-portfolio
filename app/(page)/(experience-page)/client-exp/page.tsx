"use client";

import { twMerge } from "tailwind-merge";
import { CLIENT_EXP } from "@/data/client-exp-data";
import BackArrow from "@/components/trigger/button/back-arrow";
import { useContext } from "react";
import { PageTransitionContext } from "@/components/provider/page-transition-provider";

const ClientPage: React.FC = () => {
  const clients = CLIENT_EXP;
  const { pushPage } = useContext(PageTransitionContext);
  return (
    <section
      className={twMerge(
        "relative",
        "flex flex-col",
        "w-full h-full",
        "no-scrollbar"
      )}
    >
      <BackArrow caption="Home" isShow={true} onClick={() => pushPage("/")} />
      <div
        className={twMerge(
          "w-full h-full",
          "flex justify-center items-center",
          "px-10"
        )}
      >
        <h1 className={twMerge("text-4xl text-center font-semibold")}>
          I make custom websites for start-ups, the rest are college events
        </h1>
      </div>
    </section>
  );
};

export default ClientPage;
