"use client";

import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import ExpCarouselLayer from "@/components/display/exp-carousel-layer";

const WorkExpPage = () => {
  return (
    <Parallax pages={2}>
      <ExpCarouselLayer offset={0} speed={0.8} />
    </Parallax>
  );
};

export default WorkExpPage;
