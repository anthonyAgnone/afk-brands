import React, { Component } from 'react';
import { withAnimation } from '../contexts/Animation';
import styled from 'styled-components';

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
    this.props.animateLoadingPage();
  }
  render() {
    return <Wrapper>{this.props.children}</Wrapper>;
  }
}

export default withAnimation(AnimationWrapper);
