import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { withAnimation } from './contexts/Animation';
import LandingPage from './leftSectionContent/LandingPage';
import AboutUs from './leftSectionContent/AboutUs';

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
        </Switch>
      </LeftWrap>
    );
  }
}

export default withAnimation(LeftSection);
