import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Box from './leftSectionContent/Box';

import { withAnimation } from './contexts/Animation';
import { withRouter } from 'react-router-dom';

import LandingPage from './leftSectionContent/LandingPage';
import AboutUs from './leftSectionContent/AboutUs';
import Sponsors from './leftSectionContent/Sponsors';
import Talent from './leftSectionContent/Talent';

import styled from 'styled-components';

const LeftWrap = styled.div`
  width: 50vw;
  height: 85vh;
  position: absolute;
  bottom: 0;
  left: 0;
  padding-left: 4em;
  padding-top: 10%;
  color: #fff;
  background-color: #352245;
  z-index: 3;
  & button {
    transition: all 0.3s ease;
    background: transparent;
    color: #fff;
    position: absolute;
    top: 1%;
    right: 1%;
    text-transform: capitalize;
    font-weight: bold;
    font-size: 2em;
    border: none;
    opacity: 0;
    cursor: pointer;
    transition: all 0.3s easeInOut;
  }
  & button:hover {
    color: #ea80fc;
    font-size: 2.1em;
  }
  & .fade-enter {
    opacity: 0;
  }
  & .fade-enter-active {
    opacity: 1;
    transition: all 600ms ease-out;
  }
  & .fade-exit {
    opacity: 1;
  }
  & .fade-exit-active {
    opacity: 0;
    transition: all 600ms ease-out;
  }
`;

class LeftSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0
    };
  }

  handleMouseOut = () => {
    this.setState({
      x: 0,
      y: 0
    });
  };

  handleMouseMove = e => {
    const height = this.props.leftSection.current.clientHeight;
    const width = this.props.leftSection.current.clientWidth;
    let xPos = Math.floor((e.nativeEvent.offsetX / width) * 100);
    let yPos = Math.floor((e.nativeEvent.offsetY / height) * 100);
    this.setState({
      x: xPos,
      y: yPos
    });
  };

  render() {
    const bgColor = '#352245';
    return (
      <LeftWrap ref={this.props.leftSection} onMouseMove={this.handleMouseMove}>
        <Box bgColor={bgColor} classname="main" />
        <Box
          maskX={this.state.x}
          maskY={this.state.y}
          bgColor={bgColor}
          classname="clone"
        />
        <TransitionGroup component={null}>
          <CSSTransition
            in={true}
            appear={false}
            key={this.props.location.key}
            classNames="fade"
            timeout={{ enter: 600, exit: 600 }}
          >
            <Switch>
              <Route path="/" exact>
                {({ match }) => <LandingPage props={match !== null} />}
              </Route>
              <Route path="/about">
                {({ match }) => <AboutUs props={match !== null} />}
              </Route>
              <Route path="/sponsors">
                {({ match }) => <Sponsors props={match !== null} />}
              </Route>
              <Route path="/talent">
                {({ match }) => <Talent props={match !== null} />}
              </Route>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <button onClick={() => this.props.showMenu()}>Menu</button>
      </LeftWrap>
    );
  }
}

export default withRouter(withAnimation(LeftSection));
