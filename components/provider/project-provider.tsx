"use client";

import React, { createContext, use, useState } from "react";

interface ProjectContext {
  projectIndex: number;
  setProjectIndex: (index: number) => void;
  isSelectingProject: boolean;
  setIsSelectingProject: (isSelectingProject: boolean) => void;
}

// Create the context
export const ProjectContext = createContext<ProjectContext>({
  projectIndex: 0,
  setProjectIndex: () => {},
  isSelectingProject: true,
  setIsSelectingProject: () => {},
});

export const ProjectProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [projectIndex, setProjectIndex] = useState(0);
  const [isSelectingProject, setIsSelectingProject] = useState(true);

  return (
    <ProjectContext.Provider
      value={{
        projectIndex,
        setProjectIndex,
        isSelectingProject,
        setIsSelectingProject,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
