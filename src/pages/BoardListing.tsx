import React, { useEffect, useState } from "react";
import SectionHeader from "../components/SectionHeader";
import FilterBar from "./FilterBar";
import Button from "../components/Button";
import BoardRowView from "../components/BoardRowView";
import Select from "../components/Select";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { IBoard, IState } from "../interface/interfaces";

function BoardListing() {
  const dispatch = useDispatch();

  //Store Data
  const managers = useSelector((state: IState) =>
    state.masterData?.users?.filter((user) => user.role === "manager"),
  );
  const boards = useSelector((state: IState) => state.boards);

  // States
  const [filteredBoards, setFilteredBoards] = useState(boards);
  const [filters, setFilters] = useState({
    board: null,
    manager: null,
  });

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    let results: IBoard[] = [...boards];

    //Filters
    if (filters.board) {
      results = boards!.filter((board) => board.id === filters.board);
    }

    if (filters.manager) {
      results = boards!.filter((board) => board.manager.id === filters.manager);
    }

    setFilteredBoards(results);
  }, [filters.board, filters.manager]);

  return (
    <div className="h-full">
      <SectionHeader title="All Boards" />
      <FilterBar>
        <Select
          key={1}
          onChange={handleFilterChange}
          name="board"
          label="Board Name"
          options={boards}
        />
        <Select
          key={2}
          onChange={handleFilterChange}
          name="manager"
          label="Manager"
          options={managers}
        />
      </FilterBar>

      <div className="my-10">
        <h3 className="text-2xl">Matching Boards</h3>
        <div className="overflow-y-scroll">
          {filteredBoards &&
            filteredBoards.map((board) => (
              <BoardRowView key={board.id} board={board} />
            ))}
          {/* <BoardRowView />
          <BoardRowView />
          <BoardRowView /> */}
        </div>
      </div>
    </div>
  );
}

export default BoardListing;
