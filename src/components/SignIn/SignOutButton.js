import React from "react";
import '../../styles/SignIn.css'

export const SignOutButton=()=>{

    const showSignOut=e=>{
        e.preventDefault()
        signOut()
    }

    return <button className="hdr-si" onClick={(e)=>showSignOut(e)}>sign out</button>
}

export default SignOutButton