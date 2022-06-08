import React from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import useUser from '../../hooks/useUser';
import NotificationRouter from '../../Router/NotificationRouter';
import { ErrorBoundary } from '../helper/ErrorBoundary';
import Loader from '../helper/Loader';
import AdCampaign from '../Main/Ads/AdCampaign';
import Message from '../Messages/Message';
import Navbar from '../Navbar/Navbar';

import './Notifications.scss';
import NotificationSettings from './NotificationSettings';


// NotificationContainer
function Notifications() {
  useDocumentTitle('LinkedIN | Notifications');
  const [ userData ] = useUser();
  console.log({userData})

  return (
    <ErrorBoundary>
    {
      !userData ? <Loader /> :
      <>
        <Navbar />
        <main className='feed-page'>
          <section className='left-pane'>
            <NotificationSettings />
          </section>
          <section className='middle-pane'>
            <NotificationRouter />
          </section>
          <section className='right-pane'>
            <AdCampaign user={userData}/>
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

export default Notifications;