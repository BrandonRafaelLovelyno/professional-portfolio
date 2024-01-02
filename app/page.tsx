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
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        offset={1}
        firstWord="Work"
        secondWord="Experience"
        postition={["Customer Service", "E-commerce Admin", "Video actor"]}
        isEven={false}
      />
      <ReusableLayer
        offset={2}
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        firstWord="Organizational"
        secondWord="Experience"
        postition={["Public relation", "Liaison Officer", "Unity Initiative"]}
        isEven={true}
      />
    </Parallax>
  );
};

export default Home;
