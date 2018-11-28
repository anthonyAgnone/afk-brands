import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { withAnimation } from './contexts/Animation';

const NavWrap = styled.div`
  position: absolute;
  left: 3em;
  top: 78%;
  transform: translate(0, -50%);
  width: 35.66667%;
  z-index: 20;
  height: 15vh;
  overflow: hidden;
  & nav {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    & a {
      color: #fff;
      font-weight: 700;
      font-size: 1.2em;
      transition: color 0.5s ease;
    }
  }
  & .reorder {
    flex-direction: column;
    align-items: center;
    & a {
      color: #352245;
    }
  }
`;

class Navigation extends Component {
  componentDidMount() {}
  render() {
    return (
      <NavWrap ref={this.props.nav}>
        <nav>
          <Link to="/about">ABOUT US</Link>
          <Link to="/contact">CONTACT US</Link>
          <Link to="/streams">STREAMS</Link>
          <Link to="/affiliates">AFFILIATES</Link>
        </nav>
      </NavWrap>
    );
  }
}

export default withAnimation(Navigation);
