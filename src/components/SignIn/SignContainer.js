import React,{useState} from 'react'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'
import '../../styles/SignIn.css'

const SignContainer = ({logIn,createUser}) => {
    const [toggle, setToggle] = useState(false)

    const togEm = ()=>{
        let newTog = !toggle
        setToggle(newTog)
    }
    return(
        <div className="si-con">
            {toggle === false? 
                <SignInForm toggle={togEm} logIn={logIn}/>
                :
                <SignUpForm toggle={togEm} createUser={createUser}/>
            }
        </div>
    )
    
    
}

export default SignContainer
