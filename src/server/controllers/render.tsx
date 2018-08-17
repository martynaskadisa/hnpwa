import App from 'common/app';
import { Middleware } from 'koa';
import * as React from 'react';
import { renderToNodeStream } from 'react-dom/server';
import Html from 'server/components/html';
import * as assets from '../../../webpack-assets.json';

console.log(assets);

const scripts = [assets.app.js];

export const render: Middleware = ctx => {
  ctx.set('Content-Type', 'text/html');
  const Component = () => (
    <Html scripts={scripts}>
      <App />
    </Html>
  );
  ctx.body = renderToNodeStream(<Component />);
};
