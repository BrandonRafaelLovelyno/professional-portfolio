"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import ProjectPage from "@/components/page/project-page";
import CODING_PRO from "@/data/project/coding-project-data";

const CodingProjectPage = () => {
  const pathname = usePathname();
  return <ProjectPage projects={CODING_PRO} />;
};
export default CodingProjectPage;
