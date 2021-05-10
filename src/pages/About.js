//----------------------------------------- packages ---------------------------------------------//
import React from "react";
//---------------------------------------- components --------------------------------------------//
import BottomNav from "../components/BottomNav";
import LogoCdt from "../components/Logo";
//----------------------------------------- styles -----------------------------------------------//

//---------------------------------------- about page --------------------------------------------//
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
                <BottomNav/>
        </div>
    )
}
//-------------------------------------- about components ----------------------------------------//
export default About