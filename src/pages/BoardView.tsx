import React from "react";
import TicketRowView from "../components/TicketRowView";
import Button from "../components/Button";
import SectionHeader from "../components/SectionHeader";
import FilterBar from "./FilterBar";

function BoardView() {
  return (
    <div className="h-full">
      <SectionHeader title="Board Name" />
      <FilterBar>
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

export default BoardView;
