"use client";

import ExperiencePage from "@/components/parallax-layer/exp-page";
import CERTIFICATE_EXP from "@/data/certificate-section-data";
import CODING_EXP from "@/data/coding-event-section-data";
import ORG_EXP, { Experience } from "@/data/org-exp-section-data";
import WORK_EXP from "@/data/work-exp-section-data";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

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
  }
  return WORK_EXP;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const [isRouting, setIsRouting] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [isSection, setIsSection] = useState(false);

  const experience = findExperience(pathname);

  useEffect(() => {
    if (isRouting) {
      setTimeout(() => setIsFading(true), 500);
    }
  }, [isRouting]);

  return (
    <AnimatePresence>
      <motion.div
        key={pathname}
        className="h-screen w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <ExperiencePage
          experiences={experience}
          isFading={isFading}
          isRouting={isRouting}
          isSection={isSection}
          setIsRouting={setIsRouting}
          setIsSection={setIsSection}
        />
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageLayout;
