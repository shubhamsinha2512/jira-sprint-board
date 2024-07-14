import React from "react";
import SectionHeader from "../components/SectionHeader";
import FilterBar from "./FilterBar";
import TicketRowView from "../components/TicketRowView";
import Select from "../components/Select";

function TicketListing() {
  return (
    <div className="h-full">
      <SectionHeader title="All Tickets" />
      <FilterBar>
        <Select key={1} label="Board Name" options={[]} />
        <Select key={2} label="Asignee" options={[]} />
        <Select key={3} label="Status" options={[]} />
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
