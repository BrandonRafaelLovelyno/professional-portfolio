import React from "react";
import { twMerge } from "tailwind-merge";
import { AiOutlineTeam } from "react-icons/ai";
import { Event } from "@/data/org-exp-section-data";

interface TeamButtonProps {
  setIsTeam: (isTeam: boolean) => void;
  setSelectedEvent: (event: Event) => void;
  event: Event;
}

const TeamButton: React.FC<TeamButtonProps> = ({
  setIsTeam,
  setSelectedEvent,
  event,
}) => {
  return (
    <button
      className={twMerge(
        "flex flex-row items-center w-fit",
        "rounded-full px-5 border-2 py-2 bg-background border-secondary gap-x-5",
        "hover:bg-primary hover:text-background hover:bg-opacity-80",
        "transition duration-300",
        "font-semibold"
      )}
      onClick={() => {
        setSelectedEvent(event);
        setIsTeam(true);
      }}
    >
      <span>My team</span>
      <AiOutlineTeam size={20} />
    </button>
  );
};

export default TeamButton;
