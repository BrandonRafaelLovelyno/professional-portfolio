"use client";

import { PageTransitionContext } from "@/components/provider/page-transition-provider";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ExperienceContext } from "@/components/provider/experience-provider";

const AllPageLayout = ({ children }: { children: React.ReactNode }) => {
  const { isFading, setIsFading } = React.useContext(PageTransitionContext);
  const { setIsSelectingExperience } = React.useContext(ExperienceContext);
  const pathName = usePathname();

  useEffect(() => {
    setIsFading(false);
    setIsSelectingExperience(false);
  }, [pathName, setIsFading, setIsSelectingExperience]);

  return (
    <motion.div
      className="w-full h-full relative"
      initial={{ opacity: 0 }}
      animate={isFading ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default AllPageLayout;
