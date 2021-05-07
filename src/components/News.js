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

const News=()=>{
    return(
        <div>
            <h1>News Page</h1>
            <LogoCdt/>
            {/* render a log and current date time*/}
            {/* logo leads to home */}
            {/* render news image */}
            {/* render # of # slide show buttons below image*/}
            {/* render news content */}
            {/* render a navigation bar at bottom of page */}
            <BottomNav/>
        </div>
    )
}

export default News