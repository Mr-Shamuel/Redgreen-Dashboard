import React from "react";
import "./Navbar.scss";
import logo from "../../images/Logo.png";
import SearchIcon from "@mui/icons-material/Search";
import Notification from "../../images/notification.png";
import profile from "../../images/profile.png";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search" />
          <SearchIcon className="icon" />
        </div>
        <div className="items">
          <div className="item">
            <img src={Notification} alt="notification" />
          </div>
          <div className="item">
            <img src={profile} alt="profile" />
            &nbsp;&nbsp; Shamuel
            <KeyboardArrowDownOutlinedIcon fontSize="small"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
