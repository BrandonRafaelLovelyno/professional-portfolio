"use client";

import React, { createContext, use, useState } from "react";

interface ExperienceContext {
  experienceIndex: number;
  setExperienceIndex: (index: number) => void;
  isSelectingExperience: boolean;
  setIsSelectingExperience: (isSelectingExperience: boolean) => void;
}

// Create the context
export const ExperienceContext = createContext<ExperienceContext>({
  experienceIndex: 0,
  setExperienceIndex: () => {},
  isSelectingExperience: true,
  setIsSelectingExperience: () => {},
});

export const ExperienceProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [experienceIndex, setExperienceIndex] = useState(0);
  const [isSelectingExperience, setIsSelectingExperience] = useState(true);

  return (
    <ExperienceContext.Provider
      value={{
        experienceIndex,
        setExperienceIndex,
        isSelectingExperience,
        setIsSelectingExperience,
      }}
    >
      {children}
    </ExperienceContext.Provider>
  );
};
