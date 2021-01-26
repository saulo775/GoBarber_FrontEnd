import React from 'react';
import { Switch, Route } from 'react-router-dom';

import signIn from '../pages/SignIn';
import signUp from '../pages/SignUp';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={signIn} />
    <Route path="/signup" component={signUp} />
  </Switch>
);

export default Routes;
