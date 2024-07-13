import React from "react";
import PT from "prop-types";

function Title({ title }) {
  return <h2 className="text-3xl font-semibold">{title}</h2>;
}

Title.propTypes = {
  title: PT.string.isRequired,
};

export default Title;
