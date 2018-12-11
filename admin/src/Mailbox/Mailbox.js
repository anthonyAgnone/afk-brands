import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'


import PromiseHandler from '../api/PromiseHandler';
import { withinView } from '../api/View';
import AllMessages from '../dataRequests/AllMessages';



const MailboxWrap = styled.div`
    width: 100vw;
    top: 20%
    border: 1px solid black;
    background: lightblue;
`

export default class Mailbox extends Component {
    // deleteMessage = () => {
    //     let url = `/api/messages/${i}`;
    //     return axios.put(url).then(response => response.data);
    // }
    getMessages = () => {
        let url = '/api/messages/';
        return axios.get(url).then(response => response.data);
    };
    render() {
        return (
            <MailboxWrap>
                INBOX
                <PromiseHandler
                    promise={this.getMessages}
                    render={withinView(AllMessages)}
                />
            </MailboxWrap>
        )
    }
}
