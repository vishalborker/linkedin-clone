import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Feed from '../components/Feed/Feed';
import ComingSoon from '../components/helper/ComingSoon';

function HomeRouter() {
  return (
    <Routes>
        <Route path="/" element={<Navigate to='/feed' replace/>}></Route>
        <Route path="/feed" element={<Feed />}></Route>
        <Route path="/network" element= {<ComingSoon />}></Route>
        <Route path="/jobs" element= {<ComingSoon />}></Route>
        <Route path="/messages" element= {<ComingSoon />}></Route>
        <Route path="/work" element= {<ComingSoon />}></Route>
        <Route path="/profile/:id" element= {<ComingSoon />}></Route>
        <Route path="*" element= {<div><ComingSoon /></div>}></Route>
    </Routes>
  )
}

export default HomeRouter;