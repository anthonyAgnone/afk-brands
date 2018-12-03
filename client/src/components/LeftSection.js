import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { withAnimation } from './contexts/Animation';
import LandingPage from './leftSectionContent/LandingPage';
import AboutUs from './leftSectionContent/AboutUs';
import Sponsors from './leftSectionContent/Sponsors';

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
`;

class LeftSection extends Component {
  componentDidMount() {}
  render() {
    return (
      <LeftWrap ref={this.props.leftSection}>
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
        </Switch>
        <button onClick={() => this.props.showMenu()}>Menu</button>
      </LeftWrap>
    );
  }
}

export default withAnimation(LeftSection);
