import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { notificationTypes } from '../../constants/notifications';
import LiveNotification from './LiveNotification';

import './NotificationListItem.scss';
import SharedPostNotification from './SharedPostNotification';
import ViewedProfileNotification from './ViewedProfileNotification';


function NotificationListItem({ notification }) {
  return (
    <>  
        <div className='profile-section'>
            <img src={notification.image} alt={'notification author'}/>
        </div>
        <div className='main-content'>
            {
                notification.type === notificationTypes.VIEWED && <ViewedProfileNotification author={notification.author}/>
            }
            {
                notification.type === notificationTypes.RESHARED && <SharedPostNotification author={notification.author}/>
            }
            {
                notification.type === notificationTypes.LIVE && <LiveNotification author={notification.author} post={notification.post}/>
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