"use client";

import { useRouter } from "next/navigation";
import React, { createContext, useState } from "react";

interface PageTransitionContext {
  isFading: boolean;
  setIsFading: (isFading: boolean) => void;
  pushPage: (page: string) => void;
}

// Create the context
export const PageTransitionContext = createContext<PageTransitionContext>({
  isFading: false,
  setIsFading: () => {},
  pushPage: () => {},
});

export const PageTransitionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const [isFading, setIsFading] = useState(false);

  const pushPage = (page: string) => {
    setIsFading(true);
    setTimeout(() => {
      router.push(page);
    }, 1000);
  };

  return (
    <PageTransitionContext.Provider
      value={{
        isFading,
        setIsFading,
        pushPage,
      }}
    >
      {children}
    </PageTransitionContext.Provider>
  );
};
