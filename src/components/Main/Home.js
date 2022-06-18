import React from 'react';

// components
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
import MainLayout from '../MainLayout';

function Home() {
  // setUser happens in Home
  const [ userData ] = useUser();

  return (
    <ErrorBoundary>
      {
        !userData ? <Loader /> :
        <>
          <MainLayout>
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
          </MainLayout>
        </>
      }
    </ErrorBoundary>
  )
}

export default Home;