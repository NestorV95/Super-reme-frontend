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

const MailingList=()=>{
    return(
        <div>
            <h1>MailingList Page</h1>
            {/* render a log and current date time*/}
            {/* logo leads to home */}
            <LogoCdt/>
            {/* mailing list form */}
            {/* subscribe button  & unsubscribe buttons*/}
            {/* render a navigation bar at bottom of page */}
            <BottomNav/>
        </div>
    )
}

export default MailingList