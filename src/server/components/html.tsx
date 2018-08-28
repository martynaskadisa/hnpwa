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
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <meta name="description" content="Hacker News clone in React and Redux" />
      <title>HNPWA</title>
      <script
        type="module"
        async={true}
        dangerouslySetInnerHTML={{ __html: createPreloadedState(state) }}
      />
      {scripts.map(script => (
        <script key={script} src={script} async={true} type="module" />
      ))}
      <style
      >{`html{box-sizing:border-box;background-color:#f6f6ef}*,*:before,*:after{box-sizing: inherit}body{margin:0;font-family:sans-serif}`}</style>
    </head>
    <body>
      <div id={ROOT_ID}>{app}</div>
      {children}
    </body>
  </html>
);

export default Html;
