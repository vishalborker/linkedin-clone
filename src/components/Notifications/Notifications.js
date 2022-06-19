import React from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import useUser from '../../hooks/useUser';
import NotificationRouter from '../../Router/NotificationRouter';
import { ErrorBoundary } from '../helper/ErrorBoundary';
import Loader from '../helper/Loader';
import AdCampaign from '../Main/Ads/AdCampaign';
import MainLayout from '../MainLayout';
import Message from '../Messages/Message';

import './Notifications.scss';
import NotificationSettings from './NotificationSettings';

// NotificationContainer
function Notifications() {
  useDocumentTitle('LinkedIN | Notifications');
  const [ userData ] = useUser();

  if (!userData) return null;

  return (
    <ErrorBoundary>
    {
      !userData ? <Loader /> :
      <>
        <MainLayout>          
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
        </MainLayout>
      </>
    }
  </ErrorBoundary>
  )
}

export default Notifications;