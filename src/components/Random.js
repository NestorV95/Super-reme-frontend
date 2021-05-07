import React from "react";
import Logo from "./Logo";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useRouteMatch,
//   useParams
// } from "react-router-dom";

const Random=()=>{
    return(
        <div>
            <h1>Random Page</h1>
                {/* renders random video */}
                {/* renders logo at bottom left*/}
                <Logo/>
                {/* renders video details left og logo */}
                {/* renders embed video, email video, and more videos buttons  */}
                {/* more videos button links to videos list */}
        </div>
    )
}

export default Random