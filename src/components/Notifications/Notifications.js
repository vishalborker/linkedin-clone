import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import { getNotifications } from '../../redux/ducks/notifications';
import NotificationListItem from './NotificationListItem';

import './Notifications.scss';

function Notifications() {
  useDocumentTitle('LinkedIN | Notifications');
  const dispatch = useDispatch();
  const notificationsCb = useCallback(() => dispatch(getNotifications()), [dispatch]);

  const notifications = useSelector(state => state.notifications.notifications);

  console.log(notifications);

  useEffect(() => {
    notificationsCb();
  }, [notificationsCb])
  return (
    <section className='notifications'>
      <ul className='list'>
        {
          notifications && notifications.map(notification => {
            return (
              <li className={`list-item ${notification.read ? 'read' : 'unread'}`}>
                <NotificationListItem notification={notification}/>
              </li>)
          })
        }
      </ul>

    </section>
  )
}

export default Notifications;