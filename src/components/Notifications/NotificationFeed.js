import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getNotifications } from '../../redux/ducks/notifications';
import NotificationListItem from './NotificationListItem';
import Loader from '../helper/Loader';

import './NotificationFeed.scss';

function NotificationFeed() {
    const dispatch = useDispatch();
    const notificationsCb = useCallback(() => dispatch(getNotifications()), [dispatch]);
    const notifications = useSelector(state => state.notifications.notifications);
    
    useEffect(() => {
        notificationsCb();
    }, [notificationsCb])

    return (
        <div className='notifications'>
            <ul className='list'>
            { !notifications ? <Loader simple={true} /> : null }
            {
                notifications && notifications.map((notification, index) => {
                return (
                    <li key={index} className={`list-item ${notification.read ? 'read' : 'unread'}`}>
                        <NotificationListItem notification={notification}/>
                    </li>)
                })
            }
            </ul>
        </div>
    )
}

export default NotificationFeed;