import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

import { KEYS } from '../../constants/localStorage';
import { LOGIN_USER } from '../../constants/user';
import useLocalStorage from '../../hooks/useLocalStorage';

import Loader from '../helper/Loader';
import LoginAlt from './LoginAlt';
import LoginHeader from './LoginHeader';

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [ password, setPassword ] = useState(LOGIN_USER.password);
  const [ email, setEmail ] = useState(LOGIN_USER.email);
  const [ loading, setLoading ] = useState(false);
  
  const setLogin = useCallback(() => dispatch({ type: 'SET_LOGIN' }), [dispatch]);

  const [ , setLoginLocal ] = useLocalStorage(KEYS.LOGIN);
  const [ , setEmailLocal ] = useLocalStorage(KEYS.EMAIL);

  const formTitle = 'Sign in';
  const formSubTitle = 'Stay updated on your professional world';

  const loginSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const reqBody = {
      email,
      password
    }
  
    // set Login and User in LocalStorage
    setLoginLocal(true);
    setEmailLocal(reqBody.email);

    // set login and user in redux-store
    setLogin();

    setTimeout(() => {
      navigate('/feed');
    }, 2000)

  }

  return (
    <section className='login-section'>
      <div className="login-container">
          <LoginHeader formTitle={ formTitle } formSubTitle={ formSubTitle }/>
          <form className='login-form' onSubmit={(e) => loginSubmit(e)}>
            <div className='input-container'>
              <input 
                type='email' 
                className='email' 
                id="email" 
                placeholder='Email or Phone'
                value={email}
                onChange={ (e) => setEmail(e.target.value) }
                required 
              />
            </div>

            <div className='input-container'>
              <input 
                type='password' 
                className='password' 
                id="password" 
                placeholder='Password' 
                value={password}
                onChange={ (e) => setPassword(e.target.value) }
                required
              />
            </div>

            <NavLink
                to={`/home`}
                key={'home'}
                className={'forgot-password'}
            > 
                <span>Forgot Password</span>
            </NavLink>
            <button type='submit' className={loading ? 'disabled' : ''}>
              Sign in
              { loading ? <Loader simple={true} /> : null }
            </button>
          </form>
          <LoginAlt loading={loading} />
      </div>
    </section>
  )
}

export default LoginForm;