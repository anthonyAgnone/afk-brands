import React from 'react';
import styled from 'styled-components';

const MainWrap = styled.div`
  width: 67.6777vw;
  height: 100vh;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 2;
  background-color: #52244a;
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

export default () => {
  return (
    <MainWrap>
      <h1>Brands</h1>
      <button>LEARN MORE</button>
      <h1>Talent</h1>
      <button>LEARN MORE</button>
    </MainWrap>
  );
};
