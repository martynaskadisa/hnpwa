import Home from 'common/scenes/Home';
import New from 'common/scenes/New';
import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';
import { routes } from './routes';

const App: React.SFC = () => (
  <Switch>
    <Route path={routes.home.path} exact={true} component={Home} />
    <Route path={routes.new.path} component={New} />
  </Switch>
);

export default hot(module)(App);
