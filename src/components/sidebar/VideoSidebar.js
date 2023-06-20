import { useState } from "react";
import "./VideoSidebar.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";
import Comentario from "../comentario/Comentario";
import Share from "../share/Share";

function VideoSidebar({ likes, messages, shares }) {
  const [liked, setLiked] = useState(false);
  const [chatOn, setChatOn] = useState(false);
  const [shareOn, setShareOn] = useState(false);

  function handleClick() {
    setLiked(!liked);
  }

  function handleChatClick() {
    setChatOn(!chatOn);
  }

  function handleShareClick() {
    setShareOn(!shareOn);
  }

  return (
    <>
      {chatOn ? (
        <Comentario messages={messages} handleChatClick={handleChatClick} />
      ) : null}

      {shareOn ? (
        <Share handleShareClick={handleShareClick}/>
      ): null}


      

      <div className="videoSidebar">
        <div className="videoSidebar__options" onClick={handleClick}>

          {liked ? (
            <FavoriteIcon 
            className="videoSidebar_icones" 
            fontSize="large" />
          ) : (
            <FavoriteBorderIcon
              className="videoSidebar_icones"
              fontSize="large"
            />
          )}
          <p>{liked ? likes + 1 : likes}</p>
        </div>

        <div className="videoSidebar__options">
          <ChatIcon
            onClick={handleChatClick}
            className="videoSidebar_icones"
            fontSize="large"
          />

          <p>{messages.length}</p>
        </div>

        <div className="videoSidebar__options">
          <ShareIcon
            className="videoSidebar_icones"
            fontSize="large"
            onClick={handleShareClick}
          />
          <p>{shares}</p>
        </div>
      </div>
    </>
  );
}

export default VideoSidebar;
