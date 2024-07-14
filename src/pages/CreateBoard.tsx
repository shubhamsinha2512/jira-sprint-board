import React from "react";
import SectionHeader from "../components/SectionHeader";
import Input from "../components/Input";
import Button from "../components/Button";
import AddColumnRow from "../components/AddColumnRow";
import Select from "../components/Select";

function CreateBoard() {
  return (
    <div className="h-full justify-start">
      <SectionHeader title="Create New Board"></SectionHeader>
      <div className="mt-10 py-4">
        <Input
          className="w-96 rounded-md bg-stone-100 p-4"
          placeholder="Board Name"
        />
        <div className="mt-10 w-96">
          <Select name="manager" label="Manager" options={[]} />
          <h3 className="text-2xl font-semibold">Define Columns</h3>
          <AddColumnRow name="Column Name 1" />
          <AddColumnRow name="Column Name 2" />
          <AddColumnRow name="Column Name 3" />
          <Input
            placeholder={"Add Column"}
            className="my-4 w-72 rounded-md bg-stone-100 p-2"
          />
        </div>

        <Button label={"Create Board"} />
      </div>
    </div>
  );
}

export default CreateBoard;
