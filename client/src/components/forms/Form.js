import React, { Component } from 'react';
import { withForm } from '../contexts/FormContext';
import styled from 'styled-components';

const FormWrapper = styled.div`
  width: 80%;
  height: 40%;
  display: flex;
  justify-content: space-between;
  & .leftForm {
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  & .rightForm {
    width: 45%;
    height: 100%;
    label {
      margin-bottom: 2em;
    }
  }
  & input {
    border: none;
    background-color: transparent;
    border-bottom: 2px solid #fff;
    color: #fff;
    width: 100%;
  }
  & textarea {
    background: transparent;
    border: 2px solid #fff;
    width: 100%;
    height: 100%;
    padding: 0.5em;
    color: #fff;
  }
`;
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
      <FormWrapper onSubmit={this.handleSubmit}>
        <div className="leftForm">
          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              id="name"
            />
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              onChange={this.handleChange}
              id="email"
            />
          </div>
          <div>
            <label htmlFor="phone">Phone: </label>
            <input
              type="tel"
              name="phone"
              onChange={this.handleChange}
              id="phone"
            />
          </div>
        </div>

        <div className="rightForm">
          <div className="messageSection">
            <label htmlFor="message">Message: </label>
            <textarea
              rows="7"
              name="message"
              value={this.state.message}
              onChange={this.handleChange}
              id="message"
            />
          </div>
        </div>
        {/* maybe discord and skype here */}

        {/* make buttons not go to tope right. going to have to give specific id to  m enu item */}
      </FormWrapper>
    );
  }
}

export default withForm(Form);
