import React from "react";
import '../../styles/SignIn.css'

const SignInForm = ({toggle}) =>{
    const togEm=()=>{
        toggle()
    }

    return(
        <div className="si-content">
                <div className="si-usr">
                    <label>Username</label>
                    <input type="text" placeholder="username" />
                </div>
                <div className="si-pwd">
                    <label>Password</label>
                    <input type="password" placeholder="password"/> 
                </div>
                <div >
                    <button className="su-btn" onClick={()=>togEm()}>Sign Up</button> 
                    <button className="si-btn"> Sign In</button>  
                </div>
        </div>
    )
}

export default SignInForm  
