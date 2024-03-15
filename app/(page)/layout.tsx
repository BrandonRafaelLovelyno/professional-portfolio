"use client";

import { PageTransitionContext } from "@/components/provider/page-transition-provider";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const AllPageLayout = ({ children }: { children: React.ReactNode }) => {
  const { isFading, setIsFading } = React.useContext(PageTransitionContext);
  const pathName = usePathname();

  useEffect(() => {
    setIsFading(false);
  }, [pathName, setIsFading]);

  return (
    <motion.div
      className="w-full h-full"
      initial={{ opacity: 0 }}
      animate={isFading ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default AllPageLayout;
