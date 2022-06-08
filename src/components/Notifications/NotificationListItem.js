import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import './NotificationListItem.scss';
import ViewedProfileNotification from './ViewedProfileNotification';


function NotificationListItem({ notification }) {
  return (
    <>  
        <div className='profile-section'>
            <img src={notification.image} alt={'notification author'}/>
        </div>
        <div className='main-content'>
            {
                notification.type === 'viewed' && <ViewedProfileNotification author={notification.author}/>
            }
        </div>
        <div className='time-and-options'>
            <span>{notification.time}</span>
            <span><FontAwesomeIcon icon={faEllipsis } /></span>
        </div>
    </>
  )
}

export default NotificationListItem