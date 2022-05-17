import React from 'react'
import Navbar from '../Navbar/Navbar';
import HomeRouter from '../../Router/HomeRouter';

import './Home.scss';
import Copyright from '../Footer/Copyright';
import ProfileInfo from './Profile/ProfileInfo';
import Recent from './Recent/Recent';
import News from './News/News';
import AdCampaign from './Ads/AdCampaign';
import { ErrorBoundary } from '../helper/ErrorBoundary';

function Home() {
  return (
    <ErrorBoundary>
      <Navbar />
      <main className='feed-page'>
        <section className='left-pane'>
            <ProfileInfo />
            <Recent />
        </section>
        <section className='middle-pane'>
            <HomeRouter />
        </section>
        <section className='right-pane'>
            <News />
            <AdCampaign />
            <Copyright />
        </section>
      </main>
    </ErrorBoundary>
  )
}

export default Home