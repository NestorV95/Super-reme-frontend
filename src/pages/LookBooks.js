//----------------------------------------- packages ---------------------------------------------//
import React from "react";
//---------------------------------------- components --------------------------------------------//
import {Link} from "react-router-dom";
import Logo from "../components/Logo";
//----------------------------------------- styles -----------------------------------------------//

//--------------------------------------- lookbooks page -----------------------------------------//
const LookBooks=()=>{
    return(
        <div>
            <h1>LookBooks Page</h1>
                <Logo/>
                {/* render a look display card */}
                {/* render index card #/# */}
                {/* render a lookbook index cards left of display card */}   
                {/* description left of logo display card*/}
                    {/* items in description link to preview/item */}
                {/* back button leads to home */}
            <div>
                <Link to="/">back</Link> 
            </div>
        </div>
    )
}
//------------------------------------ lookbooks components --------------------------------------//
export default LookBooks