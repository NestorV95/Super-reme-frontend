import React from "react";
import '../../styles/SignIn.css'

const SignUpForm=({toggle})=>{
    const togEm=()=>{
        toggle()
    }
    return(
        <div className="su-content">
                <div className="su-name">
                    <input type="text" placeholder="first name"/> <br/>
                    <input type="text" placeholder="last name"/> <br/>
                </div>
                <div className="su-username">
                    <input type="text" placeholder="username"/> <br/>
                </div>
                <div className="su-email">
                    <input type="text" placeholder="email address"/> <br/>
                </div>

                <div className="su-password">
                    <input type="text" placeholder="password"/> <br/>
                    <input type="text" placeholder="confirm password"/> <br/> 
                </div>
                <div className="su-button">
                    <button >Sign Up</button>  
                    <button className="hdr-su" onClick={()=>togEm()}>Sign In</button> 
                </div>
        </div>
    )
}

export default SignUpForm