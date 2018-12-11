import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const MessageWrapper = styled.div`
    width: 100vw;
    top: 20%
    border: 1px solid black;
    background: lightblue;
`

function componentName() {
    return (
        <MessageWrapper>
            <Link>Return to Inbox</Link>
        </MessageWrapper>
    )
}

export default componentName
