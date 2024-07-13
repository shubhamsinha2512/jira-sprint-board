import React from "react";
import SectionHeader from "../components/SectionHeader";
import Input from "../components/Input";
import Button from "../components/Button";

function createTicket() {
  return (
    <div className="h-full">
      <SectionHeader title="Create New Ticket">
        <Button label={"Select Board (Select)"} />
      </SectionHeader>
      <div className="mt-10 grid grid-cols-3 justify-items-stretch">
        <div className="col-span-2">
          <Input
            label="Title"
            placeholder="Title"
            className="w-full rounded-md bg-stone-100 p-2"
          />
          <div className="my-4">
            <label className="text-sm">Description</label>
            <textarea
              className="w-full rounded-md bg-stone-100"
              rows={8}
            ></textarea>
          </div>
          <Button label={"Create Ticket"} />
        </div>
        <aside className="col-span-1">
          <Button label={"Asignee"} />
          <Input placeholder={"Story Points"} />
        </aside>
      </div>
    </div>
  );
}

export default createTicket;
