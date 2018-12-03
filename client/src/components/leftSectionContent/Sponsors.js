import React from 'react';
import styled from 'styled-components';
import Form from '../forms/Form';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  & h1 {
    max-width: 75%;
    margin-bottom: 3em;
  }
`;

export default function AboutUs() {
  return (
    <Wrapper>
      <h1>
        BE A SPONSOR TODAY AND GET RICH OFF OF OTHER PEOPLES WORK WHILE THEY GET
        RICH FROM YOUR MONEY
      </h1>
      <Form user="sponsor" />
    </Wrapper>
  );
}
