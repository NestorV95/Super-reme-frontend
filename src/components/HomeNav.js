import React from "react";
import "../Home.css";
import { Link } from "react-router-dom";

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

export default HomeNav;
