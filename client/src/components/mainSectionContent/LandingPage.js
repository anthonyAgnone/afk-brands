import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import YoutubeBackground from '../utility/YoutubeBackground'

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding-left: 10em;
  position: relative;
  & h1 {
    font-size: 6em;
    margin-bottom: 0.5em;
    font-weight: 400;
    letter-spacing: 0.2em;
    text-transform: uppercase;
  }
  & button {
    background-color: #352245;
    color: #fff;
    border: none;
    padding: 1em 2em;
    margin-bottom: 3em;
    box-shadow: 0.3em 0.3em 0 0 #fff, inset 0.3em 0.3em 0 0 #fff;
    transition: 0.25s;
    cursor: pointer;
  }
  & button:hover,
  & button:focus {
    box-shadow: 0 0 0 0 #fff, inset 6em 3.5em 0 0 #fff;
    color: #352245;
    border-color: #fff;
  }
`

const WrappedLink = (destination, content) => {
  return (
    <Link to={destination}>
      <button type="button">{content}</button>
    </Link>
  )
}

export default function LandingPage() {
  return (
    <Wrapper>
      <h1>Brands</h1>
      <button>LEARN MORE</button>
      <h1>Talent</h1>
      {WrappedLink('/talent', 'LEARN MORE')}
      <YoutubeBackground opacity="0.8" videoId="BBXKBB67FcY" />
    </Wrapper>
  )
}
