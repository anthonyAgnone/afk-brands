import React from 'react';
import styled from 'styled-components';
import Brand from './Brand';
import NavigationSection from './NavigationSection';
import MainSection from './MainSection';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  color: #352245;
`;

export default () => {
  return (
    <Wrapper>
      <Brand />
      <NavigationSection />
      <MainSection />
    </Wrapper>
  );
};
