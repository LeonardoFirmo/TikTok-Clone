import React from "react";
import "./Share.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function Share({ handleShareClick }) {
  return (
    <div className="share">
      <div
        className="share-header"
        style={{ borderBottom: "2px solid grey", width: "100%" }}
      >
        <span
          className="videoSidebar_icones"
          onClick={handleShareClick}
          style={{ marginLeft: "95%" }}
        >
          X
        </span>
        <h2> Share</h2>
      </div>
      <WhatsAppIcon />


    </div>
  );
}

export default Share;
