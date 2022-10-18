import React from "react";
import { Icon } from "@iconify/react";

const Community = () => {
  return (
    <div className="bg-white row-span-2 p-4 text-[#96B7DA] rounded-[10px] shadow-container">
      <div className="flex flex-row items-center gap-2">
        <div>
          <Icon icon="iconoir:group" className="h-6 w-6" />
        </div>
        <div className="text-xl">社群</div>
      </div>
    </div>
  );
};

export default Community;
