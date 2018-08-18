import App from 'common/app';
import { ROOT_ID } from 'common/constants';
import { loadComponents } from 'loadable-components';
import * as React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

const Component: React.SFC = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

loadComponents().then(() =>
  hydrate(<Component />, document.getElementById(ROOT_ID))
);
