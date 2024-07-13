import React from "react";
import SectionHeader from "../components/SectionHeader";
import FilterBar from "./FilterBar";
import Button from "../components/Button";
import TicketRowView from "../components/TicketRowView";

function TicketListing() {
  return (
    <div className="h-full">
      <SectionHeader title="All Tickets" />
      <FilterBar>
        <Button label={"Board Name"} />
        <Button label={"Asignee"} />
        <Button label={"Status"} />
      </FilterBar>

      <div className="my-10">
        <h3 className="text-2xl">Matching Boards</h3>
        <div className="overflow-y-scroll">
          <TicketRowView />
          <TicketRowView />
          <TicketRowView />
        </div>
      </div>
    </div>
  );
}

export default TicketListing;
