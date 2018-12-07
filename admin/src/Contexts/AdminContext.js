import React, { Component, createContext } from 'react';

import { withRouter } from 'react-router-dom';

import axios from 'axios';
const userAxios = axios.create();

userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

const UserData = createContext();

class AdminContext extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      token: localStorage.getItem('token') || ''
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  async getUser() {
    const user = await userAxios
      .get('/auth/verify')
      .then(response => response.data);
    this.setState({ user }, () => this.props.history.push('/dashboard'));
  }

  login = credentials => {
    axios
      .post('/auth/login', credentials)
      .then(response => {
        const { user, token } = response.data;
        localStorage.setItem('token', token);
        this.setState({
          user,
          token
        });
        return response.data.user.userName;
      })
      .then(userName => this.props.history.push(`/dashboard`));
  };

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.setState({ user: {}, token: '' }, () => this.props.history.push('/'));
  }

  sendCredentials = credentials =>
    axios.post('/auth/login', credentials).then(response => response.data);

  componentDidMount() {
    this.getUser();
  }

  render() {
    const props = {
      ...this.state,
      login: this.login,
      logout: this.logout
    };
    return (
      <UserData.Provider value={props}>{this.props.children}</UserData.Provider>
    );
  }
}

export default withRouter(AdminContext);

export const withAdmin = C => props => (
  <UserData.Consumer>{value => <C {...value} {...props} />}</UserData.Consumer>
);
