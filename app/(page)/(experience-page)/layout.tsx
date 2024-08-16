"use client";

import { ExperienceProvider } from "@/components/provider/experience-provider";
import { PageTransitionContext } from "@/components/provider/page-transition-provider";
import BackArrow from "@/components/trigger/button/back-arrow";
import { useContext, useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

const PageLayout: React.FC<Props> = ({ children }) => {
  const { pushPage } = useContext(PageTransitionContext);
  return <ExperienceProvider>{children}</ExperienceProvider>;
};

export default PageLayout;
