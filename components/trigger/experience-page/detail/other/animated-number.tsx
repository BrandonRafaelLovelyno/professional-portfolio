import React, { useState } from "react";
import AnimatedNumbers from "react-animated-numbers";

interface AnimatedNumberProps {
  max: number;
  reset: number;
  className?: string;
  fontSize: number;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  max,
  reset,
  className,
  fontSize,
}) => {
  const [number, setNumber] = useState(0);

  setTimeout(() => {
    if (number < max) {
      setNumber(max);
    } else {
      setNumber(0);
    }
  }, reset);

  return (
    <AnimatedNumbers
      animateToNumber={number}
      transitions={(index) => ({
        type: "spring",
        duration: index + 1,
      })}
      fontStyle={{ fontSize: fontSize }}
      className={className}
    />
  );
};

export default AnimatedNumber;
