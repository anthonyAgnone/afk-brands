import React, { Component, createContext } from 'react';
import axios from 'axios';

const { Consumer, Provider } = createContext();

export default class FormContext extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      userType: '',
      message: '',
      email: '',
      phone: '',
      discord: '',
      skype: '',
      date: '',
      errors: ''
    };
  }

  handleSubmitForm = userType => {
    this.setState(
      {
        userType
      },
      () => {
        // this is where we will take the data and submit it to the server
        console.log(this.state);
        axios.post('/api/messages', this.state).catch(err =>
          this.setState(
            {
              errors: err
            },
            () => console.log(this.state.errors)
          )
        );
      }
    );
  };

  updateInfo = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  render() {
    const value = {
      updateInfo: this.updateInfo,
      handleSubmitForm: this.handleSubmitForm,
      ...this.state
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export const withForm = C => props => (
  <Consumer>{value => <C {...value} {...props} />}</Consumer>
);
