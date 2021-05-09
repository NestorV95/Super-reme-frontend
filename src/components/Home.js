import React from "react";
import {FaLinkedin,FaGithubSquare,FaTwitterSquare,FaYoutubeSquare} from "react-icons/fa";
import { IconContext } from "react-icons";
import "../Home.css";

import LogoCdt from "./Logo.js";
import HomeNav from "./HomeNav.js";

const Home = () => {
  let cdtStyle = { color: "white" };
  return (
    <div className="home">
      <div className="home-content">
        <div className="home-logo">
          <LogoCdt style={cdtStyle} />
        </div>
        <div className="home-menu">
          <HomeNav />
        </div>
        <HomeSocial />
      </div>
    </div>
  );
};

const HomeSocial = () => {
  return (
    <div className="home-social">
      <IconContext.Provider
        value={{ style: { fontSize: "20px", color: "grey" } }}
      >
        <FaGithubSquare />
        <FaTwitterSquare />
        <FaLinkedin />
        <FaYoutubeSquare />
      </IconContext.Provider>
    </div>
  );
};

export default Home;
