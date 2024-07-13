import React from "react";
import Title from "./Title";
import PT from "prop-types";

function SectionHeader({ title, children }) {
  return (
    <div className="m-2 flex items-center justify-between">
      <Title title={title} />
      {children}
    </div>
  );
}

SectionHeader.propTypes = {
  title: PT.string.isRequired,
};

export default SectionHeader;
