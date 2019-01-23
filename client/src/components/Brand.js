import React from 'react'
import styled from 'styled-components'
import { withAnimation } from './contexts/Animation'
import { Link } from 'react-router-dom'

const BrandWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0.5em 1.5em;
  & h1 {
    font-size: 3em;
    letter-spacing: 0.05em;
  }
  & a {
    color: #fff;
  }
`

const Brand = ({ brand }) => {
  return (
    <BrandWrap ref={brand}>
      <Link to="/">
        <h1>AFK</h1>
      </Link>
      <Link to="/">
        <h2>Gaming Content Creators & Streamers</h2>
      </Link>
    </BrandWrap>
  )
}

export default withAnimation(Brand)
