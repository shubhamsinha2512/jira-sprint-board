import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

function BoardRowView({ board }) {
  return (
    <Link to={`id`}>
      <div className="my-4 flex w-full items-center justify-between rounded-md bg-stone-50 px-4 py-1 shadow-sm">
        <h4 className="font-semibold">Board Name</h4>
        <Button label={"Manager"} />
      </div>
    </Link>
  );
}

export default BoardRowView;
