import React from "react";
import Logo from "./Logo";
import {Link} from "react-router-dom";

const LookBooks=()=>{
    return(
        <div>
            <h1>LookBooks Page</h1>
                {/* render logo at bottom left*/}
                {/* logo leads to home */}
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

export default LookBooks