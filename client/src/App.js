import React from 'react';
import { createGlobalStyle } from 'styled-components';
import AnimationWrapper from './components/utility/AnimationWrapper';
import Brand from './components/Brand';
import LeftSection from './components/LeftSection';
import Navigation from './components/Navigation';
import Main from './components/Main';

const GlobalStyle = createGlobalStyle`
  body: {
    overflow: hidden;
  }
`;

export default () => {
  return (
    <AnimationWrapper>
      <GlobalStyle />
      <Brand />
      <Navigation />
      <LeftSection />
      <Main />
    </AnimationWrapper>
  );
};
