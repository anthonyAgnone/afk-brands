import React, { Component } from 'react';
import { withForm } from '../contexts/FormContext';
import Modal from './Modal';
import styled from 'styled-components';

const FormWrapper = styled.form`
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
    div {
      position: relative;
      height: 20%;
      width: 100%;
      input {
        border: none;
        background-color: transparent;
        border-bottom: 2px solid #999;
        color: #fff;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        transition: all 0.6s ease;
        :focus {
          border-bottom: 2px solid #fff;
        }
        :focus + label {
          letter-spacing: 0.2em;
          font-size: 1.2em;
          top: -15px;
        }
      }
      label {
        position: absolute;
        top: 0;
        left: 0;
        transition: all 0.6s ease;
      }
    }
    & button {
      background-color: #352245;
      color: #fff;
      border: none;
      padding: 1em 2em;
      box-shadow: 0.3em 0.3em 0 0 #fff, inset 0.3em 0.3em 0 0 #fff;
      transition: 0.25s;
    }
    & button:hover,
    & button:focus {
      box-shadow: 0 0 0 0 #fff, inset 6em 3.5em 0 0 #fff;
      color: #352245;
      border-color: #fff;
    }
  }
  & .rightForm {
    width: 45%;
    height: 100%;
    div {
      label {
        margin-bottom: 2em;
      }
      textarea {
        background: transparent;
        border: 2px solid #999;
        width: 100%;
        height: 100%;
        padding: 0.5em;
        color: #fff;
        transition: all .6s ease;
      }
      textarea:focus {
        border: 2px solid #fff;
      }
    }
  }
  & 
`;
class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.props.updateInfo(name, value);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmitForm(this.props.user);
    this.handleModal();
  };

  handleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));
  };

  render() {
    return (
      <FormWrapper onSubmit={this.handleSubmit}>
        <Modal
          showModal={this.state.showModal}
          handleModal={this.handleModal}
        />
        <div className="leftForm">
          <div>
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              id="name"
              value={this.props.name}
            />
            <label htmlFor="name">Name: </label>
          </div>
          <div>
            <input
              type="email"
              name="email"
              onChange={this.handleChange}
              id="email"
              value={this.props.email}
            />
            <label htmlFor="email">Email: </label>
          </div>
          <div>
            <input
              type="tel"
              name="phone"
              onChange={this.handleChange}
              id="phone"
              value={this.props.phone}
            />
            <label htmlFor="phone">Phone: (optional)</label>
          </div>
          <button>Reach Out!</button>
        </div>

        <div className="rightForm">
          <div className="messageSection">
            <label htmlFor="message">Message: </label>
            <textarea
              rows="7"
              name="message"
              value={this.props.message}
              onChange={this.handleChange}
              id="message"
            />
          </div>
        </div>
        {/* maybe discord and skype here */}
      </FormWrapper>
    );
  }
}

export default withForm(Form);
