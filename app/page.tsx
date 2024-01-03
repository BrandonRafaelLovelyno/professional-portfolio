"use client";

import React, { useState } from "react";
import { Parallax } from "@react-spring/parallax";
import LandingLayer from "@/components/parralax-layer/landing-layer";
import ReusableLayer from "@/components/parralax-layer/reusable-layer";
import { useParallax } from "react-scroll-parallax";

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
        firstIcon="/work experience/parralax/briefcase.png"
        secondIcon="/work experience/parralax/chair.png"
        thirdIcon="/work experience/parralax/employee.png"
        fourthIcon="/work experience/parralax/time.png"
      />
    </Parallax>
  );
};

export default Home;
