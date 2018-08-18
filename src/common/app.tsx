import Navbar from 'common/components/navbar/component';
import Home from 'common/scenes/home';
import New from 'common/scenes/new';
import NotFound from 'common/scenes/not-found';
import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';
import { routes } from './routes';

const App: React.SFC = () => (
  <>
    <Navbar />
    <Switch>
      <Route path={routes.home.path} exact={true} component={Home} />
      <Route path={routes.new.path} component={New} />
      <Route component={NotFound} />
    </Switch>
  </>
);

export default hot(module)(App);
