import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import Card from "../trigger/button/card";

interface CardDeckProps {
  images: string[];
  titles: string[];
  setIndex: (index: number) => void;
  currentIndex: number;
}

const CardDeck: React.FC<CardDeckProps> = ({
  images,
  setIndex,
  titles,
  currentIndex,
}) => {
  return (
    <div
      className={twMerge(
        "flex flex-row gap-x-5 justify-start",
        "relative w-full h-[420px] overflow-hidden items-center pl-10"
      )}
    >
      {images.map((img, index) => (
        <Card
          selfIndex={index}
          currentIndex={currentIndex}
          title={titles[index]}
          onClick={() => setIndex(index)}
          image={img}
          key={index}
        />
      ))}
    </div>
  );
};

export default CardDeck;
