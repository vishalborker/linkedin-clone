import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

import Login from '../components/Login/Login';
import Home from '../components/Main/Home';

import { NoLoginRequired } from '../components/helper/NoLoginRequired';
import { ProtectedRoute } from '../components/helper/ProtectedRoute';

function MainRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/*" element={
                <ProtectedRoute>
                    {/* If Logged In Home Component Routes will be loaded */}
                    <Home />
                </ProtectedRoute>
            }>
            </Route>
            
            <Route path="/login" element = {
                <NoLoginRequired>
                    {/* if already logged in will be redirected to /feed route inside <Home /> */}
                    <Login />
                </NoLoginRequired>
            }></Route>

            <Route path="*" element = {
                <main className='main'>
                   Oops!!! Seems like you are lost
                   <NavLink to={'/feed'} key={'Go Home'} />
                </main>
            }></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default MainRouter