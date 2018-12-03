import React, { Component } from 'react';
import { withForm } from '../contexts/FormContext';

class Form extends Component {
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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmitForm(this.state);
  }

  componentWillMount() {
    this.setState({
      userType: this.props.user
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            id="name"
            placeholder="Name"
          />
          <fieldset id="context">
            <input
              type="email"
              name="email"
              onChange={this.handleChange}
              id="email"
              placeholder="Email"
            />
            <input
              type="tel"
              name="phone"
              onChange={this.handleChange}
              id="phone"
            />
            {/* maybe discord and skype here */}
          </fieldset>
          <input
            type="text"
            name="message"
            onChange={this.handleChange}
            id="message"
            placeholder="Message"
          />
          {/* make buttons not go to tope right. going to have to give specific id to  m enu item */}
        </form>
      </div>
    );
  }
}

export default withForm(Form);
