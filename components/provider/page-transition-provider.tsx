"use client";

import { useRouter } from "next/navigation";
import React, { createContext, useEffect, useState } from "react";

interface PageTransitionContext {
  isFading: boolean;
  setIsFading: (isFading: boolean) => void;
  width: number;
  pushPage: (page: string) => void;
}

// Create the context
export const PageTransitionContext = createContext<PageTransitionContext>({
  isFading: false,
  setIsFading: () => {},
  pushPage: () => {},
  width: window.innerWidth,
});

export const PageTransitionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const router = useRouter();

  const [isFading, setIsFading] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const pushPage = (page: string) => {
    setIsFading(true);
    setTimeout(() => {
      router.push(page);
    }, 1000);
  };

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <PageTransitionContext.Provider
      value={{
        isFading,
        setIsFading,
        pushPage,
        width,
      }}
    >
      {children}
    </PageTransitionContext.Provider>
  );
};
