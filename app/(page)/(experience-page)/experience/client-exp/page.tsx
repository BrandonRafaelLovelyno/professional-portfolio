"use client";

import { PageTransitionContext } from "@/components/provider/page-transition-provider";
import BackArrow from "@/components/trigger/all-page/back-arrow";
import { useContext } from "react";
import ClientSelectionSection from "@/components/section/client-page/client-selection-section";
import ClientDetailSection from "@/components/section/client-page/client-detail-section";

const ClientPage: React.FC = () => {
  const { pushPage } = useContext(PageTransitionContext);
  return (
    <>
      {" "}
      <BackArrow
        caption={"Home"}
        isShow={true}
        onClick={() => pushPage("/")}
        padding="px-10 pt-8"
      />
      <ClientSelectionSection />
      <ClientDetailSection />
    </>
  );
};

export default ClientPage;
