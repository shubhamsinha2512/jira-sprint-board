import React, { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  return (
    <>
      {props.label && <label className="text-sm">{props.label}</label>}
      <input ref={ref} {...props} />
    </>
  );
});

export default Input;
