import React from "react";

const SignIn=()=>{
    return(
        <div className="si-content">
            <form>
                <div className="si-username">
                    <label>Username</label>
                    <input type="text" placeholder="username" />
                </div>
                <div className="si-password">
                    <label>Password</label>
                    <input type="password" placeholder="password"/> 
                </div>
                <div className="si-button">
                    <button>Sign In</button>  
                </div>
            </form>
        </div>
    )
}

export default SignIn