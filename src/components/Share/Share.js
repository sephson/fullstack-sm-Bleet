import React from "react";
import "./Share.css";
import postImg from "../images/pic1.jpg";

const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src={postImg} alt="" />
          <textarea
            placeholder="Hi Disu! What are your thoughts?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <form className="shareBottom">
          <div className="shareOptions"></div>
          <button type="submit" className="shareButton">
            Share
          </button>
        </form>
      </div>
    </div>
  );
};

export default Share;
