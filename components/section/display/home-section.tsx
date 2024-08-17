"use client";

import { ParallaxLayer } from "@react-spring/parallax";
import React, { useContext, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import TextReveal from "../../animation/text-reveal";
import Image from "next/image";
import ParallaxIcon from "../../animation/parralax-icon";
import KnowMoreButton from "@/components/trigger/button/know-more-button";
import { PageTransitionContext } from "@/components/provider/page-transition-provider";

interface HomeSectionProps {
  isEven: boolean;
  firstWord: string;
  secondWord: string;
  offset: number;
  description: string;
  position: string[];
  firstIcon: string;
  secondIcon: string;
  thirdIcon: string;
  fourthIcon: string;
  link: string;
}

const determineIconSize = (width: number): number => {
  if (width >= 1024) {
    return 200;
  }
  return 150;
};

const HomeSection: React.FC<HomeSectionProps> = ({
  isEven,
  firstWord,
  secondWord,
  offset,
  description,
  firstIcon,
  secondIcon,
  thirdIcon,
  fourthIcon,
  link,
}) => {
  const { width } = useContext(PageTransitionContext);
  const { pushPage } = useContext(PageTransitionContext);

  const iconSize = determineIconSize(width);

  return (
    <>
      <ParallaxLayer
        offset={offset}
        speed={0.3}
        className={twMerge(
          "w-full h-full flex flex-col ",
          width <= 1024 && "items-center justify-center",
          isEven && width > 1024 && "items-end",
          !isEven && width > 1024 && "items-start"
        )}
      >
        <TextReveal childrenDir="up" customDelay={0.25}>
          <div
            className={twMerge(
              "flex flex-col h-full w-full lg:px-64 lg:pt-20 lg:pb-28 justify-center"
            )}
          >
            <div className="mb-44 text-5xl font-semibold flex flex-col gap-y-5">
              <p className="max-lg:text-center">{firstWord}</p>
              <p
                className={twMerge(
                  isEven && width > 1024 && "me-7 text-end",
                  !isEven && width > 1024 && "ms-7",
                  "max-lg:text-center"
                )}
              >
                {secondWord}
              </p>
            </div>
          </div>
        </TextReveal>
      </ParallaxLayer>
      {/* sub title */}
      <ParallaxLayer
        offset={offset}
        speed={0.7}
        className={twMerge(
          "flex flex-row ",
          "lg:px-44 lg:pt-20 pb-28 items-center",
          "pt-",
          "px-10",
          isEven && width > 1024 && "justify-start",
          !isEven && width > 1024 && "justify-end",
          width < 1024 && "mt-32",
          "justify-center"
        )}
      >
        <div
          className={twMerge(
            isEven && width > 1024 && "me-72",
            !isEven && width > 1024 && "ms-72",
            width > 1024 ? "w-1/2 h-1/2" : "w-full h-full",
            "flex flex-col justify-center"
          )}
        >
          <TextReveal childrenDir="down">
            <p className="trunecate line-clamp-[8] text-primary lg:text-lg text-md text-center">
              {description}
            </p>
          </TextReveal>
        </div>
      </ParallaxLayer>

      <ParallaxIcon
        offset={offset}
        speed={Math.random() * -1 + 1.5}
        dir="left"
        layerClassname="flex flex-row h-full w-full px-20 py-10 relative"
        divClassname={
          width > 1024 ? "absolute top-0 left-0" : "absolute top-[60px] left-4"
        }
      >
        <Image src={firstIcon} width={iconSize} height={iconSize} alt="" />
      </ParallaxIcon>
      <ParallaxIcon
        offset={offset}
        speed={Math.random() * -1 + 1.5}
        dir="right"
        layerClassname="flex flex-row h-full w-full px-20 py-10 relative"
        divClassname={
          width > 1024
            ? "absolute top-0 right-0"
            : "absolute top-[60px] right-4"
        }
      >
        <Image src={secondIcon} width={iconSize} height={iconSize} alt="" />
      </ParallaxIcon>
      <ParallaxIcon
        offset={offset}
        speed={Math.random() * -1 + 1.5}
        dir="right"
        layerClassname="flex flex-row h-full w-full px-20 py-10 relative"
        divClassname={
          width > 1024
            ? "absolute bottom-0 right-0"
            : "absolute bottom-[60px] right-4"
        }
      >
        <Image src={thirdIcon} width={iconSize} height={iconSize} alt="" />
      </ParallaxIcon>
      <ParallaxIcon
        offset={offset}
        speed={Math.random() * -1 + 1.5}
        dir="left"
        layerClassname="flex flex-row h-full w-full px-20 py-10 relative"
        divClassname={
          width > 1024
            ? "absolute bottom-0 left-0"
            : "absolute bottom-[60px] left-4"
        }
      >
        <Image src={fourthIcon} width={iconSize} height={iconSize} alt="" />
      </ParallaxIcon>

      {/* know more */}
      <ParallaxLayer
        offset={offset}
        speed={1.2}
        className={twMerge(
          "flex lg:items-end items-center relative lg:justify-between justify-center",
          "lg:px-44 lg:pt-20 pb-20",
          width < 1024 && "mt-60",
          isEven && width >= 1024 ? "flex-row-reverse" : "flex-row"
        )}
      >
        <KnowMoreButton onClick={() => pushPage(link)} text="Know more" />
      </ParallaxLayer>
      {/* parralax icon */}
    </>
  );
};

export default HomeSection;
