import React from "react";
import SectionHeader from "../components/SectionHeader";
import Input from "../components/Input";
import Button from "../components/Button";
import RichTextarea from "../components/Textarea";
import Select from "../components/Select";

function createTicket() {
  return (
    <div className="h-full">
      <SectionHeader title="Create New Ticket">
        <Button label={"Select Board (Select)"} />
      </SectionHeader>
      <div className="mt-10 grid grid-cols-3 justify-items-stretch">
        <div className="col-span-2">
          <Input
            placeholder="Title"
            className="w-full rounded-md bg-stone-100 p-2"
          />
          <div className="my-4">
            <RichTextarea label={"Description"} placeholder={"Description"} />
          </div>
          <Button label={"Create Ticket"} />
        </div>
        <aside className="col-span-1 px-4">
          <Select name="asignee" label="Asignee" options={[]} />
          <Input
            placeholder={"Story Points"}
            className="my-4 w-fit rounded-md bg-stone-100 p-2"
          />
        </aside>
      </div>
    </div>
  );
}

export default createTicket;
