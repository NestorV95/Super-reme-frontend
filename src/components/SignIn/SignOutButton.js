import React,{useContext} from "react";
import { DataContext } from '../../App'
import '../../styles/SignIn.css'

export const SignOutButton=()=>{
    const {dispatchValue} = useContext(DataContext)

    const logOut=()=>{
        dispatchValue({type: 'LOG_OUT'})
        localStorage.removeItem("user_id");
    }



    return <button className="hdr-si" onClick={()=>logOut()}>sign out</button>
}

export default SignOutButton