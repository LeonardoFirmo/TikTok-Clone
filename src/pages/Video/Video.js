import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from '../../components/footer/VideoFooter'

function Video() {
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
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
        loop
      >
      </video>
      <VideoFooter/>
   
    </div>
  );
}

export default Video;
