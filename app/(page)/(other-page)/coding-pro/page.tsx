"use client";

import ExpCarouselLayer from "@/components/animation/carousel/exp-carousel-layer";
import ORG_EXP from "@/data/org-exp-section-data";
import { Parallax } from "@react-spring/parallax";
import React, { useState } from "react";

const CodingProjectPage = () => {
  const [isRouting, setIsRouting] = useState(false);
  const [isFading, setIsFading] = useState(false);
  return (
    <Parallax pages={ORG_EXP.length}>
      {ORG_EXP.map((o, index) => (
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

export default CodingProjectPage;
