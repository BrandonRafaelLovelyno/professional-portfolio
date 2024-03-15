"use client";

import React, { createContext, useState } from "react";

interface PageTransitionContext {
  isFading: boolean;
  isRouting: boolean;
  setIsFading: (isFading: boolean) => void;
  setIsRouting: (isRouting: boolean) => void;
}

// Create the context
export const PageTransitionContext = createContext<PageTransitionContext>({
  isFading: false,
  isRouting: false,
  setIsFading: () => {},
  setIsRouting: () => {},
});

export const PageTransitionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isFading, setIsFading] = useState(false);
  const [isRouting, setIsRouting] = useState(false);

  return (
    <PageTransitionContext.Provider
      value={{
        isFading,
        isRouting,
        setIsFading,
        setIsRouting,
      }}
    >
      {children}
    </PageTransitionContext.Provider>
  );
};
