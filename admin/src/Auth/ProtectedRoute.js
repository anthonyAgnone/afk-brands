import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { withAdmin } from '../Contexts/AdminContext';

function Protectedroute({ token, component }) {
  return token ? <Route component={component} /> : <Redirect to="/login" />;
}

export default withAdmin(Protectedroute);
