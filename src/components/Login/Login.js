import React from 'react';
import LoginForm from './LoginForm';
import LoginNav from './LoginNav';

import JoinNow from './JoinNow';
import LoginCopyright from '../Footer/LoginCopyright';

import './Login.scss';

function Login() {
  return (
    <main className='login-main'>
        <LoginNav />
        <LoginForm />
        {/* <JoinNow /> */}
        <LoginCopyright />
    </main>
  )
}

export default Login