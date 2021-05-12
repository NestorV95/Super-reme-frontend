import React,{useState} from 'react'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'
import '../../styles/SignIn.css'

const SignContainer = () => {
    const [toggle, setToggle] = useState(false)

    const togEm = ()=>{
        let newTog = !toggle
        setToggle(newTog)
    }
    return(
        <div className="si-con">
            {toggle === false? 
                <SignInForm toggle={togEm}/>
                :
                <SignUpForm toggle={togEm}/>
            }
        </div>
    )
    
    
}

export default SignContainer
