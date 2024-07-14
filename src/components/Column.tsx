import React from "react";
import TicketCard from "./TicketCard";

function Column({ label, children }) {
  return (
    <div className="m-3 min-w-48">
      <h6 className="text-sm">{label}</h6>
      <div className="h-full rounded-md bg-gray-100 px-3 py-1">{children}</div>
    </div>
  );
}

export default Column;
