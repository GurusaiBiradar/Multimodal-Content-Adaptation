import React, { useEffect } from "react";
import { Howl } from 'howler';  // Audio player library

const AudioContent = () => {
    useEffect(() => {
      // Create a new Howl object to play the local MP3 file
      const audio = new Howl({
        src: ['example.mp3'],  // Reference the MP3 file in the public folder
        autoplay: true,
        loop: false,
        volume: 1.0,
      });
      
      // Play the audio file when the component mounts
      audio.play();
  
      // Optional cleanup when the component unmounts
      return () => {
        audio.stop();  // Stop the audio when the component unmounts
      };
    }, []);

  return (
    <div>
      <h2>What is AI ( For People in Hurry ) - Audio</h2>
      <p>Playing audio narration of the content...</p>
    </div>
  );
};

export default AudioContent;
