import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navigation from './Nav/Navigation';
import Dashboard from './Nav/Dashboard';
import Login from './Auth/Login';
import ProtectedRoute from './Auth/ProtectedRoute';

function App() {
  return (
    <div className="app-wrapper">
      <Navigation />
      <Switch>
        <Route path="/login" component={Login} />
        {/* <ProtectedRoute path="/admin" component={Dashboard} /> */}
        <Route exact path="/" render={() => <Redirect to="/login" />} />
      </Switch>
    </div>
  );
}

export default App;
