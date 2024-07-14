import React from "react";
import PT from "prop-types";
import TicketCard from "./TicketCard";

function Column({ label, tickets, ...props }) {
  return (
    <div className="m-3 min-w-48">
      <h6 className="text-sm">{label}</h6>
      <div className="h-full rounded-md bg-gray-100 px-3 py-1">
        {tickets &&
          tickets.map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
      </div>
    </div>
  );
}

Column.propTypes = {
  label: PT.string,
  tickets: PT.array,
};

export default Column;
