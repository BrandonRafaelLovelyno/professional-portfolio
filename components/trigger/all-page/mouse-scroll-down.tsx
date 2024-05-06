import React from "react";

import { TfiMouse } from "react-icons/tfi";
import { LuMoveDown } from "react-icons/lu";

const MouseScrollDown = () => {
  return (
    <div className="flex flex-row items-center gap-x-3 w-full">
      <div className="flex flex-col items-center gap-y-2">
        <TfiMouse size={40} />
        <LuMoveDown size={30} />
      </div>
    </div>
  );
};

export default MouseScrollDown;
