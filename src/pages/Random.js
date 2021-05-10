//----------------------------------------- packages ---------------------------------------------//
import React from "react";
//---------------------------------------- components --------------------------------------------//
import Logo from "../components/Logo";
//----------------------------------------- styles -----------------------------------------------//

//---------------------------------------- random page -------------------------------------------//
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
//-------------------------------------- random components ---------------------------------------//
export default Random