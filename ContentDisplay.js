import React from "react";
import TextContent from "./TextContent";
import VideoContent from "./VideoContent";
import AudioContent from "./AudioContent";

const ContentDisplay = ({ format }) => {
  return (
    <div className="content-display">
      {format === "Text" && <TextContent />}
      {format === "Video" && <VideoContent />}
      {format === "Audio" && <AudioContent />}
    </div>
  );
};

export default ContentDisplay;
