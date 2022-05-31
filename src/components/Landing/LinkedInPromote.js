import React, { useRef } from 'react';

import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { CAROUSEL_CONTENT } from '../../constants/landing';

function LinkedInPromote() {
  const containerRef = useRef();
  const currentSlide = useRef(1);
  const slideXCurrent = useRef(0);

  const slideLeft = () => {
    if (currentSlide.current > 1) {
      slideXCurrent.current = slideXCurrent.current + 100;
      containerRef.current.style.transform = `translate3d(${slideXCurrent.current}%, 0px, 0px)`;
      currentSlide.current--;
    }
  }

  const slideRight = () => {
    if (currentSlide.current < 3) {
      slideXCurrent.current = slideXCurrent.current - 100;
      containerRef.current.style.transform = `translate3d(${slideXCurrent.current}%, 0px, 0px)`;
      currentSlide.current++;
    }
  }

  return (
    <section className='linkedin-promote'>

      <div className='navigation-button'>
        <button className={`button previous ${currentSlide.current === 1 ? 'disabled': ''}`} onClick={() => slideLeft()}>
          <FontAwesomeIcon icon={faAngleLeft} />
          <span>Previous</span>
        </button>
        <button className={`button next ${currentSlide.current === 3 ? 'disabled': ''}`} onClick={() => slideRight()} disabled={currentSlide.current === 3 ? true : false}>
           <span>Next</span>
            <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>


      <ul className='carousel-container' ref={containerRef}>
        {
          CAROUSEL_CONTENT.map((item, index) => {
            return (

              <li className='carousel-holder' key={index}>
                <div className='carousel-item'>

                  <div className='carousel-text'>
                    <h1>{item.header}</h1>
                    <h4>{item.subtext}</h4>
                  </div>
                  <div className='carousel-image'>
                    <img src={item.image} alt={`carousel ${index}`} />
                  </div>
                </div>
              </li>

            )
          })
        }
      </ul>
    </section>
  )
}

export default LinkedInPromote