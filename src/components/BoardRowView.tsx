import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

function BoardRowView({ board }) {
  return (
    <Link to={board.id}>
      <div className="my-4 flex w-full items-center justify-between rounded-md bg-stone-50 px-4 pt-2 shadow-sm">
        <h4 className="font-semibold">{board.name}</h4>
        <Button label={board.manager.name} />
      </div>
    </Link>
  );
}

export default BoardRowView;
