"use client";

import React, { useState } from "react";
import { Parallax } from "@react-spring/parallax";
import LandingLayer from "@/components/parallax-layer/landing-layer";
import ReusableLayer from "@/components/parallax-layer/reusable-layer";

const Home = () => {
  const [isAbout, setIsAbout] = useState(false);

  return (
    <Parallax pages={6}>
      <LandingLayer isAbout={isAbout} setIsAbout={setIsAbout} />
      <ReusableLayer
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        offset={1}
        firstWord="Work"
        secondWord="Experience"
        postition={["Customer Service", "E-commerce Admin", "Video actor"]}
        isEven={false}
        firstIcon="/work experience/parallax/briefcase.png"
        secondIcon="/work experience/parallax/chair.png"
        thirdIcon="/work experience/parallax/employee.png"
        fourthIcon="/work experience/parallax/time.png"
      />
      <ReusableLayer
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        offset={2}
        firstWord="Organization"
        secondWord="Experience"
        postition={["Customer Service", "E-commerce Admin", "Video actor"]}
        isEven={true}
        firstIcon="/organizational experience/parallax/collaboration.png"
        secondIcon="/organizational experience/parallax/hierarchy.png"
        thirdIcon="/organizational experience/parallax/team.png"
        fourthIcon="/organizational experience/parallax/organization.png"
      />
      <ReusableLayer
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        offset={3}
        firstWord="Coding"
        secondWord="Event"
        postition={["Customer Service", "E-commerce Admin", "Video actor"]}
        isEven={false}
        firstIcon="/coding experience/parallax/code.png"
        secondIcon="/coding experience/parallax/api.png"
        thirdIcon="/coding experience/parallax/database.png"
        fourthIcon="/coding experience/parallax/developer.png"
      />
      <ReusableLayer
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        offset={4}
        firstWord="Coding"
        secondWord="Project"
        postition={["Customer Service", "E-commerce Admin", "Video actor"]}
        isEven={true}
        firstIcon="/coding project/parallax/twitter.png"
        secondIcon="/coding project/parallax/discord.png"
        thirdIcon="/coding project/parallax/project.png"
        fourthIcon="/coding project/parallax/spotify.png"
      />
      <ReusableLayer
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        offset={5}
        firstWord="Certificate"
        secondWord="& Awards"
        postition={["Customer Service", "E-commerce Admin", "Video actor"]}
        isEven={true}
        firstIcon="/awards/parallax/trophy.png"
        secondIcon="/awards/parallax/medal.png"
        thirdIcon="/awards/parallax/achievement.png"
        fourthIcon="/awards/parallax/winner.png"
      />
    </Parallax>
  );
};

export default Home;
