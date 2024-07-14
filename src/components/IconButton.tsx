import React from "react";

function IconButton({ icon, tooltip, ...props }) {
  return (
    <button
      type="button"
      className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
    >
      <img src={icon} />
      <span className="sr-only">{tooltip}</span>
    </button>
  );
}

export default IconButton;
