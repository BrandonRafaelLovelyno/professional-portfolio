import Image from "next/image";
import React from "react";

interface ExperiencePageBackgroundProps {
  image: string;
}

const ExperiencePageBackground: React.FC<ExperiencePageBackgroundProps> = ({
  image,
}) => {
  return (
    <Image
      fill
      alt={image}
      src={image}
      objectFit="cover"
      priority
      className="z-[-10]"
    />
  );
};

export default ExperiencePageBackground;
