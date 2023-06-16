import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from '../../components/footer/VideoFooter'
import VideoSidebar from "../../components/sidebar/VideoSidebar";

function Video({likes, messages, shares, name, description, music, url}) {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handleStart() {
   
    if (!play) {
      setPlay(true);
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();
    setPlay(false);
  }

  function handleNextVideo() {
    console.log("passou video");
    videoRef.current.pause();
    setPlay(false);
  }

  return (
    <div className="video">
      <video 
        className="video__player"
        ref={videoRef}
        onClick={handleStart}
        onWheel={handleNextVideo}
        src={url}
        loop
      >
      </video>
      <VideoSidebar
        likes={likes}
        messages={messages}
        shares={shares}
    
      />
      <VideoFooter
        name={name}
        description={description}
        music={music}
      />
   
    </div>
  );
}

export default Video;
