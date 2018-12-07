import React, { Component } from 'react';
import {
  Card,
  CardTitle,
  CardSubtitle,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { withAdmin } from '../Contexts/AdminContext';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    height: 25vh;
    padding: 3em 3em 3em 2em;
  }
`;

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      password: ''
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.login(this.state);
  };
  render() {
    return (
      <Wrapper className="col-sm-12 col-md-6 offset-md-3">
        <Card>
          <CardTitle>Login</CardTitle>
          <CardSubtitle>this is a protected area</CardSubtitle>
          <Form onSubmit={this.handleSubmit} inline>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="exampleEmail" className="mr-sm-2">
                User Name
              </Label>
              <Input
                type="text"
                name="userName"
                id="username"
                placeholder="username"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="examplePassword" className="mr-sm-2">
                Password
              </Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                onChange={this.handleChange}
              />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </Card>
      </Wrapper>
    );
  }
}

export default withAdmin(LoginForm);
