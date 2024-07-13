import React from "react";
import SectionHeader from "../components/SectionHeader";
import Input from "../components/Input";
import Button from "../components/Button";

function CreateBoard() {
  return (
    <div className="h-full">
      <SectionHeader title="Create New Board"></SectionHeader>
      <Input
        className="w-full rounded-md bg-stone-100 p-2"
        placeholder="Board Name"
      />
      <div>
        <h3 className="text-2xl">Define Columns</h3>
        <div>Columns definition here</div>
        <div>Columns definition here</div>
        <div>Columns definition here</div>
      </div>

      <Button label={"Create Board"} />
    </div>
  );
}

export default CreateBoard;
