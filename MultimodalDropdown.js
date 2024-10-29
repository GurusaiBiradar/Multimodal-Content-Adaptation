import React from "react";

const MultimodalDropdown = ({ selectedFormat, onFormatChange }) => {
  return (
    <div className="dropdown">
      <label>Select Content Format: </label>
      <select value={selectedFormat} onChange={(e) => onFormatChange(e.target.value)}>
        <option value="Text">Text</option>
        <option value="Video">Video</option>
        <option value="Audio">Audio</option>
      </select>
    </div>
  );
};

export default MultimodalDropdown;
