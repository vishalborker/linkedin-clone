import React from 'react'
import { LANDING_PAGE_IMAGES } from '../../constants/images'

function ConnectWithPeople() {
  return (
    <div className='connect-people'>
      <img src={LANDING_PAGE_IMAGES.CONNECT_PEOPLE} alt='Connect with people' />
      <h1>Connect with people who can help</h1>
      <button className='find-people'>Find people you know</button>
    </div>
  )
}

export default ConnectWithPeople