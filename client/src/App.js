import React from 'react';
import { createGlobalStyle } from 'styled-components';
import AnimationWrapper from './components/utility/AnimationWrapper';
import Brand from './components/Brand';
import LeftSection from './components/LeftSection';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Preloader from './components/preloader/Preloader';
const GlobalStyle = createGlobalStyle`
  body: {
    overflow: hidden;
  }
`;

export default () => {
  return (
    <AnimationWrapper>
      <Preloader />
      <GlobalStyle />
      <Brand />
      <Navigation />
      <LeftSection />
      <Main />
    </AnimationWrapper>
  );
};
