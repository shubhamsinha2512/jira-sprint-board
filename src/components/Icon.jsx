import React from "react";

function Icon({ icon, size = 24, ...props }) {
  return (
    <img
      className="mx-2 cursor-pointer"
      width={size}
      height={size}
      src={icon}
    />
  );
}

export default Icon;
