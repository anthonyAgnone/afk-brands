import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding-left: 10em;
  & h1 {
    font-size: 6em;
    margin-bottom: 0.5em;
    font-weight: 400;
    letter-spacing: 0.2em;
    text-transform: uppercase;
  }
  & button {
    background-color: #352245;
    color: #fff;
    border: none;
    padding: 1em 2em;
    margin-bottom: 3em;
  }
`;

export default function LandingPage() {
  return (
    <Wrapper>
      <h1>Brands</h1>
      <button>LEARN MORE</button>
      <h1>Talent</h1>
      <button>LEARN MORE</button>
    </Wrapper>
  );
}
