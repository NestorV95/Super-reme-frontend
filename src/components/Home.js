
import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useRouteMatch,
//   useParams
// } from "react-router-dom";


import HomeNav from "./HomeNav.js"

const Home = () => {
  return(
      <div>
        <h1>Home Page</h1>  
        {/* render a log and current date time*/}
        {/* render a navigation vertically and center of page*/}
        <HomeNav />
        {/* render social media logos at bottom */}
    </div>
  );
}




export default Home;