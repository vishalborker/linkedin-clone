import React from 'react';
import MyNetwork from '../components/MyNetwork/MyNetwork';

function MyNetworkRouter() {
  return (
    <>
        <Routes>
            <Route path="/" element={<MyNetwork />}></Route>
        </Routes>
    </>
  )
}

export default MyNetworkRouter