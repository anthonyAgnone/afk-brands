import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  & h1 {
    margin-bottom: 1em;
    font-size: 3.5em;
    letter-spacing: 0.1em;
    font-weight: 400;
  }
  & h3 {
    padding-left: 1em;
    max-width: 75%;
  }
`;
export default function LandingPage() {
  return (
    <Wrapper>
      <h1>
        <span id="header1">SLOGAN </span>
        <span id="header2">GOES HERE</span>
      </h1>
      <h3>
        DESCRIPTION OF WHAT THE SITE DOES HERE WHERE THERE'S A DECENT AMOUNT OF
        INFORMATION TO GIVE AN IDEA OF WHAT THE SITE DOES THIS IS FILLER
      </h3>
    </Wrapper>
  );
}
