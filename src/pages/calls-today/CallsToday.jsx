import React from "react";

export default function CallsToday() {
  return (
    <div className="p-2 bg-indigo-950 rounded-lg">
      <span className="text-3xl font-bold">Calls today</span>
      <div className="pt-8 pb-12 flex justify-start">
        <span className="text-7xl">35</span>
        <span className="text-3xl pl-2 pt-8">Total</span>
      </div>
      <span className="text-2xl">Through day</span>
      <div className="border border-solid border-red-900 bg-warning-500 rounded-lg pr-16 m-4 p-2 relative">
        <span className="text-8xl font-bold">6</span>
        <span className="text-5xl font-bold">%</span>
        <span className="text-3xl">% calls missed</span>
        <div className="text-3xl rounded-full bg-red-600 border border-solid w-12 h-12 text-center pt-1 absolute -bottom-4 -right-4">
          !
        </div>
      </div>
    </div>
  );
}
