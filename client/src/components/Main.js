import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

import LandingPage from './mainSectionContent/LandingPage'
import AboutUs from './mainSectionContent/AboutUs'
import Sponsors from './mainSectionContent/Sponsors'
import Talent from './mainSectionContent/Talent'

import styled from 'styled-components'
import { withAnimation } from './contexts/Animation'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const MainWrap = styled.div`
  width: 67.6777vw;
  height: 100vh;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 2;
  background-color: #352245;
  overflow: hidden;
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
`

class Main extends Component {
  render() {
    return (
      <MainWrap ref={this.props.main}>
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
              <Route path="/about">{({ match }) => <AboutUs props={match !== null} />}</Route>
              <Route path="/sponsors">{({ match }) => <Sponsors props={match !== null} />}</Route>
              <Route path="/talent">{({ match }) => <Talent props={match !== null} />}</Route>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </MainWrap>
    )
  }
}

export default withRouter(withAnimation(Main))
