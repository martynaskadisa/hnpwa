import Navbar from 'common/components/navbar/component';
import Feed from 'common/scenes/feed';
import Item from 'common/scenes/item';
import NotFound from 'common/scenes/not-found';
import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';
import { routes } from './routes';

const App: React.SFC = () => (
  <>
    <Navbar />
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <Switch>
        <Route from={routes.home.path} exact={true} component={Feed} />
        <Route path={routes.ask.path} component={Feed} />
        <Route path={routes.jobs.path} component={Feed} />
        <Route path={routes.new.path} component={Feed} />
        <Route path={routes.show.path} component={Feed} />
        <Route path={routes.top.path} component={Feed} />
        <Route path={routes.item.path} component={Item} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </>
);

export default hot(module)(App);
