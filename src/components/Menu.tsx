import React from "react";
import MenuItem from "./MenuItem";

import sprintIcon from "../assets/icons/sprint.svg";
import boardIcon from "../assets/icons/board.svg";
import ticketsIcon from "../assets/icons/tickets-list.svg";

function Menu() {
  return (
    <div className="h-full bg-gray-50">
      <MenuItem
        className={"bg-primary text-white"}
        to={"/boards/new"}
        label={"Create New Board"}
        icon={ticketsIcon}
        size={32}
      />
      <MenuItem to={"/"} label={"Sprint"} icon={sprintIcon} size={32} />
      <MenuItem to={"/boards"} label={"Boards"} icon={boardIcon} size={32} />
      <MenuItem
        to={"/tickets"}
        label={"Tickets"}
        icon={ticketsIcon}
        size={32}
      />
    </div>
  );
}

export default Menu;
