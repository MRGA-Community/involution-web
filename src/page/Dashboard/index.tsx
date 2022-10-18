import React from "react";
import Achievements from "./components/Achievements";
import Community from "./components/Community";
import Pomodoro from "./components/Pomodoro";
import Statistics from "./components/Statistics";
import Todo from "./components/Todo";

function index() {
  return (
    <div className="flex flex-col gap-y-8 h-full">
      <header className="flex items-center justify-between">
        <div>
          <h2 className="text-4xl font-semibold text-primary mb-1">
            晚上好，韦杉！
          </h2>
          <p>祝您有个美好的内卷时光！</p>
        </div>
        <div className="text-right">
          <p className="text-[1.6rem] font-medium mb-1">晚上8时10分·雨</p>
          <p>2022年9月17日 | 星期六</p>
        </div>
      </header>
      <div className="flex flex-1">
        <div className="grid grid-cols-2 w-2/3 gap-8">
          <Pomodoro />
          <Community />
          <Todo />
          <Statistics />
          <Achievements />
        </div>
        <div className="w-1/3"></div>
      </div>
    </div>
  );
}

export default index;
