import React from 'react';

// components
import Navbar from '../Navbar/Navbar';
import Copyright from '../Footer/Copyright';
import ProfileInfo from './Profile/ProfileInfo';
import Recent from './Recent/Recent';
import News from './News/News';
import AdCampaign from './Ads/AdCampaign';

//Router
import HomeRouter from '../../Router/HomeRouter';

//Helper
import { ErrorBoundary } from '../helper/ErrorBoundary';

import './Home.scss';

import useUser from '../../hooks/useUser';
import Loader from '../helper/Loader';
import Message from '../Messages/Message';

function Home() {
  // setUser happens in Home
  const [ userData ] = useUser();

  return (
    <ErrorBoundary>
      {
        !userData ? <Loader /> :
        <>
          <Navbar user={userData}/>
          <main className='feed-page'>
            <section className='left-pane'>
                <ProfileInfo user={userData}/>
                <Recent />
            </section>
            <section className='middle-pane'>
                <HomeRouter />
            </section>
            <section className='right-pane'>
                <News />
                <AdCampaign user={userData}/>
                <Copyright />
            </section>
            <section className='messages'>
              <Message />
            </section>
          </main>
        </>
      }
    </ErrorBoundary>
  )
}

export default Home;