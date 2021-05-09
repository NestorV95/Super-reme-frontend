import React from "react";
import { IconContext } from "react-icons";
import {FaLinkedin,FaGithubSquare,FaTwitterSquare,FaYoutubeSquare} from "react-icons/fa";
import { Link } from "react-router-dom";
import "../Home.css";
import LogoCdt from "./Logo.js";

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

const HomeNav = () => {
  return (
      <ul className="hn-ul">
        <li className="hn-li">
          <Link className="hn-a"  to="/news">News</Link>
        </li>
        <li className="hn-li">
          <Link className="hn-a" to="/previews">Line Up Preview</Link>
        </li>
        <li className="hn-li">
          <Link className="hn-a" to="/lookbooks">Lookbook</Link>
        </li>
        <li className="hn-li">
          <Link className="hn-a" to="/shop">Shop</Link>
        </li>
        <li className="hn-li">
          <Link className="hn-a" to="/random">Random</Link>
        </li>
        <li className="hn-li">
          <Link className="hn-a" to="/about">About</Link>
        </li>
        <li className="hn-li">
          <Link className="hn-a" to="/stores">Stores</Link>
        </li>
        <li className="hn-li">
          <Link className="hn-a" to="/contact">Contact</Link>
        </li>
        <li className="hn-li">
          <Link className="hn-a" to="/mailinglist">Mailing List</Link>
        </li>
      </ul>
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
