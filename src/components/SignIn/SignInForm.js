import React,{useState,useContext} from "react";
import { DataContext } from "../../App";
import '../../styles/SignIn.css'

const SignInForm = ({toggle}) =>{
    const {dispatchValue} = useContext(DataContext)
    const [usrnm, setUsrnm] = useState("")
    const [pwd, setPwd] = useState("")

    const logOn=()=>{
        const user ={username:usrnm,password: pwd}
        const req={
          method:'POST',
          headers:{'Content-Type':'application/json','Accept':'application/json','Authorization':'Bearer <token>'},
          body: JSON.stringify({user:user})
        }
        fetch('http://localhost:3000/api/v1/auth',req)
        .then(res=>res.json())
        .then(nd=>{
          dispatchValue({type:'LOG_IN', user: nd.user, jwt: nd.jwt});
          localStorage.setItem("token", JSON.stringify(nd.jwt))
        })
    }

    const togEm=()=>{
        toggle()
    }

    return(
        <div className="si-content">
            <p className="si-tt">welcome back</p>
            <input className="si-usr" type="text" value={usrnm} onChange={(e)=>setUsrnm(e.target.value)} placeholder="username" />
            <input className="si-pwd" type="password"value={pwd} onChange={(e)=>setPwd(e.target.value)} placeholder="password"/> 
            <div>
                <button className="si-su" onClick={()=>togEm()}>Sign Up</button> 
                <button className="si-btn" onClick={()=>logOn()}> Sign In</button>  
            </div>
           
        </div>
    )
}

export default SignInForm  
