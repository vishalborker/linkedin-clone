import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import useLocalStorage from '../../hooks/useLocalStorage';


import { KEYS } from '../../constants/localStorage';

import './ProfilePopUp.scss';
import useResetStore from '../helper/useResetStore';

function ProfilePopUp({visitedLink}) {
  const user = useSelector(state => state.user.user);
  const navigate = useNavigate();

  const [ , setLoginLocal ] = useLocalStorage(KEYS.LOGIN);
  const [ , setEmailLocal ] = useLocalStorage(KEYS.EMAIL);
  const [ , setUserLocal ] = useLocalStorage(KEYS.USER);

  const [ resetStore ] = useResetStore();

  const signOut = () => {
    setLoginLocal(false);
    setEmailLocal(null);
    setUserLocal(null);

    
    setTimeout(() => {
        resetStore();
        navigate('/login');
    }, 500);
  }
  return (
    <div className='profile-dropdown'>
        <div className='container'>
            <div className='profile'>
                <NavLink to={`/profile/${user.profileLink}`} className='profile-details'>
                    <img src={user.profileImg} alt='profile'/>
                    <div className='info'>
                        <h3>{user.username}</h3>
                        <span className='subtitle'>{user.subtitle}</span>
                    </div>
                </NavLink>
                <button className='button view-profile'>View Profile</button>
            </div>

            <div className='account'>
                <h3>Account</h3>
                <ul>
                    <li onClick={() => visitedLink()}>
                        <NavLink to={'/settings'} key='settings'>
                            Settings & Privacy
                        </NavLink>
                    </li>

                    <li onClick={() => visitedLink()}>
                        <NavLink to={'/help'} key='help'>
                            Help
                        </NavLink>
                    </li>

                    <li onClick={() => visitedLink()}>
                        <NavLink to={'/language'} key='language'>
                            Language
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className='manage'>
                <h3>Manage</h3>
                <ul>
                    <li onClick={() => visitedLink()}>
                        <NavLink to={'/post-and-activity'} key='postAndActivity'>
                            Posts & Activity
                        </NavLink>
                    </li>
                    <li onClick={() => visitedLink()}>
                        <NavLink to={'/job-posting-account'} key='jobPostingAccount'>
                            Job Posting Account
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className='signout'>
                <ul>
                    <li onClick={(e) => signOut()}>
                        Sign Out
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default ProfilePopUp;