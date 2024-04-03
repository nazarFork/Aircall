import React from "react";

export default function CallList() {
  const columns = [
    "Number",
    "Team",
    "User",
    "Tags",
    "Missed reason",
    "Answered at",
    "Duration",
  ];

  const listData = [
    {
      number: "VIPs",
      team: "West",
      user: "Alonzo Collins",
      tags: "Issue",
      answer: "2 mins ago",
      duration: "11m",
    },
    {
      number: "General",
      team: "West",
      user: "Kinsley Graham",
      answer: "2 mins ago",
      duration: "5m",
    },
    {
      number: "General",
      team: "South",
      user: "Simone McConnell",
      answer: "4 mins ago",
      duration: "2m",
    },
    {
      number: "General",
      team: "East",
      user: "London Sosa",
      tags: "Refund",
      answer: "7 mins ago",
      duration: "7m",
    },
    { number: "General", team: "North", mission: "Agents did not answer" },
    {
      number: "Technical",
      team: "North",
      user: "Jayla Harper",
      tags: "Login",
      answer: "15 mins ago",
      duration: "4m",
    },
  ];

  return (
    <div className="p-2 bg-indigo-950 rounded-lg">
      <div className="text-3xl font-bold pb-2">Call list</div>
      <table>
        <thead>
          <tr className="text-xl">
            {columns.map((columnItem, columnItemIndex) => {
              return <td key={columnItemIndex}>{columnItem}</td>;
            })}
          </tr>
        </thead>
        <tbody>
          {listData.map((listItem, listItemIndex) => {
            return (
              <tr
                className="text-3xl border-b border-solid "
                key={listItemIndex}
              >
                <td className="pr-12 py-1"> {listItem.number ?? ""} </td>
                <td className="pr-12 py-1"> {listItem.team ?? ""} </td>
                <td className="pr-12 py-1"> {listItem.user ?? ""} </td>
                <td className="pr-12 py-1"> {listItem.tags ?? ""} </td>
                <td className="pr-12 py-1"> {listItem.mission ?? ""} </td>
                <td className="pr-12 py-1"> {listItem.answer ?? ""} </td>
                <td> {listItem.duration ?? ""} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
