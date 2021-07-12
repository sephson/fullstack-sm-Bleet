import React from "react";
import Leftbar from "../../components/Leftbar/Leftbar";
import Navbar from "../../components/Navbar/Navbar";
import Center from "../../components/Center/Center";

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className="home-container">
        <Leftbar />
      </div>
    </div>
  );
};

export default Profile;
