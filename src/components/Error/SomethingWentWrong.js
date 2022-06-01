import React from 'react';

import styled from 'styled-components';


const Header1 = styled.h1`
    font-size: 1.5rem;
    text-align: center;
`;

function SomethingWentWrong() {
  return (
      <>
        <Header1>Oops!! Looks Like Something went wrong. </Header1>
        <Header1>We are working on it..!! Please try again later</Header1>
      </>
  )
}

export default SomethingWentWrong