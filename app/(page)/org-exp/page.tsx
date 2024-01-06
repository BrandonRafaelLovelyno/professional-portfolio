"use client";

import React, { useState } from "react";
import { Parallax } from "@react-spring/parallax";
import ExpCarouselLayer from "@/components/display/carousel/exp-carousel-layer";
import ORGANIZATIONAL_EXP from "@/data/experiencte-section-data";

const WorkExpPage = () => {
  const [isRouting, setIsRouting] = useState(false);
  const [isFading, setIsFading] = useState(false);
  return (
    <Parallax pages={2}>
      <ExpCarouselLayer
        experiences={ORGANIZATIONAL_EXP}
        isRouting={isRouting}
        offset={0}
        speed={0.8}
      />
    </Parallax>
  );
};

export default WorkExpPage;
