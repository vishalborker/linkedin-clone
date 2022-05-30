import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { LANDING_PAGE_IMAGES } from '../../constants/images'
import { LEARN_TOPICS } from '../../constants/landing'

function LearnTheSkills() {
  const [ show, setShow ] = useState(false);


  return (
    <div className='learn-skills'>
      <img src={LANDING_PAGE_IMAGES.LEARN_SKILLS} alt='Learn the skills' />
      <h1>Learn the skills you need to succeed</h1>
      <button className='choose-topic' onClick={() => setShow(show => !show)}>
        <span>Choose a topic to learn about</span>
        <FontAwesomeIcon icon={show ? faAngleUp : faAngleDown} />

        {
          show ? <ul className='topics-dropdown'>
          {
            LEARN_TOPICS.map((item, index) => {
              return (
                <li key={index}>
                  <NavLink to={`courses/${item.name}`} key={item.name}>
                    <span>{item.name}</span>
                    <span>{item.courses}</span>
                  </NavLink>
                </li>
              )
            })
          }
        </ul> : null
        }

      </button>
    </div>
  )
}

export default LearnTheSkills