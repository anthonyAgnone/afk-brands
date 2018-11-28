import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './mainSectionContent/LandingPage';
import AboutUs from './mainSectionContent/AboutUs';
import styled from 'styled-components';
import { withAnimation } from './contexts/Animation';

const MainWrap = styled.div`
  width: 67.6777vw;
  height: 100vh;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 2;
  background-color: #52244a;
`;

class Main extends Component {
  componentDidMount() {}
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
        </Switch>
      </MainWrap>
    );
  }
}

export default withAnimation(Main);
