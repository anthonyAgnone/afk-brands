import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavWrap = styled.div`
  width: 50vw;
  height: 85vh;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 4em;
  color: #fff;
  background-color: #352245;
  z-index: 3;
  & h1 {
    margin-bottom: 1em;
    font-size: 3.5em;
    letter-spacing: .1em;
    font-weight: 400;
  }
  & h3 {
    margin-bottom: 6em;
    padding-left: 1em;
    max-width: 75%;
    margin
  }
  & nav {margin-bottom: 4em;
    width: 67.66667%;
    display: flex;
    justify-content: space-around;
    & a {
      color: #fff;
      font-weight: 700;
      font-size: 1.2em;
    }
  }
`;

export default () => {
  return (
    <NavWrap>
      <h1>SLOGAN GOES HERE</h1>
      <h3>
        DESCRIPTION OF WHAT THE SITE DOES HERE WHERE THERE'S A DECENT AMOUNT OF
        INFORMATION TO GIVE AN IDEA OF WHAT THE SITE DOES THIS IS FILLER
      </h3>
      <nav>
        <Link to="/about">ABOUT US</Link>
        <Link to="/contact">CONTACT US</Link>
        <Link to="/streams">STREAMS</Link>
        <Link to="/affiliates">AFFILIATES</Link>
      </nav>
    </NavWrap>
  );
};
