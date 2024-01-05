import React from "react";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import { twMerge } from "tailwind-merge";

interface CarouselNavigatorProps {
  currentIndex: number;
  isDisable: boolean;
  isNext: boolean;
  onSetIndex: (index: number) => void;
}

const CarouselNavigator: React.FC<CarouselNavigatorProps> = ({
  currentIndex,
  isNext,
  onSetIndex,
  isDisable,
}) => {
  const icon = isNext ? (
    <GrCaretNext size={20} />
  ) : (
    <GrCaretPrevious size={20} />
  );
  const finalIndex = isNext ? currentIndex + 1 : currentIndex - 1;
  return (
    <button
      onClick={() => {
        if (isDisable) return;
        onSetIndex(currentIndex);
      }}
      className={twMerge(
        isDisable
          ? "text-secondary opacity-70 cursor-default"
          : "text-primary cursor-pointer"
      )}
    >
      {icon}
    </button>
  );
};

export default CarouselNavigator;
