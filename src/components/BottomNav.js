import React from "react";
import { Link } from "react-router-dom";
import '../styles/BottomNav.css'

const BottomNav = () => {
  return (
    <>
        <ul className="nav-ul">
          <li className="nav-li"> <Link className="nav-a" to="/news">News</Link> </li>
          <li className="nav-li"> <Link className="nav-a" to="/shop">Shop</Link> </li>
          <li className="nav-li"> <Link className="nav-a" to="/about">About</Link> </li>
          <li className="nav-li"> <Link className="nav-a" to="/stores">Stores</Link> </li>
          <li className="nav-li"> <Link className="nav-a" to="/contact">Contact</Link> </li>
          <li className="nav-li"> <Link className="nav-a" to="/mailinglist">Mailing List</Link> </li>
        </ul>
    </>
  );
};

export default BottomNav;
