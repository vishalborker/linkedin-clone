import React, { Suspense } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

import Login from '../components/Login/Login';

import { NoLoginRequired } from '../components/helper/NoLoginRequired';
import { ProtectedRoute } from '../components/helper/ProtectedRoute';
import Loader from '../components/helper/Loader';
// import Notifications from '../components/Notifications/Notifications';


const HomeComponent = React.lazy(() => import('../components/Main/Home'));

function MainRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/*" element={
                <ProtectedRoute>
                    {/* If Logged In Home Component Routes will be loaded */}
                    <Suspense fallback={<Loader simple={true} />}>
                        <HomeComponent /> 
                    </Suspense>
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