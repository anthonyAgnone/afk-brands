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
        axios
          .post('/api/messages', this.state)
          .then(() => this.clearInputs())
          .catch(err =>
            this.setState({
              errors: err
            })
          );
      }
    );
  };

  updateInfo = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  clearInputs = () => {
    this.setState({
      name: '',
      message: '',
      email: '',
      phone: '',
      discord: '',
      skype: '',
      date: '',
      errors: ''
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
