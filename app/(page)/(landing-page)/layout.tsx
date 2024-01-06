"use client";

import { AnimatePresence, motion } from "framer-motion";
import React from "react";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="h-screen w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageLayout;
