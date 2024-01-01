import React from "react";

import { TfiMouse } from "react-icons/tfi";
import { LuMoveDown } from "react-icons/lu";

const MouseScrollDown = () => {
  return (
    <div className="flex flex-row items-center gap-x-3 w-full">
      <div className="flex flex-col items-center gap-y-2">
        <TfiMouse size={30} />
        <LuMoveDown size={20} />
      </div>
      <p className="w-3 text-sm text-secondary ">Know me more</p>
    </div>
  );
};

export default MouseScrollDown;
