import React from "react";
import { Icon } from "@iconify/react";

function Todo() {
  return (
    <div className="row-span-2 bg-white p-4 text-[#96B7DA] rounded-[10px] shadow-container">
      <div className="flex flex-row items-center gap-2">
        <div>
          <Icon icon="iconoir:task-list" className="h-6 w-6" />
        </div>
        <div className="text-xl ">待办事项</div>
      </div>
    </div>
  );
}

export default Todo;
