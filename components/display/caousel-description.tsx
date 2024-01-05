import React from "react";

interface CarouselDescriptionProps {
  event: string;
  date: string;
  role: "staff" | "head";
}

const CarouselDescription: React.FC<CarouselDescriptionProps> = ({
  event,
  date,
  role,
}) => {
  return <div className="w-fit h-fit">hai</div>;
};

export default CarouselDescription;
