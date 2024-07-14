import React, { forwardRef } from "react";
import PT from "prop-types";
import attachFileIcon from "../assets/icons/attach-file.svg";
import IconButton from "./IconButton";
import TextEditorHeader from "./TextEditorHeader";

<label className="text-sm">Description</label>;
const RichTextarea = forwardRef(
  ({ label, placeholder, rows = 8, ...props }, ref) => {
    return (
      <div className="mb-4 w-full rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-700">
        <TextEditorHeader />
        <div className="rounded-b-lg bg-white px-4 py-2 dark:bg-gray-800">
          <label for="editor" className="sr-only">
            {label}
          </label>
          <textarea
            id="editor"
            ref={ref}
            rows={rows}
            className="block w-full border-0 bg-white px-0 text-sm text-gray-800 focus:ring-0 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
            placeholder={placeholder}
            {...props}
          ></textarea>
        </div>
      </div>
    );
  },
);

RichTextarea.propTypes = {
  label: PT.string.isRequired,
  placeholder: PT.string.isRequired,
  rows: PT.number,
};

export default RichTextarea;
