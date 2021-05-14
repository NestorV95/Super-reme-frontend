import React,{useContext} from 'react' //
import { DataContext } from '../../App'

import SignInButton from './SignInButton'
import SignOutButton from './SignOutButton'
import '../../styles/SignIn.css'


const SignButton = ({signIn}) => { //, loggedIn
    const {loggedInValue} = useContext(DataContext)
    return(
            <div className="si-con">
                {loggedInValue === false?
                   
                    <SignInButton signIn={signIn}/>
                    : 
                    <SignOutButton/>
                }
            </div>
    )
     
}

export default SignButton 