import React from 'react'
import styled from 'styled-components'
import { lighten } from 'polished'

const Wrapper = styled.div`
  width: 50vw;
  height: 85vh;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: ${props => props.bg};
  z-index: -1;
  &.clone {
    background-color: ${props => lighten(0.035, props.bg)};
    transition: all 0.8s cubic-bezier(0.15, 0.84, 0.46, 0.93);
  }
  border: ${props => (props.border ? 'none' : '5px solid #fff')};
`

export default function Box({ bgColor, classname, maskX, maskY, border }) {
  return (
    <Wrapper
      style={{
        clipPath: `polygon(0 0, ${maskX + maskY * 0.5}% 0, ${maskX + maskY * -0.5}% 100%, 0 100%)`
      }}
      className={classname}
      bg={bgColor}
      border={border}
    />
  )
}
