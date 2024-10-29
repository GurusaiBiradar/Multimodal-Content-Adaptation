# Multimodal-Content-Adaptation
#### Description: A React.js application that implements Multimodal Content Rendering by adding functionalities to display the same educational content in three formats: Text, Video, and Audio. The allows the user to select their preferred content format using a menu.

Tech: HTML, CSS, ReactJs, NodeJs.

Introduction:
1.	There are three formats of same content for the user to choose from, which they can using a dropdown menu. 
2.	When playing the audio format, the video content should not interfere and vice-versa. 
3.	The audio file is downloaded audio file of embedded YouTube video.
4.	The application is simple, functional and easy to use.

Steps to implement:

1. Create a React application using bash command: npx create-react-app multimodal-content-app
2. Place the App.js in multimodal-content-app/src folder. # Main app file
3. Place remaining 5 files in multimodal-content-app/src/components folder
4. Go to terminal in the folder of the multimodal-content-app and run npm start command

Implementation approach:

1. I have chosen “What is AI ( For People in Hurry )” as my content in all three formats.
2. The Text, Audio and Video files are storing 3 formats of content and named appropriately.
3. The ContentDisplay.js and MultiModalDropdown.js are used to select format and display them on website.
4. App.js will bind all these files together to run the website.

Challenges:
1.	Did not implement text to speech due shortage of time.
2.	When audio or video format is chosen the content plays from beginning each time. (Forcing the user to begin from starting, which could be annoying).
