import React, { useEffect, useState } from "react";
import TicketRowView from "../components/TicketRowView";
import SectionHeader from "../components/SectionHeader";
import FilterBar from "./FilterBar";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

import { IBoard, IState, ITicket, IUser } from "../interface/interfaces";
import Select from "../components/Select";

function BoardView(props) {
  const boardId = useParams().boardId;

  // Store
  const users: IUser[] = useSelector(
    (state: IState) => state.masterData?.users,
  ) as IUser[];

  const board: IBoard = useSelector((state: IState) =>
    state.boards!.find((board) => board.id === boardId),
  ) as IBoard;

  const statuses: string[] = Array.from(
    new Set(board.tickets.map((ticket) => ticket.status)),
  );

  //Local State
  const [filteredTickets, setFilteredTickets] = useState(board.tickets);
  const [filters, setFilters] = useState({
    asignee: null,
    status: null,
  });

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    let results: ITicket[] = [...board.tickets];

    //Filters
    if (filters.asignee) {
      results = results!.filter(
        (ticket: ITicket) => ticket.assignee.id === filters.asignee,
      );
    }

    if (filters.status) {
      results = results!.filter(
        (ticket: ITicket) => ticket.status === filters.status,
      );
    }

    setFilteredTickets(results);
  }, [filters.asignee, filters.status]);

  return (
    <div className="h-full">
      <SectionHeader title={board?.name} />
      <FilterBar>
        <Select
          key={1}
          onChange={handleFilterChange}
          name="assignee"
          label="Assigne"
          options={users}
        />
        <Select
          key={2}
          onChange={handleFilterChange}
          name="status"
          label="Status"
          options={statuses}
        />
      </FilterBar>

      <div className="my-10">
        <h3 className="text-2xl font-semibold">Matching Tickets</h3>
        <div className="overflow-y-scroll">
          {filteredTickets &&
            filteredTickets.map((ticket: ITicket) => (
              <TicketRowView key={ticket.id} ticket={ticket} />
            ))}
          {/* <TicketRowView />
          <TicketRowView />
          <TicketRowView /> */}
        </div>
      </div>
    </div>
  );
}

export default BoardView;
