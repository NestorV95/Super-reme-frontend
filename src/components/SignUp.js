import React from "react";

const SignUp=()=>{
    return(
        <div className="su-content">
            <form>
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
                    <button>Sign Up</button>  
                </div>
            </form>
        </div>
    )
}

export default SignUp