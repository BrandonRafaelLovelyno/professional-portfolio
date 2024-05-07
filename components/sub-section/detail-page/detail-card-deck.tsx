import DetailCard from "@/components/trigger/detail-page/selection/detail-card";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

interface DetailCardDeckProps {
  images: string[];
  titles: string[];
  setIndex: (index: number) => void;
  currentIndex: number;
}

const DetailCardDeck: React.FC<DetailCardDeckProps> = ({
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
        <DetailCard
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

export default DetailCardDeck;
