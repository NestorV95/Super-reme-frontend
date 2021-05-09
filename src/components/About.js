import React from "react";
import BottomNav from "./BottomNav";
import LogoCdt from "./Logo";

const About=()=>{
    return(
        <div className="about-content">
            <h1>About Page</h1>
                <div className="about-logo">
                    <LogoCdt />
                </div>
                <div className="about-story">
                    <p>insert parody story about super-reme</p>
                </div>
                
                {/* render a navigation bar at bottom of page*/}
                <BottomNav/>
        </div>
    )
}

export default About