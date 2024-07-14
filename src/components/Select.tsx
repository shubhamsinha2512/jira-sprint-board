import React from "react";
import PT from "prop-types";

function Select({ name, label, options }) {
  return (
    <div className="mx-4 max-w-sm">
      <select
        id={name}
        className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary"
      >
        <option selected disabled>
          {label}
        </option>
        {options &&
          options.map((option) => (
            <option key={option.id} value={option.value}>
              {option.value}
            </option>
          ))}
      </select>
    </div>
  );
}

Select.propTypes = {
  name: PT.string.isRequired,
  label: PT.string.isRequired,
  options: PT.array.isRequired,
};

export default Select;
