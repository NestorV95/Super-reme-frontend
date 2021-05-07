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

const Stores=()=>{
    return(
        <div>
            <h1>Stores page</h1>
            {/* renders logo and current dat time at top */}
            <LogoCdt/>
            {/* renders stores index cards onclick opens show card with info*/}
            {/* renders navbar at bottom */}
            <BottomNav/>
        </div>
    )
}

export default Stores