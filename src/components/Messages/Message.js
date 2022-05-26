import { faAngleDown, faAngleUp, faEdit, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import './Message.scss';

function Message() {
  const ref = useRef();
  const user = useSelector(state => state.user.user);


  const handleSettingsOpen = (e) =>  {
      e.stopPropagation();
  }

  const handleNewMessageOpen = (e) =>  {
    e.stopPropagation();
  }

  const toggleMessageBox = (e) => {
    e.stopPropagation();
    
    if (ref.current.classList.contains('open')) {
        ref.current.classList.remove('open');
    } else {
        ref.current.classList.add('open');
    }
    setMessageBodyOpen(curr => !curr);
  }

  const [messageBodyOpen, setMessageBodyOpen] = useState(false);

  return (
    <aside className='message-box'>
        <div className='message-header-container' onClick={(e) => toggleMessageBox(e)}>
            <div className='header'>
                <img src={user.profileImg} alt='user profile'/>
                <span>Messaging</span>
            </div>
            <div className='options'>
                <div className='message-settings' onClick={(e) => handleSettingsOpen(e)}>
                    <FontAwesomeIcon icon={faEllipsis} />
                </div>
                <div className='new-message' onClick={(e) => handleNewMessageOpen(e)} >
                    <FontAwesomeIcon icon={faEdit} />
                </div>
                <div className='collapse' onClick={(e) => toggleMessageBox(e)}>
                    <FontAwesomeIcon icon={messageBodyOpen ? faAngleDown : faAngleUp} />
                </div>
            </div>
        </div>

        <div ref={ref} className='message-body-container'>

            Coming soon!!!
        </div>
    </aside>
  )
}

export default Message