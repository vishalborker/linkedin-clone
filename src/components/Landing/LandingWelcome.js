import React from 'react'
import { LANDING_PAGE_IMAGES } from '../../constants/images'
import LandingLogin from './LandingLogin'

function LandingWelcome() {
  return (
    <section className='welcome-section'>
        <LandingLogin />
        <img src={LANDING_PAGE_IMAGES.LANDING_PAGE_PERSON} alt='person typing' />
    </section>
  )
}

export default LandingWelcome