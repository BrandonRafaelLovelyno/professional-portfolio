"use client";

import ExperiencePage from "@/components/page/experience-page";
import { ExperienceProvider } from "@/components/provider/experience-provider";
import CERTIFICATE_EXP from "@/data/certificate/certificate-data";
import CODING_EXP from "@/data/experience/coding-event/coding-event-data";
import CODING_PRO from "@/data/project/coding-project-data";
import ORG_EXP, { Experience } from "@/data/experience/org-exp/org-exp-data";
import WORK_EXP from "@/data/experience/work-exp/work-exp-data";

import React from "react";

interface PageLayoutProps {
  children: React.ReactNode;
  params: {
    slug: string;
  };
}

function findExperience(pathname: string): Experience[] {
  if (pathname == "certif") {
    return CERTIFICATE_EXP;
  }
  if (pathname == "coding-ev") {
    return CODING_EXP;
  }
  if (pathname == "org-exp") {
    return ORG_EXP;
  }
  if (pathname == "work-exp") {
    return WORK_EXP;
  } else return CODING_PRO;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, params }) => {
  const path = params.slug;
  const experiences = findExperience(path);
  return (
    <ExperienceProvider>
      <ExperiencePage experiences={experiences} />
    </ExperienceProvider>
  );
};

export default PageLayout;
