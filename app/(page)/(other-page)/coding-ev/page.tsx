"use client";

import ExpCarouselLayer from "@/components/animation/carousel/exp-carousel-layer";
import CODING_EXP from "@/data/coding-event-section-data";
import ORG_EXP from "@/data/org-exp-section-data";
import { Parallax } from "@react-spring/parallax";
import React, { useState } from "react";

const CodingEventPage = () => {
  const [isRouting, setIsRouting] = useState(false);
  const [isFading, setIsFading] = useState(false);
  return (
    <Parallax pages={CODING_EXP.length}>
      {CODING_EXP.map((o, index) => (
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

export default CodingEventPage;
