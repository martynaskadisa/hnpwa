import { ROOT_ID } from 'common/constants';
import * as React from 'react';

interface IProps {
  scripts?: string[];
  app: React.ReactNode;
  state: object;
}

const createPreloadedState = (state: object) =>
  `window.__PRELOADED_STATE__ = ${JSON.stringify(state)}`;

const Html: React.SFC<IProps> = ({ scripts = [], children, app, state }) => (
  <html>
    <head>
      <title>HNPWA</title>
      <script
        type="module"
        async={true}
        dangerouslySetInnerHTML={{ __html: createPreloadedState(state) }}
      />
      {scripts.map(script => (
        <script key={script} src={script} async={true} type="module" />
      ))}
    </head>
    <body>
      <div id={ROOT_ID}>{app}</div>
      {children}
    </body>
  </html>
);

export default Html;
