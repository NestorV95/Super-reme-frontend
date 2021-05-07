import React from "react";
import BottomNav from "./BottomNav";
import LogoCdt from "./Logo";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useRouteMatch,
//   useParams
// } from "react-router-dom";

const About=()=>{
    return(
        <div>
            <h1>About Page</h1>
                {/* render a logo and current date time*/}
                {/*  logo leads to home*/}
                <LogoCdt />
                {/* render about story */}
                {/* render a navigation bar at bottom of page*/}
                <BottomNav/>
        </div>
    )
}

export default About