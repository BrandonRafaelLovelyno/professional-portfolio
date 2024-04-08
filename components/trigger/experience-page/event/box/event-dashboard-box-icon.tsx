import React from "react";
import { twMerge } from "tailwind-merge";

interface EventDashboardBoxIconProps {
  icon: React.ReactNode;
  title: string;
  value: React.ReactNode;
}

const EventDashboardBoxIcon: React.FC<EventDashboardBoxIconProps> = ({
  icon,
  title,
  value,
}) => {
  return (
    <div
      className={twMerge(
        "flex flex-col",
        "w-full h-fit",
        "gap-y-3 items-center justify-center"
      )}
    >
      {icon}
      <p
        className={twMerge(
          "text-sm font-semibold  tracking-wider text-black opacity-60"
        )}
      >
        {title}
      </p>
      {value}
    </div>
  );
};

export default EventDashboardBoxIcon;
