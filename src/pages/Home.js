//----------------------------------------- packages ---------------------------------------------//
import React,{useLayoutEffect,useContext} from "react";
import { IconContext } from "react-icons";
import {FaLinkedin,FaGithubSquare,FaTwitterSquare,FaYoutubeSquare} from "react-icons/fa";
import { Link } from "react-router-dom";
//---------------------------------------- components --------------------------------------------//
import LogoCdt from "../components/Logo.js"
import Header from "../components/Header.js"
import { DataContext } from "../App.js";
//------------------------------------------ styles ----------------------------------------------//
import "../styles/Home.css";
//----------------------------------------- home page --------------------------------------------//
const Home = ({createUser}) => {
  const {currUserValue,dispatchValue} = useContext(DataContext)
  const text = { color: "white" };
  const div = {marginTop: "30vh"}

  const getCurrUser=()=>{
    if(localStorage.getItem('user_id') && currUserValue === {}){
      const req={
        method:'GET',
        headers:{'Content-Type':'application/json','Accept':'application/json','Authorization':`Bearer ${localStorage.getItem("user_id")}`}
      }
      fetch('http://localhost:3000/api/v1/users',req)
      .then(res=>res.json())
      .then(nd=>{
        dispatchValue({type:'LOG_IN', user: nd.user, jwt: nd.jwt});
        localStorage.setItem("token", JSON.stringify(nd.jwt))
      })
    }else{}
  }

  useLayoutEffect(()=>{
    getCurrUser() 
  })

  return (
    <div className="home">
      <div className="home-content">
        <Header createUser={createUser}/>
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
        <li className="hn-li"> <Link className="hn-a" to="/shop">Shop</Link> </li>
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
