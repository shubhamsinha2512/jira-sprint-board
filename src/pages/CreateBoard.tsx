import React, { useRef, useState } from "react";
import SectionHeader from "../components/SectionHeader";
import Input from "../components/Input";
import Button from "../components/Button";
import AddColumnRow from "../components/AddColumnRow";
import Select from "../components/Select";
import { useSelector } from "react-redux";
import { IState, ICreateBoard, IUser } from "../interface/interfaces";
import { useDispatch } from "react-redux";
import { addBoard } from "../redux/boardSlice/boardsSlice";

const newBoardStart: ICreateBoard = {
  name: "",
  slug: "",
  manager: "",
  columns: [],
};

function CreateBoard() {
  const dispatch = useDispatch();
  const newColumnRef = useRef();

  const [board, setBoard] = useState(newBoardStart);

  const managers = useSelector((state: IState) =>
    state.masterData?.users?.filter((user) => user.role === "manager"),
  );

  const handleBoardName = (e) => {
    setBoard({ ...board, name: e.target.value });
  };

  const handleManagerChange = (e) => {
    const manager: IUser = managers?.find((m) => m.id === e.target.value);
    setBoard({ ...board, manager: manager });
  };

  const handleAddColumns = (e) => {
    if (e.key === "Enter") {
      const addingColumnNamwe = newColumnRef.current!.value;
      if (board.columns.includes(addingColumnNamwe)) return;

      setBoard({ ...board, columns: [...board.columns, addingColumnNamwe] });
      newColumnRef.current!.value = "";
    }
  };

  const handleDeleteColumns = (name) => {
    setBoard({
      ...board,
      columns: board.columns.filter((column) => column !== name),
    });
  };

  const handleCreateBoard = (e) => {
    dispatch(addBoard(board));
    setBoard(newBoardStart);
  };

  return (
    <div className="h-full justify-start">
      <SectionHeader title="Create New Board"></SectionHeader>
      <div className="mt-10 py-4">
        <Input
          name="name"
          onChange={handleBoardName}
          value={board.name}
          className="w-96 rounded-md bg-stone-100 p-4"
          placeholder="Board Name"
        />
        <div className="mt-10 w-96">
          <div className="my-10">
            <h3 className="text-2xl font-semibold">Select Manger</h3>
            <Select
              name="manager"
              label="Manager"
              options={managers}
              onChange={handleManagerChange}
            />
          </div>

          <div className="my-10">
            <h3 className="text-2xl font-semibold">Define Columns</h3>
            {board.columns.map((column, index) => (
              <AddColumnRow
                key={index}
                name={column}
                onDelete={handleDeleteColumns}
              />
            ))}

            <Input
              ref={newColumnRef}
              onKeyPress={handleAddColumns}
              placeholder={"Add Column"}
              className="my-4 w-72 rounded-md bg-stone-100 p-2"
            />
          </div>
        </div>

        <Button onClick={handleCreateBoard} label={"Create Board"} />
      </div>
    </div>
  );
}

export default CreateBoard;
