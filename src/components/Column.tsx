import React from "react";
import PT from "prop-types";
import TicketCard from "./TicketCard";
import { Droppable } from "react-beautiful-dnd";

function Column({ columnId, label, tickets, ...props }) {
  return (
    <Droppable droppableId={columnId}>
      {(provided) => (
        <div
          className="m-3 min-w-48"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <h6 className="text-sm">{label}</h6>
          <div className="h-full rounded-md bg-gray-100 px-3 py-1">
            {tickets &&
              tickets.map((ticket, index) => (
                <TicketCard key={ticket.id} index={index} ticket={ticket} />
              ))}
          </div>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

Column.propTypes = {
  columnId: PT.string,
  label: PT.string,
  tickets: PT.array,
};

export default Column;
