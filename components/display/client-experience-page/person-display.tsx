import { Person } from "@/data/client-exp-section-data";
import Image from "next/image";
import React from "react";

interface PersonDisplayProps {
  person: Person;
}

const PersonDisplay: React.FC<PersonDisplayProps> = ({ person }) => {
  return (
    <div className="flex flex-row gap-x-5 w-full">
      <div className="w-[25%] aspect-square rounded-full overflow-hidden relative">
        <Image
          fill
          src={person.img ? person.img : "/client experience/nopfp.svg"}
          alt={person.name}
        />
      </div>
    </div>
  );
};

export default PersonDisplay;
