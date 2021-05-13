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
                    <p>Since we get this alot, I'm going to make it crystal clear that Super-reme has NO association with Supreme, and quite frankly me and my co-founder Nestor are in two minds about sueing and/or simply throwing hands with them foos over at Supreme for not so politely pilfering our idea.
                        Over at Super-reme, we have  developed our stores and merchandise to embody scooter culture. We don't discriminate on what type of scooter you have, whether it be manual, electric, motorized, every scooter type is welcome at Super-reme.
                        Come one down to or HTX store - you get two packs of Newport 100s with every 5th purchase.</p>
                </div>
                <BottomNav/>
        </div>
    )
}
//-------------------------------------- about components ----------------------------------------//
export default About