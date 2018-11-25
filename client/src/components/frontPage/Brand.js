import React from 'react';
import styled from 'styled-components';

const BrandWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0.5em 1.5em;
  & h1 {
    font-size: 3em;
    letter-spacing: 0.05em;
  }
`;

export default () => {
  return (
    <BrandWrap>
      <h1>AFK BRANDS</h1>
      <h2>ARTISTS. CONTENT CREATORS. STREAMERS.</h2>
    </BrandWrap>
  );
};
