import React from "react";
import { Icon } from "@iconify/react";

function Statistics() {
  return (
    <div className="bg-white p-4 text-[#96B7DA] rounded-[10px] shadow-container">
      <div className="flex flex-row items-center gap-2">
        <div>
          <Icon icon="iconoir:medal" className="h-6 w-6" />
        </div>
        <div className="text-xl ">成就</div>
      </div>
    </div>
  );
}

export default Statistics;
