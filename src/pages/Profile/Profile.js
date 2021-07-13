import React, { useState } from "react";
import Leftbar from "../../components/Leftbar/Leftbar";
import Navbar from "../../components/Navbar/Navbar";
import postImg from "../../components/images/pic1.jpg";
import Post from "../../components/Post/Post";
import PopUp from "../../components/PopUp/PopUp";
import "./Profile.css";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Navbar />
      <div className="home-container">
        <Leftbar />
        <div>
          <div className="profile">
            <img className="postImg" src={postImg} alt="" />
            <h2 className="username">Disu</h2>
            <p className="bio">I am a superstar</p>
            <p className="bio">Date Joined: July 2021</p>
            <button onClick={togglePopup} className="commentButton">
              Edit Profile
            </button>
          </div>
          {isOpen && (
            <PopUp
              content={
                <>
                  <textarea
                    maxLength={30}
                    className="shareInput"
                    type="text"
                    placeholder="Update bio"
                  />
                  <button
                    style={{ "background-color": "rgb(182, 0, 0)" }}
                    className="commentButton"
                  >
                    Update Profile
                  </button>
                </>
              }
              handleClose={togglePopup}
            />
          )}
          <Post />
        </div>
      </div>
    </div>
  );
};

export default Profile;
