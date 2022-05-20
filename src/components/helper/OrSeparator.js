import React from 'react';

import styled from 'styled-components';


const OrSeparatorContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content:center;
`;
const SpanOR = styled.span`
    margin: 0 0.5rem;
    font-weight:400;
    font-size: 0.8rem;
    color: rgba(0,0,0,0.6);
    position: relative;

    &::before {
        content: '';
        position: absolute;
        right: calc(100% + 0.5rem);
        width: 128px;
        height: 2px;
        background: #ccc;
        top: 52%;
    }

    &::after {
        top: 52%;
        content: '';
        position: absolute;
        left: calc(0.5rem + 100%);
        width: 128px;
        height: 2px;
        background-color: #ccc;
        vertical-align: top;
    }
`

function OrSeparator() {
  return (
    <OrSeparatorContainer>
        <SpanOR className='or'>or</SpanOR>
    </OrSeparatorContainer>
  )
}

export default OrSeparator