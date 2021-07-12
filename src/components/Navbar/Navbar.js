import React, { useState } from "react";
import "./Navbar.css";
import profilepic from "../images/pic1.jpg";
import PersonIcon from "@material-ui/icons/Person";
import MessageIcon from "@material-ui/icons/Message";
import SearchIcon from "@material-ui/icons/Search";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };
  return (
    <>
      <nav className="navbarItems">
        {/* <input
          className="navbarSearch"
          type="text"
          placeholder="Search Users"
        /> */}
        <div className="left-side-nav">
          <h1 className="navbarLogo">BLEET</h1>
        </div>

        <div className="right-side-nav">
          <img
            src={profilepic}
            className="userProfilePicture"
            alt="profilepic"
          />
        </div>

        <div className="hamburger-menu">
          <div
            onClick={handleClick}
            className={click ? "line line-1 change " : "line line-1"}
          ></div>
          <div
            onClick={handleClick}
            className={click ? " line line-2 change" : "line line-2"}
          ></div>
          <div
            onClick={handleClick}
            className={click ? "line line-3 change" : "line line-3"}
          ></div>
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-links" onClick={closeMobileMenu}>
            <PersonIcon className="Material-icon" /> My Profile
          </li>
          <li className="nav-links" onClick={closeMobileMenu}>
            <MessageIcon className="Material-icon" /> Messages
          </li>
          <li className="nav-links" onClick={closeMobileMenu}>
            <SearchIcon className="Material-icon" /> Search
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
