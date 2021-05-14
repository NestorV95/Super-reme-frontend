import React,{useState,useContext} from "react";
import { DataContext } from "../../App";
import '../../styles/SignUp.css'

const SignUpForm=({toggle})=>{
    const {dispatchValue} = useContext(DataContext)

    const [fstName,setFstName] = useState("")
    const [lstName,setLstName] = useState("")
    const [usrName, setUsrName] = useState("")
    const [eml, setEml] = useState("")
    const [pwd,setPwd] = useState("")
    const [cnfPwd,setCnfPwd] = useState("")

    const togEm=()=>{
        toggle()
    }

    const signUp = ()=>{
        const newUser={
            // eslint-disable-next-line
            ['first_name']: fstName,
            // eslint-disable-next-line
            ['last_name']: lstName,
            username: usrName,
            email: eml,
            password: pwd,
            // eslint-disable-next-line
            ['password_confirmation']: cnfPwd
        }
        if(pwd === cnfPwd){
            const req={
                method:'POST',
                headers:{'Content-Type':'application/json','Accept':'application/json','Authorization':'Bearer <token>'},
                body: JSON.stringify({user:newUser})
            }
            fetch('http://localhost:3000/api/v1/users',req)
            .then(res=>res.json())
            .then(nd=>{
                dispatchValue({type:'LOG_IN', user: nd.user, jwt: nd.jwt});
                localStorage.setItem("user_id", JSON.stringify(nd.jwt));
            })
        }
    }
    
    return(
        <div className="su-content">
            <p className="su-tt" >we swear its not a cult</p>
            <input className="su-in" type="text" value={fstName} onChange={(e)=>setFstName(e.target.value)} placeholder="first name"/> <br/>
            <input className="su-in" type="text" value={lstName} onChange={(e)=>setLstName(e.target.value)} placeholder="last name"/> <br/>     
            <input className="su-in" type="text" value={usrName} onChange={(e)=>setUsrName(e.target.value)} placeholder="username"/> <br/>      
            <input className="su-in" type="text" value={eml} onChange={(e)=>setEml(e.target.value)} placeholder="email address"/> <br/>   
            <input className="su-in" type="text"  value={pwd} onChange={(e)=>setPwd(e.target.value)} placeholder="password"/> <br/>
            <input className="su-in" type="text"  value={cnfPwd} onChange={(e)=>setCnfPwd(e.target.value)} placeholder="confirm password"/> <br/> 
            <button className="su-btn" onClick={()=>signUp()}>Sign Up</button>  
            <button className="su-si" onClick={()=>togEm()}>Sign In</button> 
        </div>
    )
}

export default SignUpForm