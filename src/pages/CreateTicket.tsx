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
  IUser,
} from "../interface/interfaces";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addTicket } from "../redux/boardSlice/boardsSlice";

const newTicketStart: ICreateTicket = {
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

  //Store
  const masterData: IMasterData = useSelector(
    (state: IState) => state.masterData,
  ) as IMasterData;

  const boards: IBoard[] = useSelector(
    (state: IState) => state.boards,
  ) as IBoard[];

  //Local State
  const [tikcet, setTicket] = useState({
    ...newTicketStart,
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
    setTicket(newTicketStart);
  };

  return (
    <div className="h-full">
      <SectionHeader title="Create New Ticket">
        <Select
          name="boardId"
          label="Board"
          options={boards}
          onChange={handleChange}
        />
      </SectionHeader>

      <div className="mt-10 grid grid-cols-3 justify-items-stretch">
        <div className="col-span-2">
          <Input
            name="title"
            placeholder="Title"
            className="w-full rounded-md bg-stone-100 p-2"
            onChange={handleChange}
          />

          <div className="my-4">
            <RichTextarea
              name="description"
              label={"Description"}
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
            onChange={handleChange}
          />

          <Select
            name="stroyPoints"
            label="Story Points"
            options={masterData.storyPoints}
            onChange={handleChange}
          />

          <Select
            name="status"
            label="Status"
            options={columns}
            onChange={handleChange}
          />
        </aside>
      </div>
    </div>
  );
}

export default createTicket;
