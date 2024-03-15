"use client";

import CERTIFICATE_EXP from "@/data/certificate-section-data";
import { CLIENT_EXP } from "@/data/client-exp-section-data";
import CODING_EXP from "@/data/coding-event-section-data";
import ORG_EXP, { Experience } from "@/data/org-exp-section-data";
import WORK_EXP from "@/data/work-exp-section-data";

import React from "react";

interface PageLayoutProps {
  children: React.ReactNode;
  params: {
    slug: string;
  };
}

function findExperience(pathname: string): Experience[] {
  if (pathname == "/certif") {
    return CERTIFICATE_EXP;
  }
  if (pathname == "/coding-ev") {
    return CODING_EXP;
  }
  if (pathname == "/org-exp") {
    return ORG_EXP;
  }
  if (pathname == "/work-exp") {
    return WORK_EXP;
  } else return CLIENT_EXP;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, params }) => {
  const path = params.slug;
  const experience = findExperience(path);

  return <p>hai</p>;
};

export default PageLayout;
