import React, { useState } from 'react';

import { faAngleDown, faAngleUp, faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { NavLink } from 'react-router-dom';
import { NEWS_ITEMS } from '../../../constants/listItems';

import { IMAGES } from '../../../constants/images';

import './News.scss';


function News() {
  const [cropItems, setCropItems] = useState(true);
  const newsItems = NEWS_ITEMS;
  return (
    <aside className="news">
        <div className='header-container'>
          <span className='linkedin-news-header'>LinkedIn News</span>
          <img src={IMAGES.MORE_INFO} alt='More Info LinkedIn News' />
        </div>
        <div className='news-container'>
          <ul>
            {
              newsItems.slice(0, cropItems ? 5 : newsItems.length).map(news => (
                <li className='news-item' key={news.id}>
                  <NavLink to={`/news/${news.id}`}>
                    
                    <span className='bullet'><FontAwesomeIcon icon={faCircle} /></span>
                    <span>                  
                      <span className='news-header'>{news.header}</span>
                      <span className='more-info'>
                        <span>{news.time}</span>
                        <span>•</span>
                        <span>{news.readers}</span>
                      </span>
                    </span>
                  </NavLink>
                </li>
              ))
            }
          </ul>
        </div>
        <button onClick={() => setCropItems(crop => !crop)}>
            <span className='show-more'>
              Show more
            </span>
            <span>
              <FontAwesomeIcon icon={cropItems ? faAngleDown : faAngleUp} />
            </span>
        </button>
    </aside>
  )
}

export default News