"use client";

import ExpCarouselLayer from "@/components/animation/carousel/exp-carousel-layer";
import WORK_EXP from "@/data/work-exp-section-data";
import { Parallax } from "@react-spring/parallax";
import React, { useState } from "react";

const WorkExperiencePage = () => {
  const [isRouting, setIsRouting] = useState(false);
  const [isFading, setIsFading] = useState(false);
  return (
    <Parallax pages={WORK_EXP.length}>
      {WORK_EXP.map((o, index) => (
        <ExpCarouselLayer
          experience={o}
          isRouting={isRouting}
          offset={index}
          speed={1}
          key={o.position}
        />
      ))}
    </Parallax>
  );
};

export default WorkExperiencePage;
