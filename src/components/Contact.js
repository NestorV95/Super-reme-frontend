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

const Contact=()=>{
    return(
        <div>
            <h1>Contact Page</h1>
            {/* render a log and current date time*/}
            {/* logo leads to home */}
            <LogoCdt/>
            {/* render contact form */}
            {/* render a navigation bar at bottom of page */}
            <BottomNav/>
        </div>
    )
}

export default Contact