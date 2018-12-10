import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import styled from 'styled-components';

const Message = styled.div`
  display: grid;
  grid-template-columns: 20px 0.5fr 1fr 0.5fr 0.5fr;
  background-color: ${props => (props.read ? '#ccc' : 'yellow')};
`;

const AllMessages = ({ data }) => {
  const messages = data.messages.map(
    ({ name, email, message, read, phone }, i) => (
      <ListGroupItem>
        <Message read={read}>
          <p>{i}</p>
          <p>{name}</p>
          <p>{message}</p>
          <p>{email}</p>
          <p>{phone}</p>
        </Message>
      </ListGroupItem>
    )
  );
  return <ListGroup>{messages}</ListGroup>;
};

export default AllMessages;
