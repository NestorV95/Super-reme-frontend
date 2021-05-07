import React from "react";
import {Link} from "react-router-dom";
import logo from "../images/super-reme.png"


export const Logo =()=>{
    return (
        <div>
            <Link to="/">
                <img src={logo} alt="sr-logo" style={{width:'10rem'}}/>
            </Link> 
        </div>
    )
}

export const Cdt=()=>{
    return(
        <p>
            
        </p>
    )
}

export const LogoCdt=()=>{
    return(
        <div className="logo-cdt">
            <Logo/>


        </div>
    )
}

export default LogoCdt