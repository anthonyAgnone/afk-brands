import React, { Component, createContext } from 'react';

const { Consumer, Provider } = createContext();

export default class Animation extends Component {
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
      date: ''
    };
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleSubmitForm(formData) {
    this.setState(
      {
        name: formData.name,
        userType: formData.userType,
        message: formData.message,
        email: formData.email,
        phone: formData.phone,
        discord: formData.discord,
        skype: formData.skype,
        date: formData.date
      },
      () => {
        // this is where we will take the data and submit it to the server
      }
    );
  }

  render() {
    const value = {
      handleSubmitForm: this.handleSubmitForm,
      ...this.state
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export const withForm = C => props => (
  <Consumer>{value => <C {...value} {...props} />}</Consumer>
);
