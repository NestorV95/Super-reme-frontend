//----------------------------------------- packages ---------------------------------------------//
import React from "react";
import { IconContext } from "react-icons";
import {FaLinkedin,FaGithubSquare,FaTwitterSquare,FaYoutubeSquare} from "react-icons/fa";
import { Link } from "react-router-dom";
//---------------------------------------- components --------------------------------------------//
import LogoCdt from "../components/Logo.js"
import Header from "../components/Header.js"
//------------------------------------------ styles ----------------------------------------------//
import "../styles/Home.css";
//----------------------------------------- home page --------------------------------------------//
const Home = () => {
  let text = { color: "white" };
  let div = {marginTop: "30vh"}

  return (
    <div className="home">
      <div className="home-content">
        <Header />
        <LogoCdt div={div} text={text} />
        <HomeNav />
        <HomeSocial />
      </div>
    </div>
  );
};
//-------------------------------------- home components -----------------------------------------//
const HomeNav = () => {

  return (
    <div className="home-menu">
      <ul className="hn-ul">
        <li className="hn-li"> <Link className="hn-a" to="/news">News</Link> </li>
        <li className="hn-li"> <Link className="hn-a" to="/previews">Preview</Link> </li>
        <li className="hn-li"> <Link className="hn-a" to="/lookbooks">Lookbook</Link> </li>
        <li className="hn-li"> <Link className="hn-a" to="/shop">Shop</Link> </li>
        <li className="hn-li"> <Link className="hn-a" to="/random">Random</Link> </li>
        <li className="hn-li"> <Link className="hn-a" to="/about">About</Link> </li>
        <li className="hn-li"> <Link className="hn-a" to="/stores">Stores</Link> </li>
        <li className="hn-li"> <Link className="hn-a" to="/contact">Contact</Link> </li>
        <li className="hn-li"> <Link className="hn-a" to="/mailinglist">Mailing List</Link> </li>
      </ul>
    </div>
  );
};

const HomeSocial = () => {
  return (
    <div className="home-social">
      <IconContext.Provider value={{ style: { fontSize: "20px", color: "grey" } }}>
        <a className="home-si" href="https://cat-bounce.com/"> <FaGithubSquare /> </a>
        <a className="home-si" href="http://www.leduchamp.com/"> <FaTwitterSquare /> </a>
        <a className="home-si" href="http://www.patience-is-a-virtue.org/"> <FaLinkedin /> </a>
        <a className="home-si" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" > <FaYoutubeSquare/> </a>
      </IconContext.Provider>
    </div>
  );
};

export default Home;
