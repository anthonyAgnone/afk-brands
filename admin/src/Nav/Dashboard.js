import React, { Component } from 'react';
import Mailbox from '../Mailbox/Mailbox';

const cors = 'https://vschool-cors.herokuapp.com/?url=';

export default class Dashboard extends Component {

  render() {
    return (
        <Mailbox />
    );
  }
}
