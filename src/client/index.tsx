import App from 'common/app';
import { ROOT_ID } from 'common/constants';
import configureStore from 'common/store/configure-store';
import { ConnectedRouter } from 'connected-react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import { loadComponents } from 'loadable-components';
import * as React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';

const history = createBrowserHistory();
const preloadedState = window.__PRELOADED_STATE__;
const store = configureStore(history, preloadedState);

import(/* webpackChunkName: 'saga', webpackPrefetch: true */ 'common/store/saga').then(
  ({ default: saga }) => store.runSaga(saga)
);

const Component: React.SFC = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);

loadComponents().then(() =>
  hydrate(<Component />, document.getElementById(ROOT_ID))
);
