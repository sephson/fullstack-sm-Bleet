import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import MessageIcon from "@material-ui/icons/Message";
import SearchIcon from "@material-ui/icons/Search";
import "./Leftbar.css";

// #f7fbff    #deebf7    #c6dbef
// #9ecae1    #6baed6    #4292c6
// #2171b5    #08519c    #08306b

const Leftbar = () => {
  return (
    <div className="left-component">
      <ul className="left-menu">
        <li className="nav-links">
          <PersonIcon className="Material-icon" /> My Profile
        </li>
        <li className="nav-links">
          <MessageIcon className="Material-icon" /> Messages
        </li>
        <li className="nav-links">
          <SearchIcon className="Material-icon" /> Search
        </li>
      </ul>
    </div>
  );
};

export default Leftbar;
