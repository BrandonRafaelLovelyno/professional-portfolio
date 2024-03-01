import { Person } from "@/data/client-exp-section-data";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

interface PersonDisplayProps {
  person: Person;
  addDivider: boolean;
}

const PersonDisplay: React.FC<PersonDisplayProps> = ({
  person,
  addDivider,
}) => {
  return (
    <div className="flex flex-row gap-x-5 w-full items-center">
      <div className="w-32 h-32 rounded-full overflow-hidden relative">
        <Image
          fill
          objectFit="cover"
          layout="fill"
          src={person.img ? person.img : "/client experience/nopfp.svg"}
          alt={person.name}
        />
      </div>
      <div className="flex flex-col gap-y-2 text-sm">
        <p className="font-bold">{person.name}</p>
        <p>{person.position}</p>
      </div>
      <div
        className={twMerge(
          "max-lg:hidden",
          addDivider && "h-32 w-[2px] bg-white ml-auto"
        )}
      />
    </div>
  );
};

export default PersonDisplay;
