import React from 'react'
import useDocumentTitle from '../../hooks/useDocumentTitle';
import useUser from '../../hooks/useUser';
import { ErrorBoundary } from '../helper/ErrorBoundary';
import Loader from '../helper/Loader';
import AdCampaign from '../Main/Ads/AdCampaign';
import MainLayout from '../MainLayout';

function MyNetwork() {
  useDocumentTitle('LinkedIN | MyNetwork');
  const [ userData ] = useUser();

  return (
    <ErrorBoundary>
        {
            !userData ? <Loader /> : 
            <>
                <MainLayout>
                    <main className='feed-page'>
                        <section className='left-pane'>
                            MyNetworkNotifications
                            <AdCampaign user={userData}/>
                        </section>

                        <section className='middle-pane'>
                            MyNetwork people
                        </section>
                    </main>
                </MainLayout>
            </>
        }
    </ErrorBoundary>
  )
}

export default MyNetwork;