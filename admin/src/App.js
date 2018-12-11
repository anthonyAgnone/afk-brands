import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navigation from './Nav/Navigation';
import Dashboard from './Nav/Dashboard';
import Login from './Auth/Login';
import Message from './Mailbox/Message'
import ProtectedRoute from './Auth/ProtectedRoute';
import Mailbox from './Mailbox/Mailbox';

function App() {
  return (
    <div className="app-wrapper">
      <Navigation />
      <Switch>
        <Route path="/login" component={Login} />
        <ProtectedRoute path="/dashboard" component={Dashboard} />
        <ProtectedRoute path="/mailbox" component={Mailbox} />
        <ProtectedRoute path="/message" component={Message} />
        <Route exact path="/" render={() => <Redirect to="/login" />} />
      </Switch>
    </div>
  )
}
export default App;
