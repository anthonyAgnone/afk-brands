import React, { Component } from 'react';
import { withAnimation } from '../contexts/Animation';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  color: #352245;
  overflow-x: hidden;
`;

class AnimationWrapper extends Component {
  componentDidMount() {
    if (this.props.history.location.pathname === '/')
      this.props.animateLoadingPage();
    else {
      this.props.animateMainOut();
      this.props.animateLeftOut();
      this.props.animateNavOut();
    }
  }
  render() {
    return <Wrapper>{this.props.children}</Wrapper>;
  }
}

export default withRouter(withAnimation(AnimationWrapper));
