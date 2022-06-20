import React from 'react';
import { faBriefcase, faCertificate, faChartSimple, faEllipsis, 
  faFileLines, faImage, faVideo 
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function UploadOptions() {
  return (
    <div className='upload-actions'>
        <button className='action-button image' data-tooltip='Add a photo'>
            <FontAwesomeIcon icon={faImage} />
        </button>

        <button className='video action-button' data-tooltip='Add a video'>
            <FontAwesomeIcon icon={faVideo} />
        </button>

        <button className='document action-button' data-tooltip='Add a document'>
            <FontAwesomeIcon icon={faFileLines} />
        </button>

        <button className='hiring action-button' data-tooltip={`Share that you're hiring`}>
            <FontAwesomeIcon icon={faBriefcase} />
        </button>

        <button className='celebrate action-button' data-tooltip='Celebrate a occassion'>
            <FontAwesomeIcon icon={faCertificate} />
        </button>

        <button className='create-poll action-button' data-tooltip='Create a poll'>
            <FontAwesomeIcon icon={faChartSimple} />
        </button>

        <button className='add-this action-button' data-tooltip='Add to your post'>
            <FontAwesomeIcon icon={faEllipsis} />
        </button>
    </div>
  )
}

export default UploadOptions;