import React from "react";
import BottomNav from "./BottomNav";
import LogoCdt from "./Logo";

const About=()=>{
    return(
        <div>
            <h1>About Page</h1>
                {/* render a logo and current date time*/}
                {/*  logo leads to home*/}
                <LogoCdt />
                {/* render about story */}
                <div>
                    <p>insert parody story about super-reme</p>
                    
                </div>
                
                {/* render a navigation bar at bottom of page*/}
                <BottomNav/>
        </div>
    )
}

export default About