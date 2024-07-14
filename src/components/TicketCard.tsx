import React from "react";
import { Draggable } from "react-beautiful-dnd";

function TicketCard({ ticket, index }) {
  return (
    <Draggable key={ticket.id} draggableId={ticket.id} index={index}>
      {(provided) => (
        <div
          className="relative my-4 min-h-32 min-w-20 cursor-pointer rounded-lg border-l-4 border-success bg-white p-4 shadow-md hover:bg-slate-50"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <h4 className="text-xl font-semibold">{ticket.title}</h4>
          <span className="text-sm">{ticket.assignee.name}</span>
          <div className="absolute bottom-2 right-3 text-xs font-light">
            <span className="">BRD-014 | </span>
            <span className="rounded-full bg-dark px-2 py-1 text-xs text-white">
              1
            </span>
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default TicketCard;
