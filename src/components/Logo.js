import React,{useState, useEffect} from "react";
import {Link} from "react-router-dom";
import logo from "../images/super-reme.png"

export const Logo=()=>{
    return (
        <div>
            <Link to="/">
                <img src={logo} alt="sr-logo" style={{width:'10rem'}}/>
            </Link> 
        </div>
    )
}


export const CurrentDateTime=(props)=>{
    let {style} = props
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
        <p style={style}>{`${mmddyyyy} ${hhmmss} HTX`}</p>
    )
}

export const LogoCdt=(props)=>{
    let {style} = props
    return(
        <div className="logo-cdt">
            <Logo/>
            <CurrentDateTime style={style}/>
        </div>
    )
}


export default LogoCdt