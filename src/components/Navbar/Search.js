import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import './Search.scss';

function Search() {
  return (
    <div className='search-container'>
        <div className="search-bar">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <input 
            type='text' 
            placeholder='Search...'
        />
    </div>
  )
}

export default Search