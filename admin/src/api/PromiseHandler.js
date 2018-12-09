import React, { Component } from 'react';

export default class PromiseHandler extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      err: null,
      loading: true
    };
  }

  componentDidMount() {
    this.props.promise().then(data =>
      this.setState({
        loading: false,
        err: null,
        data
      })
    );
  }
  render() {
    return this.props.render(this.state);
  }
}
