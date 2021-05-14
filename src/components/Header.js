import React, {useState} from 'react'
import SignButton from './SignIn/SignButton'
import SignContainer from './SignIn/SignContainer'
import '../styles/Header.css'

const Header = () => {
    const [siForm,setSiForm] = useState(false)

    const showSignIn=()=>{
        setSiForm(true)
    }

    return (
        <ul className="hdr">
            <li className="hdr-li">
                { siForm === false ? 
                    <SignButton signIn={showSignIn}/> 
                    : 
                    <SignContainer />
                }
            </li>
        </ul>
    )
}


export default Header
