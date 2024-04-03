import React from "react";

export default function TotalCalls() {
  const callData = [
    { name: "Kinsley Graham", count: 5 },
    { name: "Giovanni Andersen", count: 4 },
    { name: "Zoie Wilkinson", count: 4 },
    { name: "Simone McConnell", count: 4 },
    { name: "London Sosa", count: 3 },
    { name: "Cassandra Meyer", count: 3 },
    { name: "Tristan Calderon", count: 3 },
    { name: "Amina Hodges", count: 2 },
  ];

  return (
    <div className="p-4 bg-indigo-950 rounded-lg pb-4">
      <span className="text-3xl pb-16"> Total calls by agent today </span>
      <table>
        <tbody>
          {callData.map((callItem, callItemIndex) => {
            return (
              <tr
                className="border-b border-solid border-slate-500 text-2xl"
                key={callItemIndex}
              >
                <td className="pr-52 py-2"> {callItem.name ?? ""} </td>
                <td> {callItem.count ?? ""} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
