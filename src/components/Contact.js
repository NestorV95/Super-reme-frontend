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
const ContactForm=()=>{
    return(<div>
        <div>
            {/* text */}
            <p>contact super-reme</p>
        </div>
        <div>
            {/* 2 name inputs */}
            <input type="text" placeholder="first name"/> <br/>
            <input type="text" placeholder="last name"/> <br/>
        </div>
        <div>
            {/* email & order inputs */}
            <input type="text" placeholder="email address"/> <br/>
            <input type="text" placeholder="order number"/> <br/>
        </div>
        <div>
            {/* select with options */}
            <select>
                <option>A slightly bothersome oof</option>
                <option>A moderatly bothersome oof</option>
                <option>The oof has hit the fan</option>
            </select>
        </div>
        <div>
            {/* label & textarea */}
            <label>message</label><br/> 
            <textarea></textarea>
            
        </div>
        <div>
            {/* send button */}
            <button>send</button>
        </div>
        <div>
            {/* shameless self plug */}
            <p>website & e-comerce by Robert & Nestor</p>
        </div>
    </div>
    )
}

const Contact=()=>{
    return(
        <div>
            <h1>Contact Page</h1>
            {/* render a logo and current date time*/}
            {/* logo leads to home */}
            <LogoCdt/>
            {/* render contact form */}
            <ContactForm />
            {/* render a navigation bar at bottom of page */}
            <BottomNav/>
        </div>
    )
}

export default Contact