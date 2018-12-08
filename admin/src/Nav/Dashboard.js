import React, { Component } from 'react';
import axios from 'axios';
import PromiseHandler from '../api/PromiseHandler';
import { withinView } from '../api/View';

import AllMessages from '../dataRequests/AllMessages';

const cors = 'https://vschool-cors.herokuapp.com/?url=';

export default class Dashboard extends Component {
  getMessages = () => {
    const url = '/api/messages/';
    return axios.get(url).then(response => response.data);
  };

  render() {
    return (
      <PromiseHandler
        promise={this.getMessages}
        render={withinView(AllMessages)}
      />
    );
  }
}
