import React from "react";
import Warning from "../../components/warning/Warning";
import speed from "../../assets/img/2.PNG";

export default function RightNow() {
  return (
    <div className="p-2 bg-indigo-950 rounded-lg">
      <span className="text-3xl font-bold">Right Now</span>
      <Warning num="1" description="Calls waiting" />
      <span className="text-2xl">Active calls</span>
      <img src={speed} alt="" />
    </div>
  );
}
