import React from "react";
import Post from "../Post/Post";
import Share from "../Share/Share";
import "./Center.css";

// #f7fbff    #deebf7    #c6dbef
// #9ecae1    #6baed6    #4292c6
// #2171b5    #08519c    #08306b
const Center = () => {
  return (
    <div className="center-component">
      <Share />
      <Post />
    </div>
  );
};

export default Center;
