"use client";

import React, { createContext, useState } from "react";

interface PageTransitionContext {
  isFading: boolean;
  setIsFading: (isFading: boolean) => void;
}

// Create the context
export const PageTransitionContext = createContext<PageTransitionContext>({
  isFading: false,
  setIsFading: () => {},
});

export const PageTransitionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isFading, setIsFading] = useState(false);

  return (
    <PageTransitionContext.Provider
      value={{
        isFading,
        setIsFading,
      }}
    >
      {children}
    </PageTransitionContext.Provider>
  );
};
