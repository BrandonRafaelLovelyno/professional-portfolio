"use client";

import React, { useState } from "react";
import { Parallax } from "@react-spring/parallax";
import LandingLayer from "@/components/parralax-layer/landing-layer";
import ReusableLayer from "@/components/parralax-layer/reusable-layer";

const Home = () => {
  const [isAbout, setIsAbout] = useState(false);
  return (
    <Parallax pages={3}>
      <LandingLayer isAbout={isAbout} setIsAbout={setIsAbout} />
      <ReusableLayer
        offset={1}
        speed={1}
        firstWord="Work"
        secondWord="Experience"
        isEven={false}
      />
      <ReusableLayer
        offset={2}
        speed={1}
        firstWord="Organizational"
        secondWord="Experience"
        isEven={true}
      />
    </Parallax>
  );
};

export default Home;
