import React from "react";
import "./Sidebar.scss";
import dash from "../../images/Chart.png";
import maps from "../../images/map.png";
import menu from "../../images/Manage.png";
import menu2 from "../../images/Review.png";
import Settings from "../../images/Settings.png";
import Accounts from "../../images/Accounts.png";
import help from "../../images/Help.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="items">
        <ul>
          <p className="title">MENU</p>
          <li className="dash">
            <img src={dash} alt="icon" className="icons" />
            <span>Dashboard</span>
          </li>
          <li>
            <img src={maps} alt="icon" className="icons" />
            <span>Maps</span>
          </li>
          <li>
            <img src={menu} alt="icon" className="icons" />
            <span>Menu</span>
          </li>
          <li>
            <img src={menu2} alt="icon" className="icons" />
            <span>Menu</span>
          </li>

          <p className="title">OTHERS</p>
          <li>
            <img src={Settings} alt="icon" className="icons" />
            <span>Settings</span>
          </li>
          <li>
            <img src={Accounts} alt="icon" className="icons" />
            <span>Accounts</span>
          </li>
          <li>
            <img src={help} alt="icon" className="icons" />
            <span>Helps</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
