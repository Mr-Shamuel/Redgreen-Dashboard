import React from "react";
import "./Home.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Fetured from "../../Components/Fetured/Fetured";
import Chart from "./../../Components/Chart/Chart";
import Notifications from "../../Components/Notifications/Notifications";
import Products from "../../Components/Products/Products";
import Sales from "./../../Components/Sales/Sales";
import Weather from "../../Components/Weather/Weather";

const Home = () => {
  return (
    <div className="home">
      <Navbar />

      <div className="homeContainer">
        <div className="sidebars">
          <Sidebar />
        </div>
        <div className="main">
          <div className="title">Redgreen Sales</div>

          <Notifications />

          <div className="chartInfo">
            <Fetured />
            <Chart />
          </div>

          <div className="Allproducts">
            <Products />
            <div className="viewProducts">
              <Sales />
              <Weather />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
