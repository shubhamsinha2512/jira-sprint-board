import React from "react";

function TicketCard({ ticket }) {
  return (
    <div className="relative my-4 min-h-32 min-w-20 rounded-lg border-l-4 border-success bg-white p-4 shadow-md">
      <h4 className="text-xl font-semibold">Title</h4>
      <span>Asignee</span>
      <div className="absolute bottom-2 right-4 text-xs font-light">
        <span className="">BRD-014 | </span>
        <span className="rounded-full bg-dark px-2 py-1 text-xs text-white">
          1
        </span>
      </div>
    </div>
  );
}

export default TicketCard;
