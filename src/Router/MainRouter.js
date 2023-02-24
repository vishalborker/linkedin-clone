import React, { Suspense } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

import Login from '../components/Login/Login';

import { NoLoginRequired } from '../components/helper/NoLoginRequired';
import { ProtectedRoute } from '../components/helper/ProtectedRoute';
import Loader from '../components/helper/Loader';
import Landing from '../components/Landing/Landing';

const HomeComponent = React.lazy(() => import('../components/Main/Home'));
const NotificationsComponent = React.lazy(() => import('../components/Notifications/Notifications'));

const MyNetworkComponent = React.lazy(() => import('../components/MyNetwork/MyNetwork'));

function MainRouter() {
  return (
    <BrowserRouter>
        <Routes>
            {/* Landing Page if not logged in */}
            <Route path="/" element = {
                <NoLoginRequired>
                    {/* if already logged in will be redirected to /feed route inside <Home /> */}
                    <Landing />
                </NoLoginRequired>
            }></Route>

            <Route path="/notifications/*" element={
                <ProtectedRoute>
                    <Suspense fallback={<Loader simple={true} />}>
                        <NotificationsComponent />
                    </Suspense>
                </ProtectedRoute>
            }>
            </Route>

            <Route path="/mynetwork/*" element= {
                <ProtectedRoute>
                    <Suspense fallback={<Loader simple={true} />}>
                        <MyNetworkComponent />
                    </Suspense>
                </ProtectedRoute>
            }>
            </Route>


            {/* If Logged In Home Component Routes will be loaded */}
            <Route path="/*" element={
                <ProtectedRoute>
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