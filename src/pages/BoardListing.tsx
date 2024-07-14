import React from "react";
import SectionHeader from "../components/SectionHeader";
import FilterBar from "./FilterBar";
import Button from "../components/Button";
import BoardRowView from "../components/BoardRowView";
import Select from "../components/Select";

function BoardListing() {
  return (
    <div className="h-full">
      <SectionHeader title="All Boards" />
      <FilterBar>
        <Select key={1} label="Board Name" options={[]} />
        <Select key={2} label="Manager" options={[]} />
      </FilterBar>

      <div className="my-10">
        <h3 className="text-2xl">Matching Boards</h3>
        <div className="overflow-y-scroll">
          <BoardRowView />
          <BoardRowView />
          <BoardRowView />
        </div>
      </div>
    </div>
  );
}

export default BoardListing;
