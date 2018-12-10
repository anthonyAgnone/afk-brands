import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  display: ${props => (props.show ? 'block' : 'none')};
  opacity: ${props => (props.show ? '1' : '0')};
  transition: all 0.6s ease;
  .modal {
    width: 33vw;
    height: 33vh;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #352245;
    color: #fff;
    padding: 5em;
    text-align: center;
    h1 {
      margin: 0;
      padding: 0;
    }
  }
  & button {
    background-color: #352245;
    color: #fff;
    border: none;
    padding: 1em 2em;
    box-shadow: 0.3em 0.3em 0 0 #fff, inset 0.3em 0.3em 0 0 #fff;
    transition: 0.25s;
    margin-top: 3em;
  }
  & button:hover,
  & button:focus {
    box-shadow: 0 0 0 0 #fff, inset 6em 3.5em 0 0 #fff;
    color: #352245;
    border-color: #fff;
  }
`;
const Modal = ({ handleModal, showModal }) => {
  return (
    <Wrapper onClick={() => handleModal()} show={showModal}>
      <div className="modal">
        <h2>Your message has been sent!</h2>
        <h3>We will contact you shortly!</h3>
        <button onClick={() => handleModal()}>Close</button>
      </div>
    </Wrapper>
  );
};

export default Modal;
