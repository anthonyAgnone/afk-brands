import React, { Component } from 'react';
import styled from 'styled-components';
import { withAnimation } from './contexts/Animation';
import { withRouter } from 'react-router-dom';

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
    & button {
      color: #fff;
      font-weight: 700;
      font-size: 1.2em;
      transition: color 0.5s ease;
      background-color: transparent;
      border: none;
      height: 1.2em;
      cursor: pointer;
      transition: all 0.6s ease;
    }
    & button:hover {
      letter-spacing: 0.2em;
    }
  }
  & .reorder {
    flex-direction: column;
    align-items: center;
    & button {
      color: #352245;
    }
  }
`;

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleAnimation = this.handleAnimation.bind(this);
  }

  handleAnimation(path) {
    if (this.props.history.location.pathname === '/') {
      this.props.animateMainOut();
      this.props.animateLeftOut();
      this.props.animateNavOut();
      setTimeout(() => this.props.history.push({ pathname: `/${path}` }), 1000);
    } else {
      this.props.showMenu();
      setTimeout(() => {
        this.props.history.push({ pathname: `/${path}` });
      }, 300);
    }
  }

  render() {
    return (
      <NavWrap ref={this.props.nav}>
        <nav>
          <button onClick={() => this.handleAnimation('about')}>
            ABOUT US
          </button>
          <button onClick={() => this.handleAnimation('contact')}>
            SERVICES
          </button>
          <button onClick={() => this.handleAnimation('talent')}>TALENT</button>
          <button onClick={() => this.handleAnimation('sponsors')}>
            SPONSORS
          </button>
        </nav>
      </NavWrap>
    );
  }
}

export default withRouter(withAnimation(Navigation));
