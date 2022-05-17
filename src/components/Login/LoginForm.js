import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

import { KEYS } from '../../constants/localStorage';

import useLocalStorage from '../../hooks/useLocalStorage';
import Loader from '../helper/Loader';
import LoginHeader from './LoginHeader';

function LoginForm() {
  const formTitle = 'Sign in';
  const formSubTitle = 'Stay updated on your professional world';

  const [ password, setPassword ] = useState('v123');
  const [ email, setEmail ] = useState('v123@gmail.com');

  const navigate = useNavigate();
  
  const [ loginLocal, setLoginLocal ] = useLocalStorage(KEYS.LOGIN);
  const [ userLocal, setUserLocal ] = useLocalStorage(KEYS.USER);
  const [ loading, setLoading ] = useState(false);

  const dispatch = useDispatch();
  const setLogin = useCallback(() => dispatch({ type: 'setLogin' }), [dispatch]);
  const setUser = useCallback((data) => dispatch({ type: 'setUser', payload: data }), [dispatch]);

  const loginSubmit = (e) => {
    
    e.preventDefault();
    setLoading(true);

    const reqBody = {
      email,
      password
    }
  
    // set Login and User in LocalStorage
    setLoginLocal(true);
    setUserLocal(reqBody);

    // set login and user in redux-store
    setLogin();
    setUser(reqBody);

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
              { loading ? <Loader /> : null }
            </button>
          </form>
      </div>
    </section>
  )
}

export default LoginForm