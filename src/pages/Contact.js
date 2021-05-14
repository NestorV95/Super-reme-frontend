//----------------------------------------- packages ---------------------------------------------//
import React from "react";
//---------------------------------------- components --------------------------------------------//
import BottomNav from "../components/BottomNav";
import LogoCdt from "../components/Logo";
//----------------------------------------- styles -----------------------------------------------//
import '../styles/Contact.css'
//--------------------------------------- contact page -------------------------------------------//
const Contact=()=>{
    return(
        <div className='contact-page'>
            <LogoCdt/>
            <ContactForm/>
            <BottomNav/>
        </div>
    )
}
//------------------------------------- contact components ---------------------------------------//
const ContactForm=()=>{
    return(<div className="cnt-cnt">
        <p className="cnt-p">contact super-reme</p>
        <input className="cnt-fn" type="text" placeholder="first name"/> <br/>
        <input className="cnt-ln" type="text" placeholder="last name"/> <br/>
        <input className="cnt-em" type="text" placeholder="email address"/> <br/>
        <input className="cnt-on" type="text" placeholder="order number"/> <br/>
        <select className="cnt-sel">
            <option>A slightly bothersome oof</option>
            <option>A moderatly bothersome oof</option>
            <option>The oof has hit the fan</option>
        </select>
        <div className="cnt-lta">
            <label className="cnt-l">message</label><br/> 
            <textarea className="cnt-ta" placeholder="dont hurt our feelings :("></textarea>
        </div>
        <button className="cnt-btn">send</button>
        {/* shameless self plug */}
        <p className="cnt-b">website by <span className="plug">Robert</span> & <span className="plug">Nestor</span></p>

    </div>
    )
}



export default Contact