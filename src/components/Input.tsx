import React, { forwardRef } from "react";
import PT from "prop-types";

const Input = forwardRef(({ label, ...props }, ref) => {
  return (
    <>
      {label && <label className={`text-sm`}>{label}</label>}
      <input ref={ref} {...props} />
    </>
  );
});

Input.propTypes = {
  className: PT.string,
  label: PT.string,
};

export default Input;
