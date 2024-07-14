import React, { useState } from "react";
import SectionHeader from "../components/SectionHeader";
import Input from "../components/Input";
import Button from "../components/Button";
import RichTextarea from "../components/Textarea";
import Select from "../components/Select";
import {
  IBoard,
  ICreateTicket,
  IMasterData,
  IState,
  ITicket,
  IUser,
} from "../interface/interfaces";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addTicket } from "../redux/boardSlice/boardsSlice";
import { useParams } from "react-router";

let ticketStart: ICreateTicket = {
  title: "",
  description: "",
  boardId: "",
  assignee: {} as IUser,
  status: "",
  storyPoints: 0,
  labels: [],
  priority: "",
  dueDate: "",
};

function createTicket() {
  const dispatch = useDispatch();
  const ticketId: string = useParams().ticketId;

  //Store
  const masterData: IMasterData = useSelector(
    (state: IState) => state.masterData,
  ) as IMasterData;

  const boards: IBoard[] = useSelector(
    (state: IState) => state.boards,
  ) as IBoard[];

  const ticket: ITicket = boards
    .map((board) => board.tickets)
    .flat()
    .find((ticket) => ticket.id === ticketId) as ITicket;

  if (ticket) {
    ticketStart = { ...ticket };
  }

  //Local State
  const [tikcet, setTicket] = useState({
    ...ticketStart,
  });

  const columns =
    boards
      .find((board) => board.id === tikcet.boardId)
      ?.columns?.map((column) => {
        return {
          id: column,
          name: column,
        };
      }) || [];

  const handleChange = (e) => {
    if (e.target.name === "assignee") {
      const assignee: IUser = masterData.users!.find(
        (user) => user.id === e.target.value,
      ) as IUser;
      setTicket({ ...tikcet, assignee });
    } else {
      setTicket({ ...tikcet, [e.target.name]: e.target.value });
    }
  };

  const handleCreateTicket = (e) => {
    dispatch(addTicket(tikcet));
    setTicket(ticketStart);
  };

  return (
    <div className="h-full">
      <SectionHeader title="Create New Ticket">
        <Select
          name="boardId"
          label="Board"
          value={ticket.boardId}
          options={boards}
          onChange={handleChange}
        />
      </SectionHeader>

      <div className="mt-10 grid grid-cols-3 justify-items-stretch">
        <div className="col-span-2">
          <Input
            name="title"
            placeholder="Title"
            value={tikcet.title}
            className="w-full rounded-md bg-stone-100 p-2"
            onChange={handleChange}
          />

          <div className="my-4">
            <RichTextarea
              name="description"
              label={"Description"}
              value={tikcet.description}
              placeholder={"Description"}
              onChange={handleChange}
            />
          </div>

          <Button onClick={handleCreateTicket} label={"Create Ticket"} />
        </div>

        <aside className="col-span-1 px-4">
          <Select
            name="assignee"
            label="Asignee"
            options={masterData.users}
            value={tikcet.assignee}
            onChange={handleChange}
          />

          <Select
            name="stroyPoints"
            label="Story Points"
            value={tikcet.storyPoints}
            options={masterData.storyPoints}
            onChange={handleChange}
          />

          <Select
            name="status"
            label="Status"
            value={tikcet.status}
            options={columns}
            onChange={handleChange}
          />
        </aside>
      </div>
    </div>
  );
}

export default createTicket;
