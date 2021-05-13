import React,{useState} from "react";
import '../../styles/SignIn.css'

const SignInForm = ({toggle, logOn}) =>{
    const [usrnm, setUsrnm] = useState("")
    const [pwd, setPwd] = useState("")

    const logem=()=>{
        let log ={
            username:usrnm,password: pwd}
        console.log(log)
        logOn(log)
    }

    const togEm=()=>{
        toggle()
    }

    return(
        <div className="si-content">
                <div className="si-usr">
                    <label>Username</label>
                    <input type="text" value={usrnm} onChange={(e)=>setUsrnm(e.target.value)} placeholder="username" />
                </div>
                <div className="si-pwd">
                    <label>Password</label>
                    <input type="password"value={pwd} onChange={(e)=>setPwd(e.target.value)} placeholder="password"/> 
                </div>
                <div >
                    <button className="su-btn" onClick={()=>togEm()}>Sign Up</button> 
                    <button className="si-btn" onClick={()=>logem()}> Sign In</button>  
                </div>
        </div>
    )
}

export default SignInForm  
