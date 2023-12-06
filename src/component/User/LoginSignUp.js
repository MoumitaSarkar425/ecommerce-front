import React, { Fragment } from 'react'
import Loader from '../layout/Loader/Loader';
import './LoginSignUp.css';
const LoginSignUp = () => {
  return (
    <Fragment>
        <div className='LoginSignUpContainer'>
            <div className='LoginSignUpBox'>
                <div>
                    <div className='login_signUp_toggle'>
                        <p onClick={(e)=>switchTabs(e,"login")}>Login</p>
                        <p onClick={(e)=>switchTabs(e,"register")}>Register</p>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}


export default LoginSignUp;