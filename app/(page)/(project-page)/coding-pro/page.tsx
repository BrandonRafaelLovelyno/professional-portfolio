"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import ExperiencePage from "@/components/page/experience-page";
import CODING_PRO from "@/data/project/coding-project-data";

const CodingProjectPage = () => {
  const pathname = usePathname();
  return <ExperiencePage experiences={CODING_PRO} key={pathname} />;
};

export default CodingProjectPage;
