import React from "react";
import { Link } from "react-router-dom";

function MenuItem({ to, icon, label, size = 24, ...props }) {
  return (
    <Link to={to}>
      <div
        className="m-2 flex items-center rounded-md bg-gray-200 px-4 py-2"
        {...props}
      >
        <img width={size} height={size} src={icon} />
        <p className="ml-4 text-lg">{label}</p>
      </div>
    </Link>
  );
}

export default MenuItem;
