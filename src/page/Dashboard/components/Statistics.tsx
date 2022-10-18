import React from "react";
import { Icon } from "@iconify/react";

function Statistics() {
  return (
    <div className="bg-white p-4 text-[#96B7DA] rounded-[10px] shadow-container">
      <div className="flex flex-row items-center gap-2">
        <div>
          <Icon icon="carbon:timer" className="h-6 w-6" />
        </div>
        <div className="text-xl ">统计</div>
        <div>查看更多 </div>
      </div>
      <div className="flex flex-row gap-2">
        <div>今日总学习时间:</div>
        <div className="">24小时</div>
      </div>
    </div>
  );
}

export default Statistics;
