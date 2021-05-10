//----------------------------------------- packages ---------------------------------------------//
import React from "react";
//---------------------------------------- components --------------------------------------------//
import BottomNav from "../components/BottomNav";
import LogoCdt from "../components/Logo";
//----------------------------------------- styles -----------------------------------------------//

//--------------------------------------- contact page -------------------------------------------//
const Contact=()=>{
    return(
        <div>
            <h1>Contact Page</h1>
            <LogoCdt/>
            <ContactForm/>
            <BottomNav/>
        </div>
    )
}
//------------------------------------- contact components ---------------------------------------//
const ContactForm=()=>{
    return(<div>
        <div>
            <p>contact super-reme</p>
        </div>
        <div>
            <input type="text" placeholder="first name"/> <br/>
            <input type="text" placeholder="last name"/> <br/>
        </div>
        <div>
            <input type="text" placeholder="email address"/> <br/>
            <input type="text" placeholder="order number"/> <br/>
        </div>
        <div>
            <select>
                <option>A slightly bothersome oof</option>
                <option>A moderatly bothersome oof</option>
                <option>The oof has hit the fan</option>
            </select>
        </div>
        <div>
            <label>message</label><br/> 
            <textarea></textarea>
            
        </div>
        <div>
            <button>send</button>
        </div>
        <div>
            {/* shameless self plug */}
            <p>website & e-comerce by Robert & Nestor</p>
        </div>
    </div>
    )
}



export default Contact