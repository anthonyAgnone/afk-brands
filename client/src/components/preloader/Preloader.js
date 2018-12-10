import React, { Component } from 'react';
import styled from 'styled-components';
import { withAnimation } from '../contexts/Animation';
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #352245;
  z-index: 9999;
`;

class Preloader extends Component {
  componentDidMount() {
    this.props.preloadAnimation();
  }
  render() {
    return <Wrapper ref={this.props.preloader} />;
  }
}

export default withAnimation(Preloader);
