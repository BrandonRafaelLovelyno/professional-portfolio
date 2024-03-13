"use client";

import ExperiencePage from "@/components/page/experience-page";
import CERTIFICATE_EXP from "@/data/certificate-section-data";
import { CLIENT_EXP } from "@/data/client-exp-section-data";
import CODING_EXP from "@/data/coding-event-section-data";
import ORG_EXP, { Experience } from "@/data/org-exp-section-data";
import WORK_EXP from "@/data/work-exp-section-data";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";

interface PageLayoutProps {
  children: React.ReactNode;
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

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const experience = findExperience(pathname);

  return (
    <AnimatePresence>
      <motion.div
        key={pathname}
        className="h-screen w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <ExperiencePage experiences={experience} key={pathname} />
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageLayout;
