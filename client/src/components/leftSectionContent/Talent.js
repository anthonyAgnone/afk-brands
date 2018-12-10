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
        DO WHAT YOU LOVE AND GET RICH FROM OTHER PEOPLES MONEY THAT THEY GIVE
        YOU
      </h1>
      <Form user="talent" />
    </Wrapper>
  );
}
