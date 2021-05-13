import React, {useState} from 'react'
import SignInButton from './SignIn/SignInButton'
import SignContainer from './SignIn/SignContainer'
import '../styles/Header.css'

const Header = ({logOn, createUser}) => {
    const [siForm,setSiForm] = useState(false)

    const showSignIn=()=>{
        setSiForm(true)
    }

    return (
        <ul className="hdr">
            <li className="hdr-li">
                { siForm === false ? 
                    <SignInButton signIn={showSignIn}/> 
                    : 
                    <SignContainer logOn={logOn} createUser={createUser}/>
                }
            </li>
        </ul>
    )
}


export default Header
