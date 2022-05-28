import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'

function FindTheJob() {
  const jobTypes = ['Engineering', 'Business Development', 'Finance', 
  'Administrative Assistant', 'Retail Associative',
  'Customer Service', 'Operations', 'Information Technology', 'Marketing',
  'Human Resources', 'Healthcare Service', 'Sales', 'Program and Project Management',
  'Accounting', 'Arts and Design', 'Community and Social Services', 'Consulting', 'Education',
  'Entrepreneurship', 'Legal', 'Media and Communications', 'Military and Protective Services', 
  'Product Management', 'Purchasing', 'Quality Assurance', 'Real Estate', 'Research',
  'Support', 'Administrative'
  ];

  const [ cropItems, setCropItems ] = useState(true);
  return (
    <section className='find-job'>
      <h1>Find the right job for you or internship for you</h1>

      <div className='suggested-searches'>
        <h4>Suggested Searches</h4>
        <div className='search-pills'>
          {
            jobTypes.slice(0, cropItems ? 10 : jobTypes.length).map((type, index) => {
              return <span key={index}>{type}</span>
            })
          }
        </div>

        <button onClick={() => setCropItems(crop => !crop)}>
            <span className='show-more'>
              Show { cropItems ? 'More' : 'Less' }
            </span>
            <span>
              <FontAwesomeIcon icon={cropItems ? faAngleDown : faAngleUp} />
            </span>
        </button>
      </div>
    </section>
  )
}

export default FindTheJob