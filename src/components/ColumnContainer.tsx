import React from "react";
import Column from "./Column";
import TicketCard from "./TicketCard";

function ColumnContainer() {
  return (
    <div className="grid h-full grid-cols-4">
      <Column label={"Todo"}>
        <TicketCard />
        <TicketCard />
        <TicketCard />
      </Column>
      <Column label={"In Dev"}>
        <TicketCard />
      </Column>
      <Column label={"In QA"}>
        <TicketCard />
        <TicketCard />
      </Column>
      <Column label={"Release Done"}>
        <TicketCard />
      </Column>
    </div>
  );
}

export default ColumnContainer;
