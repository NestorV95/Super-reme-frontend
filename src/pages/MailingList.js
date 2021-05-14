//----------------------------------------- packages ---------------------------------------------//
import React,{useState} from "react";
//---------------------------------------- components --------------------------------------------//
import BottomNav from "../components/BottomNav";
import LogoCdt from "../components/Logo";
//----------------------------------------- styles -----------------------------------------------//
import '../styles/MailingList.css'
//------------------------------------- Mailing List page ----------------------------------------//
const MailingList=()=>{
    const [syke,setSyke] = useState(false)

    const simage = 'https://i.pinimg.com/originals/1b/24/d1/1b24d18d4a1405776d0f7450a979356b.jpg'
    const syStyle = {
        position: 'absolute',
        display: 'block',
        height: '50vh',
        width: '50vw',
        top: '30vh',
        left: '0',
        right: '0',
        margin: 'auto'
    }

    const gotEm=()=>{
        setSyke(true)
    }

    return(
        <div className="mailing-page" >
            <LogoCdt/>
            { syke? 
                <img src={simage} alt=""style={syStyle}/>
                :
                <MailingListForm gotEm={gotEm}/>
            }
            
            <BottomNav/>
        </div>
    )
}
//---------------------------------- Mailing List Components -------------------------------------//
const MailingListForm=({gotEm})=>{

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
                <input className="eti" type="text" name="email" placeholder="address@email.com"/>
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
            <input className="cb-div"type="checkbox"></input>
            <button className="sub" onClick={()=>gotEm()}>subscribe</button>
            <button className="unsub" onClick={()=>gotEm()}>unsubscribe</button>
        </div>
    )
}



export default MailingList