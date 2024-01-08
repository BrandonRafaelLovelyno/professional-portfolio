"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import ExperiencePage from "@/components/reusable-page/exp-page";
import CODING_PRO from "@/data/coding-project-section-data";

const CodingProjectPage = () => {
  const pathname = usePathname();
  const [isRouting, setIsRouting] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [isSection, setIsSection] = useState(false);

  useEffect(() => {
    if (isRouting) {
      setTimeout(() => setIsFading(true), 500);
    }
  }, [isRouting]);

  useEffect(() => {
    setIsFading(false);
    setIsRouting(false);
  }, [pathname]);

  return (
    <ExperiencePage
      experiences={CODING_PRO}
      isFading={isFading}
      isRouting={isRouting}
      isSection={isSection}
      setIsRouting={setIsRouting}
      setIsSection={setIsSection}
      key={pathname}
    />
  );
};

export default CodingProjectPage;
