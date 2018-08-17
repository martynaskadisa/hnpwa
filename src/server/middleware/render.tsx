import App from 'common/app';
import { Context, Middleware } from 'koa';
import * as React from 'react';
import { renderToNodeStream } from 'react-dom/server';
import Html from 'server/components/html';
import * as assets from '../../../webpack-assets.json';

console.log('Im static');

const getScripts = (ctx: Context) => {
  if (!ctx.state.webpackStats) {
    return [assets.app.js];
  }

  return [ctx.state.webpackStats.toJson().assetsByChunkName.app];
};

export const render: Middleware = ctx => {
  const scripts = getScripts(ctx);

  console.log(scripts);

  ctx.set('Content-Type', 'text/html');
  const Component = () => (
    <Html scripts={scripts}>
      <App />
    </Html>
  );
  ctx.body = renderToNodeStream(<Component />);
};
