"use client";

import React, { useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import LandingLayer from "@/components/parralax-layer/landing-layer";

const Home = () => {
  const [isAbout, setIsAbout] = useState(false);
  return (
    <div>
      <Parallax pages={3}>
        <LandingLayer isAbout={isAbout} setIsAbout={setIsAbout} />
        <ParallaxLayer offset={1} className="bg-red-500">
          <p>ya</p>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1.25} className="bg-background">
          <p>hei</p>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Home;
