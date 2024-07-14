import React from "react";
import SectionHeader from "../components/SectionHeader";
import ColumnContainer from "../components/ColumnContainer";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { IBoard, IState } from "../interface/interfaces";
import Select from "../components/Select";

function SprintBoard() {
  const dispatch = useDispatch();
  const boards: IBoard[] = useSelector(
    (state: IState) => state.boards,
  ) as IBoard[];

  return (
    <div className="h-full">
      <SectionHeader title="Current Board">
        <div className="flex items-center">
          <Select name="activeBoard" label={"Select Board"} options={boards} />
          <Link to={"/tickets/new"}>
            <Button label={"Create New Ticket"} />
          </Link>
        </div>
      </SectionHeader>
      <ColumnContainer />
    </div>
  );
}

export default SprintBoard;
