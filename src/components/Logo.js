import React,{useState, useEffect} from "react";
import {Link} from "react-router-dom";
import "../styles/Logo.css"
import logo from "../images/super-reme.png"

export const Logo=()=>{
    return (
        <>
            <Link to="/">
                <img className="logo"src={logo} alt="sr-logo"/>
            </Link> 
        </>
    )
}

export const CurrentDateTime=({style})=>{
    const today = new Date();
    const [time, setTime] = useState(today)

    useEffect(()=>{
        const timer = setInterval(()=>{
        setTime(new Date())
        }, 1000);
        return ()=>{
            clearInterval(timer)
        }
    },[])

    const mmddyyyy = time.toLocaleDateString('en',{month:'2-digit',day:'2-digit',year:'numeric'})
    const hhmmss = time.toLocaleTimeString('en',{hour:'2-digit',minute:'2-digit'})

    return(
        <p className="cdt"style={style}>{`${mmddyyyy} ${hhmmss} HTX`}</p>
    )
}

export const LogoCdt=({div,text})=>{
    return(
        <div className="logo-cdt" style={div}>
            <Logo/>
            <CurrentDateTime style={text}/>
        </div>
    )
}


export default LogoCdt