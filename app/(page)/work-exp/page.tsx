"use client";

import React, { useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import ExpCarouselLayer from "@/components/display/exp-carousel-layer";

const WorkExpPage = () => {
  const [isRouting, setIsRouting] = useState(false);
  const [isFading, setIsFading] = useState(false);
  return (
    <Parallax pages={2}>
      <ExpCarouselLayer isRouting={isRouting} offset={0} speed={0.8} />
    </Parallax>
  );
};

export default WorkExpPage;
