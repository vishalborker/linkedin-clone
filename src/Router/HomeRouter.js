import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Notifications from '../components/Notifications/Notifications';
import Feed from '../components/Feed/Feed';

function HomeRouter() {
  return (
    <Routes>
        <Route path="/" element={<Navigate to='/feed' replace/>}></Route>
        <Route path="/feed" element={<Feed />}></Route>
        <Route path="/notifications" element= {<Notifications />}></Route>
    </Routes>
  )
}

export default HomeRouter