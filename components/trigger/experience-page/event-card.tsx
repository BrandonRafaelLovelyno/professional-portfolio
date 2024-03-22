import React from "react";
import { twMerge } from "tailwind-merge";

interface EventCardProps {
  isActive: boolean;
  onClick: () => void;
}

const EventCard: React.FC<EventCardProps> = ({ isActive, onClick }) => {
  return (
    <div
      className={twMerge(
        "h-[400px] w-16 rounded-lg bg-white transition-all duration-300",
        isActive && "grow-[1000]"
      )}
      onClick={onClick}
    ></div>
  );
};

export default EventCard;
