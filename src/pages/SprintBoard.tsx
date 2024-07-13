import React from "react";
import SectionHeader from "../components/SectionHeader";
import ColumnContainer from "../components/ColumnContainer";
import Button from "../components/Button";

function SprintBoard() {
  return (
    <div className="h-full">
      <SectionHeader title="Current Board">
        <Button label={"Create New Ticket"} />
      </SectionHeader>
      <ColumnContainer />
    </div>
  );
}

export default SprintBoard;
