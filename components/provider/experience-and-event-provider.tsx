"use client";

import React, { createContext, use, useState } from "react";

interface ExperienceAndEventContext {
  experienceIndex: number;
  setExperienceIndex: (index: number) => void;
  eventIndex: number;
  setEventIndex: (index: number) => void;
  isSelectingExperience: boolean;
  setIsSelectingExperience: (isSelectingExperience: boolean) => void;
  isChangingEvent: boolean;
  setIsChangingEvent: (isChangingEvent: boolean) => void;
}

// Create the context
export const ExperienceAndEventContext =
  createContext<ExperienceAndEventContext>({
    experienceIndex: 0,
    setExperienceIndex: () => {},
    eventIndex: 0,
    setEventIndex: () => {},
    isSelectingExperience: true,
    setIsSelectingExperience: () => {},
    isChangingEvent: false,
    setIsChangingEvent: () => {},
  });

export const ExperienceAndEventProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [experienceIndex, setExperienceIndex] = useState(0);
  const [eventIndex, setEventIndex] = useState(0);
  const [isSelectingExperience, setIsSelectingExperience] = useState(true);
  const [isChangingEvent, setIsChangingEvent] = useState(false);

  return (
    <ExperienceAndEventContext.Provider
      value={{
        eventIndex,
        experienceIndex,
        setEventIndex,
        setExperienceIndex,
        isSelectingExperience,
        setIsSelectingExperience,
        isChangingEvent,
        setIsChangingEvent,
      }}
    >
      {children}
    </ExperienceAndEventContext.Provider>
  );
};
