import React from 'react';
import { ENGAGEMENTS } from '../../constants/images';

function Engagements({ data }) {
  const { likes, support, love, celebrate, insightful, curious, laugh } = data;
  const totalInteractions = likes + support + love + celebrate + insightful + curious + laugh;
  return (
    <div className='like-support-love'>
        {
            totalInteractions === 0 ? <span>Be the first one to Like</span> :
            <>        
                <span>
                    { likes > 0 ? <img src={ENGAGEMENTS.Like} alt='Like' /> : null }
                    { love > 0 ? <img src={ENGAGEMENTS.Love} alt='Love' /> : null }
                    { laugh > 0 ? <img src={ENGAGEMENTS.Laugh} alt='Laugh' /> : null }
                    { support > 0 ? <img src={ENGAGEMENTS.Support} alt='Support' /> : null }
                    { celebrate > 0 ? <img src={ENGAGEMENTS.Clap} alt='Celebrate' /> : null }
                    { insightful > 0 ? <img src={ENGAGEMENTS.Insightful} alt='Insightful' /> : null }
                    { curious > 0 ? <img src={ENGAGEMENTS.Curious} alt='Curious' /> : null }
                </span>
                <span>{totalInteractions} reacted to this</span>
            </>
        }
    </div>
  )
}

export default Engagements