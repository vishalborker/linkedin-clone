import React from 'react';
import { Route, Routes } from 'react-router-dom';

import ComingSoon from '../components/helper/ComingSoon';
import NotificationFeed from '../components/Notifications/NotificationFeed';

function NotificationRouter() {
  return (
    <Routes>
        <Route path="/" element={<NotificationFeed />}></Route>
        <Route path="*" element= {<div><ComingSoon /></div>}></Route>
    </Routes>
  )
}

export default NotificationRouter;