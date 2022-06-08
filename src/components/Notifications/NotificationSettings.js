import React from 'react';

import './NotificationSettings.scss';

function NotificationSettings() {
  return (
    <aside className='notification-settings'>
        <div className='new-notifications'>
          <h4>Notifications</h4>
          <div>You have new notifications</div>
        </div>
        <div className='improve'>
          <div>Improve your notifications</div>
          <button>View Settings</button>
        </div>
    </aside> 
  )
}

export default NotificationSettings;