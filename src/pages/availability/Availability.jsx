import React from 'react';

export default function Availability() {
  const availableData = [
    { name: "Amina Hodges", status: 'Available' },
    { name: "Alonzo Collins", status: 'Available' },
    { name: "Kinsley Graham", status: 'Available' },
    { name: "Giovanni Andersen", status: 'In a call' },
    { name: "Zoie Wilkinson", status: 'In a call' },
    { name: "Simone McConnell", status: 'In a call' },
    { name: "London Sosa", status: 'In a call' },
    { name: "Cassandra Meyer", status: 'After-call work' },
    { name: "Tristan Calderon", status: 'After-call work' },
    { name: "Thaddeus Davidson", status: 'Do not disturb' },
    { name: "Jayla Harper", status: 'Offline' },
  ];

  return (
    <div className="p-4 bg-indigo-950 rounded-lg pb-4">
      <span className="text-3xl pb-16"> Agent availability </span>
      <table>
        <tbody>
          {availableData.map((availableItem, availableItemIndex) => {
            return (
              <tr className="border-b border-solid border-slate-500 text-xl" key={availableItemIndex}>
                <td className="pr-28 py-1"> {availableItem.name ?? ""} </td>
                <td> {availableItem.status ?? ""} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}