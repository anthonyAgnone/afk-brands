import React from 'react';
import styled from 'styled-components';
import YoutubeBackground from '../utility/YoutubeBackground';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
`;

const H1 = styled.h1`
  font-size: 5.5em;
  margin: 1% 0 0 1em;
  color: #fff;
  font-weight: 300;
`;

const H2 = styled.h2`
  max-width: 65%;
  position: relative;
  left: 30%;
  color: #fff;
  padding-top: 3em;
  margin-bottom: 2em;
  background: rgba(0, 0, 0, 0.2);
`;

export default function AboutUs() {
  return (
    <Wrapper>
      <H1>SPONSORS</H1>
      <H2>
        THIS SHOULD BE A BUNCH OF STUFF ABOUT LIKE ALL THE STUFF Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Doloremque perspiciatis
        perferendis eaque corrupti, nesciunt quos unde iusto, voluptatum sunt
        iste illum? Eum, quibusdam assumenda doloremque facilis nihil temporibus
        ratione ab? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Doloremque perspiciatis perferendis eaque corrupti, nesciunt quos unde
        iusto, voluptatum sunt iste illum? Eum, quibusdam assumenda doloremque
        facilis nihil temporibus ratione ab?
      </H2>
      <H2>
        THIS SHOULD BE A BUNCH OF STUFF ABOUT LIKE ALL THE STUFF Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Doloremque perspiciatis
        perferendis eaque corrupti, nesciunt quos unde iusto, voluptatum sunt
        iste illum? Eum, quibusdam assumenda doloremque facilis nihil temporibus
        ratione ab? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Doloremque perspiciatis perferendis eaque corrupti, nesciunt quos unde
        iusto, voluptatum sunt iste illum? Eum, quibusdam assumenda doloremque
        facilis nihil temporibus ratione ab?
      </H2>
      <YoutubeBackground opacity="1" videoId="6pLpC_wO5l0" />
    </Wrapper>
  );
}
