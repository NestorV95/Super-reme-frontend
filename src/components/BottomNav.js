import React from "react";
import { Link } from "react-router-dom";

const BottomNav = () => {
  return (
    <div className="footer-nav">
        <ul className="nav-ul">
          <li className="nav-li"> <Link className="nav-a" to="/news">News</Link> </li>
          <li className="nav-li"> <Link className="nav-a" to="/previews">Line Up Preview</Link> </li>
          <li className="nav-li"> <Link className="nav-a" to="/lookbooks">Lookbook</Link> </li>
          <li className="nav-li"> <Link className="nav-a" to="/shop">Shop</Link> </li>
          <li className="nav-li"> <Link className="nav-a" to="/random">Random</Link> </li>
          <li className="nav-li"> <Link className="nav-a" to="/about">About</Link> </li>
          <li className="nav-li"> <Link className="nav-a" to="/stores">Stores</Link> </li>
          <li className="nav-li"> <Link className="nav-a" to="/contact">Contact</Link> </li>
          <li className="nav-li"> <Link className="nav-a" to="/mailinglist">Mailing List</Link> </li>
        </ul>
    </div>
  );
};

export default BottomNav;
