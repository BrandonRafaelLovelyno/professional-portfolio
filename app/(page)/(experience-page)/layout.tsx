"use client";

import { ExperienceProvider } from "@/components/provider/experience-provider";

interface Props {
  children: React.ReactNode;
}

const PageLayout: React.FC<Props> = ({ children }) => {
  return <ExperienceProvider>{children}</ExperienceProvider>;
};

export default PageLayout;
