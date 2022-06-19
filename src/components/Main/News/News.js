import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { faAngleDown, faAngleUp, faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IMAGES } from '../../../constants/images';
import { GET_NEWS } from '../../../redux/ducks/news';

import './News.scss';
import Loader from '../../helper/Loader';

function News() {
  const dispatch = useDispatch();
  const [ cropItems, setCropItems ] = useState(true);

  const getNews = useCallback(() => dispatch({type: GET_NEWS}), [dispatch]);

  let newsItems = [];
  newsItems = useSelector(state => state.news.news);

  useEffect(() => {
    getNews();
  }, [getNews]);

  return (
    <aside className="news">
        <div className='header-container'>
          <span className='linkedin-news-header'>LinkedIn News</span>
          <img src={IMAGES.MORE_INFO} alt='More Info LinkedIn News' />
        </div>
        <div className='news-container'>
          <ul>
            { !newsItems ? <Loader simple={true} /> : null }
            {

              newsItems &&
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