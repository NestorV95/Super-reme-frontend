import React from "react";
import '../../styles/SignIn.css'

export const SignInButton=({signIn})=>{

    const showSignIn=e=>{
        e.preventDefault()
        signIn()
    }

    return <button className="hdr-si" onClick={(e)=>showSignIn(e)}>sign in</button>
}

export default SignInButton