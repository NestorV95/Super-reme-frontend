import React, {useState,useContext} from 'react'
import SignButton from './SignIn/SignButton'
import SignContainer from './SignIn/SignContainer'
import '../styles/Header.css'
import { DataContext } from '../App'

const Header = () => {
    const [siForm,setSiForm] = useState(false)

    const showSignIn=()=>{
        setSiForm(true)
    }
    console.log(currUserValue, loggedInValue)
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

const UserTile = () =>{
    const {currUserValue, loggedInValue}= useContext(DataContext)
    return(
        <div>
            
        </div>
    )
}


export default Header
