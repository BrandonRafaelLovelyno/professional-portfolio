import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

interface EventDashboardBoxLogoProps {
  // logo: string;
  name: string;
  // description: string;
}

const EventDashboardBoxLogo: React.FC<EventDashboardBoxLogoProps> = ({
  name,
}) => {
  return (
    <div
      className={twMerge(
        "w-full h-full",
        "flex flex-col justify-center items-center",
        "gap-y-8"
      )}
    >
      <div className={twMerge("flex flex-col w-full self-start", "gap-y-2")}>
        <h2 className={twMerge("font-bold text-lg")}>I Work For</h2>
        <div className={twMerge("w-full h-[2px] bg-white")} />
      </div>
      <div className={twMerge("flex flex-col", "gap-y-4")}>
        <div className={twMerge("flex flex-col gap-y-3 items-center")}>
          <div
            className={twMerge(
              "w-[60px] h-[60px]",
              "rounded-full",
              "relative overflow-hidden"
            )}
          >
            <Image
              fill
              objectFit="cover"
              src={"/image/temp-back-image.jpg"}
              alt=""
            />
          </div>
          <h3 className={twMerge("font-semibold")}>{name}</h3>
        </div>
        <p className={twMerge("text-center text-sm font-thin")}>
          lorem ipsum dolar sit amet lorem ipsum dolar set amet
        </p>
      </div>
    </div>
  );
};

export default EventDashboardBoxLogo;
