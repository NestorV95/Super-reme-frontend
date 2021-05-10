//----------------------------------------- packages ---------------------------------------------//
import React from "react";
//---------------------------------------- components --------------------------------------------//
import BottomNav from "../components/BottomNav";
import LogoCdt from "../components/Logo";
//----------------------------------------- styles -----------------------------------------------//

//------------------------------------- Mailing List page ----------------------------------------//
const MailingList=()=>{
    return(
        <div>
            <h1>MailingList Page</h1>
            <LogoCdt/>
            <MailingListForm/>
            <BottomNav/>
        </div>
    )
}
//---------------------------------- Mailing List Components -------------------------------------//
const MailingListForm=()=>{
    return(
        <div className="mlf-div">
            <div className="mlft1-div">
               <p>"add my email to your mailinglist <br/>
                    <span>i understand that i can opt out at</span><br/>
                    <span>any time", is what this form would</span><br/> 
                    <span>say if this was really an ecomerce</span><br/>
                    <span>app.</span>
                </p> 
            </div>
            <div className="eti-div">
                <input type="text" name="email" placeholder="address@email.com"/>
            </div>
            <div className="lri-div">
                <label>english<input type="radio"></input></label><br/>
                <label>spanish<input type="radio"></input></label><br/>
            </div>
            <div className="mlft2-div">
                <p>"notify me when the web shop is<br/>
                    <span>updated with new items" would </span><br/>
                    <span>also be something this app might</span><br/>
                    <span>say if it were real. </span><br/>
                </p>
            </div>
            <div className="cb-div">
                <input type="checkbox"></input>
            </div>
            <div>
                <div>
                    <button>subscribe</button>
                </div>
                <div>
                    <button>unsubscribe</button>
                </div>
            </div>
        </div>
    )
}

export default MailingList