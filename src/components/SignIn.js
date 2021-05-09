import React from "react";

const SignIn=()=>{
    return(
        <div className="SignIn-content">
            <form>
                <div className="si-username">
                    <label>Username</label>
                    <input type="text"/>
                </div>
                <div className="si-password">
                    <label>Password</label>
                    <input type="password"/> 
                </div>
                <div className="si-button">
                    <button>Sign In</button>  
                </div>
            </form>
        </div>
    )
}

export default SignIn