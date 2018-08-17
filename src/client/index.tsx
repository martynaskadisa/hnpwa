import App from 'common/app';
import { ROOT_ID } from 'common/constants';
import * as React from 'react';
import { hydrate } from 'react-dom';

hydrate(<App />, document.getElementById(ROOT_ID));
