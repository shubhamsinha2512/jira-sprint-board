import React, { useEffect, useState } from "react";
import SectionHeader from "../components/SectionHeader";
import FilterBar from "./FilterBar";
import TicketRowView from "../components/TicketRowView";
import Select from "../components/Select";
import { useSelector } from "react-redux";
import { IBoard, IState, ITicket, IUser } from "../interface/interfaces";
import { Link } from "react-router-dom";
import Button from "../components/Button";

function TicketListing() {
  //Store Data
  const users: IUser[] = useSelector(
    (state: IState) => state.masterData?.users,
  ) as IUser[];
  const boards: IBoard[] = useSelector(
    (state: IState) => state.boards,
  ) as IBoard[];

  const tickets: ITicket[] = boards.map((board) => board.tickets).flat();

  // States
  const [filteredTicket, setFilteredTickets] = useState(tickets);
  const [filters, setFilters] = useState({
    board: null,
    assignee: null,
    status: null,
  });

  const columns =
    boards.find((board) => board.id === filters.board)?.columns || [];

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    let results: ITicket[] = [...tickets];

    //Filters
    if (filters.board) {
      results = results!.filter((ticket) => ticket.boardId === filters.board);
    }

    if (filters.assignee) {
      results = results!.filter(
        (ticket) => ticket.assignee.id === filters.assignee,
      );
    }

    if (filters.status) {
      results = results!.filter((ticket) => ticket.status === filters.status);
    }

    setFilteredTickets(results);
  }, [filters.board, filters.assignee, filters.status]);

  return (
    <div className="h-full">
      <SectionHeader title="All Tickets">
        <Link to={"/tickets/new"}>
          <Button label={"Create New Ticket"} />
        </Link>
      </SectionHeader>

      <FilterBar>
        <Select
          key={1}
          label="Board Name"
          name="board"
          options={boards}
          onChange={handleFilterChange}
        />
        <Select
          key={2}
          label="Asignee"
          name="assignee"
          options={users}
          onChange={handleFilterChange}
        />
        <Select
          key={3}
          label="Status"
          name="status"
          options={columns}
          onChange={handleFilterChange}
        />
      </FilterBar>

      <div className="my-10">
        <h3 className="text-2xl">Matching Boards</h3>
        <div className="overflow-y-scroll">
          {filteredTicket &&
            filteredTicket.map((ticket) => (
              <TicketRowView key={ticket.id} ticket={ticket} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default TicketListing;
