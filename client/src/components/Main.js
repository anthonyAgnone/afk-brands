import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './mainSectionContent/LandingPage';
import AboutUs from './mainSectionContent/AboutUs';
import Sponsors from './mainSectionContent/Sponsors';
import styled from 'styled-components';
import { withAnimation } from './contexts/Animation';

const MainWrap = styled.div`
  width: 67.6777vw;
  height: 100vh;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 2;
  background-color: rgba(234, 128, 252, 1);
`;

class Main extends Component {
  render() {
    return (
      <MainWrap ref={this.props.main}>
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
      </MainWrap>
    );
  }
}

export default withAnimation(Main);
