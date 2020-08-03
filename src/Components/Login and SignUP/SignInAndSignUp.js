import React from 'react';

import Login from './Login';
import SignUp from './SignUp';

import './css/SigninAndSignUp.css';

const SignInAndSignUp = () => (
    <div className='sign-in-and-sign-up'>
        <Login />
        <SignUp />
    </div>
)

export default SignInAndSignUp;
