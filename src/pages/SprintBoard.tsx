import React from "react";
import SectionHeader from "../components/SectionHeader";
import ColumnContainer from "../components/ColumnContainer";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function SprintBoard() {
  return (
    <div className="h-full">
      <SectionHeader title="Current Board">
        <Link to={"/tickets/new"}>
          <Button label={"Create New Ticket"} />
        </Link>
      </SectionHeader>
      <ColumnContainer />
    </div>
  );
}

export default SprintBoard;
