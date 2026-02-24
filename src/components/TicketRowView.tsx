import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

function TicketRowView({ ticket }) {
  return (
    <Link to={`/tickets/${ticket.id}`}>
      <div className="my-4 flex w-full items-center justify-between rounded-md bg-stone-50 px-4 pt-2 shadow-sm">
        <h4 className="font-semibold">{ticket.title}</h4>
        <div>
          <Button label={ticket.assignee?.name} />
          <Button label={ticket.status} />
        </div>
      </div>
    </Link>
  );
}

export default TicketRowView;
