import { faAdd, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { IMAGES } from '../../../constants/images';
import { FOLLOWED_LIST_ITEMS, RECENT_LIST_ITEMS } from '../../../constants/listItems';

import './Recent.scss';

function Recent() {
  const [recentOpen, setRecentOpen] = useState(true);
  const [groupOpen, setGroupOpen] = useState(true);
  const [followedOpen, setFollowedOpen] = useState(true);



  const listItems = RECENT_LIST_ITEMS;
  const followingItems = FOLLOWED_LIST_ITEMS;

  return (
    <aside className="recent-aside-container">
      <div className='recent-container'>
        <div className='heading'>
          <span>Recent</span>
          <span className='collapse' onClick={() => setRecentOpen(curr => !curr)}>
            <FontAwesomeIcon icon={recentOpen ? faAngleDown : faAngleUp } />
          </span>
        </div>
        <div className={`listing ${recentOpen ? 'open' : 'close'}`}>
            <ul>
              {
                listItems.map(list => {
                  return <li key={list.key}>
                    <img src={IMAGES.PEOPLE} alt='People group' />
                    <span>{list.value}</span>
                  </li>
                })
              }
            </ul>
        </div>

        <div className='heading'>
          <span>Groups</span>
          <span className='collapse' onClick={() => setGroupOpen(curr => !curr)}>
            <FontAwesomeIcon icon={groupOpen ? faAngleDown : faAngleUp } />
          </span>
        </div>
        <div className={`listing ${groupOpen ? 'open' : 'close'}`}>
            <ul>
              {
                listItems.map(list => {
                  return <li key={list.key}>
                    <img src={IMAGES.PEOPLE} alt='People group' />
                    <span>{list.value}</span>
                  </li>
                })
              }
            </ul>
        </div>


        <div className='heading'>
          <span>Events</span>
          <span className='collapse'>
            <FontAwesomeIcon icon={ faAdd } />
          </span>
        </div>


        <div className='heading'>
          <span>Followed Hashtags</span>
          <span className='collapse' onClick={() => setFollowedOpen(curr => !curr)}>
            <FontAwesomeIcon icon={followedOpen ? faAngleDown : faAngleUp } />
          </span>
        </div>
        <div className={`listing ${followedOpen ? 'open' : 'close'}`}>
            <ul>
              {
                followingItems.map(list => {
                  return <li key={list.key}>
                    <img src={IMAGES.HASHTAG} alt='FOllowing Hashtag' />
                    <span>{list.value}</span>
                  </li>
                })
              }
            </ul>
        </div>

        <div className='discover-more'>
          <NavLink to={'/discover-more'} key={'Discover More'}>Discover More</NavLink>
        </div>
      </div>
    </aside>
  )
}

export default Recent;