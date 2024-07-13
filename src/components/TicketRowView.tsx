import React from "react";
import Button from "./Button";

function TicketRowView() {
  return (
    <div className="my-4 flex w-full items-center justify-between rounded-md bg-stone-50 px-4 py-1 shadow-sm">
      <h4 className="font-semibold">Title</h4>
      <div>
        <Button label={"Board"} />
        <Button label={"Asignee"} />
        <Button label={"Status"} />
      </div>
    </div>
  );
}

export default TicketRowView;
