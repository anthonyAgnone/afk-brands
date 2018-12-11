import React from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import styled from 'styled-components';

const Message = styled.div`
  display: grid;
  // grid-template-columns: 20px 0.5fr 1fr 0.5fr 0.5fr;
  background-color: ${props => (props.read ? '#ccc' : 'yellow')};
  & .delete-button {
    background: red;
  }
`;

const AllMessages = ({ data }) => {
  const messages = data.messages.map(
    ({ name, email, message, read, phone }, i) => (
      <ListGroupItem>
        <Button className="delete-button">X</Button>
        <Message read={read} index={i}>
          {/* <p>{i}</p> */}
          <p>From: {name}</p>
          {/* <p>{message}</p> */}
          {/* <p>{email}</p> */}
          {/* <p>{phone}</p> */}
        </Message>
      </ListGroupItem>
    )
  );
  return <ListGroup>{messages}</ListGroup>;
};

export default AllMessages;
