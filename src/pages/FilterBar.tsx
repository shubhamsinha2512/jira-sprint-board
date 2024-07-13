import React from "react";

function FilterBar({ children }) {
  return (
    <div className="flex min-h-6 items-center justify-start rounded-md bg-stone-50 p-4">
      <span>Filters:</span>
      <div className="mx-2">{children}</div>
    </div>
  );
}

export default FilterBar;
