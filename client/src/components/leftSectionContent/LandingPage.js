import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  & h1 {
    margin-bottom: 1em;
    font-size: 3.5em;
    letter-spacing: 0.1em;
    font-weight: 400;
  }
  & h3 {
    text-transform: uppercase;
    padding-left: 1em;
    max-width: 75%;
  }
`
export default function LandingPage() {
  return (
    <Wrapper>
      <h1>
        <span id="header1">LET'S GO </span>
        <span id="header2">AFK!</span>
      </h1>
      <h3>We connect the best gaming content creators and streamers to the most exciting sponsorship opportunities.</h3>
    </Wrapper>
  )
}
