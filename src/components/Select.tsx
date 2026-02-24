import React from "react";
import PT from "prop-types";

function Select({ name, label, options, value, ...props }) {
  return (
    <div className="mx-4 my-2 max-w-sm">
      <select
        id={name}
        name={name}
        className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary"
        {...props}
      >
        <option selected value={null}>
          {label}
        </option>
        {options &&
          options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
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
