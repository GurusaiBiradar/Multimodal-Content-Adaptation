import React, { useState } from "react";
import ContentDisplay from "./components/ContentDisplay";
import MultimodalDropdown from "./components/MultimodalDropdown";
import './App.css';

function App() {
  // Set default format to text
  const [format, setFormat] = useState("Text");

  // Callback function to update the content format
  const handleFormatChange = (selectedFormat) => {
    setFormat(selectedFormat);
  };

  return (
    <div className="App">
      <h1>Multimodal Content Adaptation in an Adaptive Learning System</h1>
      {/* Dropdown menu for selecting content format */}
      <MultimodalDropdown selectedFormat={format} onFormatChange={handleFormatChange} />
      {/* To display the content based on selected format */}
      <ContentDisplay format={format} />
    </div>
  );
}

export default App;
