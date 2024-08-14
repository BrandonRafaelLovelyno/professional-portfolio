import CardInformation from "@/components/trigger/display/detail-information";
import React from "react";
import { twMerge } from "tailwind-merge";
import CardDeck from "@/components/sub-section/card-deck";
import SelectionScrollPath from "@/components/trigger/button/detail-selection-scroll-path";

interface CardSelectionProps {
  isSelecting: boolean;
  setIsSelecting: (isSelecting: boolean) => void;
  setIndex: (index: number) => void;
  currentIndex: number;
  cardImages: string[];
  titles: string[];
}

const CardSelection: React.FC<CardSelectionProps> = ({
  setIndex,
  currentIndex,
  cardImages,
  titles,
  setIsSelecting,
}) => {
  return (
    <section className={twMerge("w-full h-full", "flex flex-row", "absolute")}>
      <div
        className={twMerge(
          "flex flex-row gap-x-32 h-full w-[52%] items-center",
          "pl-20 pr-10"
        )}
      >
        <SelectionScrollPath
          array={titles}
          setIndex={setIndex}
          currentIndex={currentIndex}
        />

        <CardInformation
          currentIndex={currentIndex}
          setIsSelecting={setIsSelecting}
          titles={titles}
        />
      </div>
      <div
        className={twMerge(
          "flex-1 h-full",
          "flex flex-col gap-y-5 justify-center items-start"
        )}
      >
        <CardDeck
          currentIndex={currentIndex}
          setIndex={setIndex}
          images={cardImages}
          titles={titles}
        />
      </div>
    </section>
  );
};

export default CardSelection;
