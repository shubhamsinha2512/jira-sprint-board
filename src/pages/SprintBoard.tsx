import React, { useEffect, useState } from "react";
import SectionHeader from "../components/SectionHeader";
import ColumnContainer from "../components/ColumnContainer";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { IBoard, IState } from "../interface/interfaces";
import Select from "../components/Select";
import { setActiveBoardId } from "../redux/boardSlice/activeBoardSlice";

function SprintBoard() {
  const dispatch = useDispatch();

  const [activeBoard, setActiveBoard] = useState(null as unknown as IBoard);

  const activeBoardId = useSelector((state: IState) => state.activeBoardId);
  const boards: IBoard[] = useSelector(
    (state: IState) => state.boards,
  ) as IBoard[];

  const handleBoardChange = (e) => {
    dispatch(setActiveBoardId(e.target.value));
  };

  useEffect(() => {
    if (activeBoardId) {
      const activeBoard: IBoard = boards.find(
        (board) => board.id === activeBoardId,
      ) as IBoard;
      setActiveBoard(activeBoard);
    }
  }, [activeBoardId, boards]);

  return (
    <div className="h-full">
      <SectionHeader title={activeBoard ? activeBoard?.name : "Select a Board"}>
        <div className="flex items-center">
          <Select
            name="activeBoard"
            label={"Select Board"}
            options={boards}
            onChange={handleBoardChange}
          />
          <Link to={"/tickets/new"}>
            <Button label={"Create New Ticket"} />
          </Link>
        </div>
      </SectionHeader>
      {activeBoard && <ColumnContainer board={activeBoard} />}
    </div>
  );
}

export default SprintBoard;
