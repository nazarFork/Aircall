import React from "react";
import Warning from "../../components/warning/Warning";

export default function Today() {
  return (
    <div className="p-2 bg-indigo-950 rounded-lg">
      <div className="text-3xl font-bold">Today</div>
      <div>
        <span className="text-7xl font-bold">7</span>
        <span className="text-3xl font-bold">m</span>
      </div>
      <div>
        <span className="text-7xl font-bold">32</span>
        <span className="text-3xl font-bold">s</span>
      </div>
      <Warning num="2" description="Missed calls" />
    </div>
  );
}
