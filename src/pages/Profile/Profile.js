import React, { useState, useEffect } from "react";
import Leftbar from "../../components/Leftbar/Leftbar";
import Navbar from "../../components/Navbar/Navbar";

import Post from "../../components/Post/Post";
import PopUp from "../../components/PopUp/PopUp";
import "./Profile.css";
import axios from "axios";
import { useParams } from "react-router";

const Profile = () => {
  const [user, setUser] = useState({});
  const username = useParams().username;
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get(`/api/user?username=${username}`);
      setUser(data);
    };

    fetchUsers();
  }, [username]);
  console.log(user);
  return (
    <div>
      <Navbar />
      <div className="home-container">
        <Leftbar />
        <div>
          <div className="profile">
            <img className="postImg" alt="" />
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
