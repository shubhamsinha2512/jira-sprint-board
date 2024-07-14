import React from "react";
import Icon from "./Icon";
import crossRoundIcon from "../assets/icons/cross-round.svg";

function AddColumnRow({ name, ...props }) {
  return (
    <div className="flex items-center justify-start">
      <div className="my-4 w-full rounded-md border-l-4 border-primary bg-gray-100 px-2 py-3 text-gray-800">
        {name}
      </div>
      <div>
        <Icon size={30} icon={crossRoundIcon} />
      </div>
    </div>
  );
}

export default AddColumnRow;
